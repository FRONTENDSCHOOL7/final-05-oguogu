import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { imgUploadAPI } from 'api/image.api';
import { PostEditAPI, postDetailAPI, postUploadAPI } from 'api/post.api';
import {
  AddPictureBtn,
  AddPictureContainer,
  AddPictureList,
  AddPictureListEle,
  CanclePictureBtn,
  Categorybox,
  EnterText,
  FileInput,
  SelectCategory,
  UploadPageBg,
} from 'pages/PostUpload/PostUploadPage.style';
import Header from 'components/common/header/Header';
import Button from 'components/common/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { imgUploadAPI } from 'api/image.api';
import { PostEditAPI, postDetailAPI } from 'api/post.api';

export default function PostEditPage() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [curKategorie, setCurKategorie] = useState('#내새꾸자랑');
  const [text, setText] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { postid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 게시글 ID를 사용하여 게시글 가져오기
    const getPostData = async () => {
      try {
        const postData = await postDetailAPI(postid);
        const content = JSON.parse(postData.content);
        setText(content.text);
        setCurKategorie(content.kate);
        if (postData.image.length) {
          const imageUrls = postData.image.split(',');
          setImages(imageUrls);
          setPreviewImages(imageUrls);
        }
      } catch (error) {
        alert.error('상품 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    getPostData();
  }, [postid]);

  //카테고리 버튼 클릭이벤트
  const handleSelectBtn = (e) => {
    setCurKategorie(e.target.textContent);
  };

  // 사진 추가
  const handleFileSelect = (e) => {
    const selectedImages = Array.from(e.target.files); // 선택된 이미지들을 배열로 변환
    console.log('Selected Images:', selectedImages);
    setImages((prevImages) => [...prevImages, ...selectedImages]); // 기존 이미지 배열에 추가
    const previewImageUrls = selectedImages.map((image) => URL.createObjectURL(image));
    setPreviewImages((prevPreviewImages) => [...prevPreviewImages, ...previewImageUrls]); // 미리보기 이미지 URL들을 상태에 추가
  };

  // 사진 삭제

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index)); // 선택한 이미지 제거
    setPreviewImages(previewImages.filter((_, i) => i !== index)); // 선택한 이미지 미리보기 URL 제거
  };

  // 게시글 내용 입력 받기
  const handleOnChangeText = (e) => {
    setText(e.target.value);
  };

  // 게시글 내용이 있을때만 버튼 활성화
  useEffect(() => {
    text === '' ? setSubmitDisabled(true) : setSubmitDisabled(false);
  }, [text]);

  // 게시글 업로드
  const handlePostEdit = () => {
    const filterImg = images.filter((img) => typeof img === 'string');
    const uploadImgs = images.length ? images.filter((img) => typeof img === 'object').map((image) => imgUploadAPI(image)) : [];
    Promise.all(uploadImgs)
      .then((responses) => {
        console.log(responses);
        const imgPaths = responses.map((res) => (res === 'https://api.mandarin.weniv.co.kr/undefined' ? '' : res));
        const combinedImagePaths = [...filterImg, ...imgPaths];
        const content = { text: text, kate: curKategorie };

        // 여러 이미지 업로드의 경우 imgPaths를 배열로 전달
        const promise = PostEditAPI(JSON.stringify(content), combinedImagePaths.join(','), postid);

        promise
          .then((data) => {
            navigate(`/post/${data.id}`, { replace: true });
          })
          .catch((error) => {
            alert('게시글 업로드 실패', error);
          });
      })
      .catch((error) => {
        alert('이미지 업로드 실패');
      });
  };

  return (
    <UploadPageBg>
      <Header type="btn" btnText="업로드" btndisabled={submitDisabled} rightOnClick={handlePostEdit} />
      <AddPictureContainer>
        <AddPictureBtn onClick={() => fileInputRef.current.click()}>
          <FileInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} />
          사진 추가
        </AddPictureBtn>
        <AddPictureList>
          {previewImages.map((src, index) => (
            <AddPictureListEle key={index}>
              <img src={src} alt={`Image ${index + 1}`} />
              <CanclePictureBtn onClick={() => handleRemoveImage(index)} />
            </AddPictureListEle>
          ))}
        </AddPictureList>
      </AddPictureContainer>
      <EnterText value={text} onChange={handleOnChangeText} placeholder="게시글 입력하기" />
      <SelectCategory>카테고리 선택</SelectCategory>
      <Categorybox>
        <Button size="md" vari="shadow" text="#내새꾸자랑" selected={curKategorie === '#내새꾸자랑'} onClick={handleSelectBtn} />
        <Button size="md" vari="shadow" text="#고민있어요" selected={curKategorie === '#고민있어요'} onClick={handleSelectBtn} />
        <Button size="md" vari="shadow" text="#질문있어요" selected={curKategorie === '#질문있어요'} onClick={handleSelectBtn} />
        <Button size="md" vari="shadow" text="#내새꾸간식" selected={curKategorie === '#내새꾸간식'} onClick={handleSelectBtn} />
        <Button size="md" vari="shadow" text="#내새꾸선물" selected={curKategorie === '#내새꾸선물'} onClick={handleSelectBtn} />
      </Categorybox>
    </UploadPageBg>
  );
}
