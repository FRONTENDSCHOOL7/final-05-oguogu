import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { imgUploadAPI } from 'api/image.api';
import { postUploadAPI } from 'api/post.api';
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
import { useNavigate } from 'react-router-dom';
import { postUploadAPI } from 'api/post.api';
import { imgUploadAPI } from 'api/image.api';

export default function PostUploadPage() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]); // 초기 상태를 빈 배열로 설정
  const [previewImages, setPreviewImages] = useState([]);
  const [curKategorie, setCurKategorie] = useState('#내새꾸자랑');
  const [text, setText] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // 뒤로가기
  const navigate = useNavigate();

  // 카테고리 버튼 클릭 이벤트
  const handleSelectBtn = (e) => {
    setCurKategorie(e.target.textContent);
  };

  // 사진 추가
  const handleFileSelect = (e) => {
    const selectedImages = Array.from(e.target.files); // 선택된 이미지들을 배열로 변환
    console.log('Selected Images:', selectedImages);
    setImages(images.concat(selectedImages)); // 기존 이미지 배열에 추가
    const previewImageUrls = selectedImages.map((image) => URL.createObjectURL(image));
    console.log('Preview Image URLs:', previewImageUrls);
    setPreviewImages(previewImages.concat(previewImageUrls)); // 미리보기 이미지 URL들을 상태에 저장
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

  // 게시글 내용이 있을 때만 버튼 활성화
  useEffect(() => {
    text === '' ? setSubmitDisabled(true) : setSubmitDisabled(false);
  }, [text]);

  // 게시글 업로드
  const handleSubmit = () => {
    const uploadImgs = images.map((image) => imgUploadAPI(image));
    Promise.all(uploadImgs)
      .then((res) => {
        const imgPaths = res.map((path) => (path === 'https://api.mandarin.weniv.co.kr/undefined' ? '' : path));
        const imgPathsStr = imgPaths.join(','); // 배열을 문자열로 변환
        const content = { text: text, kate: curKategorie };
        const promise = postUploadAPI(JSON.stringify(content), imgPathsStr);
        promise
          .then((data) => {
            navigate(`/post/${data.id}`, { replace: true });
          })
          .catch((err) => {
            alert('게시글 업로드 실패');
          });
      })
      .catch((err) => {
        alert('이미지 업로드 실패');
      });
  };
  return (
    <UploadPageBg>
      <Header type="btn" btnText="업로드" btndisabled={submitDisabled} rightOnClick={handleSubmit} />
      <AddPictureContainer>
        <AddPictureBtn onClick={() => fileInputRef.current.click()}>
          <FileInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} multiple />
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
