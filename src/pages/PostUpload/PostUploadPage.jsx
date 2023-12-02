import React, { useEffect, useRef, useState } from 'react';
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
import { imgUploadAPI } from 'api/image.api';
import { postUploadAPI } from 'api/post.api';

export default function PostUploadPage() {
  const fileInputRef = useRef(null);
  const images = useRef([]); // 빈 배열로 초기화
  const [previewImages, setPreviewImages] = useState('');
  const images = useRef([]); // 빈 배열로 초기화
  const [previewImages, setPreviewImages] = useState('');
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
  const selectedImage = e.target.files[0];
  images.current = [selectedImage]; // Set the images array with the selected image
  if (selectedImage) {
    const imageUrl = URL.createObjectURL(selectedImage);
    setPreviewImages(imageUrl);
  }
};

// 사진 삭제
const handleRemoveImage = () => {
  images.current = [];
  setPreviewImages(''); 
};

  // 게시글 내용 입력 받기
  // 게시글 내용 입력 받기
  const handleOnChangeText = (e) => {
    setText(e.target.value);
  };

  // 게시글 내용이 있을 때만 버튼 활성화
  // 게시글 내용이 있을 때만 버튼 활성화
  useEffect(() => {
    text === '' ? setSubmitDisabled(true) : setSubmitDisabled(false);
  }, [text]);

  // 게시글 업로드
  // 게시글 업로드
  const handleSubmit = () => {
    // 이미지 업로드 api
    // 이미지 업로드 api
    const uploadImg = imgUploadAPI(images.current[0]);
    uploadImg
      .then((res) => {
        const imgPath = res === 'https://api.mandarin.weniv.co.kr/undefined' ? '' : res;
        const content = { text: text, kate: curKategorie };
        // 게시글 작성 api
        // 게시글 작성 api
        const promise = postUploadAPI(JSON.stringify(content), imgPath);
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
        alert('이미지 업로드 실패');
      });
  };

  return (
    <UploadPageBg>
      <Header type="btn" btnText="업로드" btndisabled={submitDisabled} rightOnClick={handleSubmit} />
      <Header type="btn" btnText="업로드" btndisabled={submitDisabled} rightOnClick={handleSubmit} />
      <AddPictureContainer>
        <AddPictureBtn onClick={() => fileInputRef.current.click()}>
          <FileInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} />
          사진 추가
        </AddPictureBtn>
        <AddPictureList>
          {previewImages && (
            <AddPictureListEle key={1}>
              <img src={previewImages} alt={`Image`} />
              <CanclePictureBtn onClick={() => handleRemoveImage()} />
          {previewImages && (
            <AddPictureListEle key={1}>
              <img src={previewImages} alt={`Image`} />
              <CanclePictureBtn onClick={() => handleRemoveImage()} />
            </AddPictureListEle>
          )}
          )}
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
