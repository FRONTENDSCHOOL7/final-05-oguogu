import React, { useRef, useState } from 'react';
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
  const images = useRef([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [curKategorie, setCurKategorie] = useState('#내새꾸자랑');
  const [text, setText] = useState('');

  //뒤로가기
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  //카테고리 버튼 클릭이벤트
  const handleSelectBtn = (e) => {
    setCurKategorie(e.target.textContent);
  };

  //사진추가
  const handleFileSelect = (e) => {
    images.current.push(e.target.files[0]);
    if (images.current.length) {
      const imageUrl = URL.createObjectURL(images.current[0]);
      setPreviewImages([...previewImages, imageUrl]);
    }
  };

  //사진삭제
  const handleRemoveImage = (index) => {
    const updatedpreviewImages = [...previewImages];
    updatedpreviewImages.splice(index, 1);
    setPreviewImages(updatedpreviewImages);
  };

  //게시글 업로드
  const handleSubmit = () => {
    //이미지업로드 api
    const uploadImg = imgUploadAPI(images.current[0]);
    uploadImg
      .then((res) => {
        const imgPath = res;
        const content = { text: text, kate: curKategorie };
        //게시글작성 api
        const promise = postUploadAPI(JSON.stringify(content), imgPath);
        promise
          .then((data) => {
            navigate(`/post/${data.id}`);
          })
          .catch((err) => {
            alert('게시글 업로드 실패');
          });
      })
      .catch((err) => {
        alert('이미지업로드 실패');
      });
  };

  return (
    <UploadPageBg>
      <Header type="btn" btnText="업로드" leftOnClick={back} rightOnClick={handleSubmit} />
      <AddPictureContainer>
        <AddPictureBtn onClick={() => fileInputRef.current.click()}>
          <FileInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} />
          사진 추가
        </AddPictureBtn>
        <AddPictureList>
          {previewImages.map((image, index) => (
            <AddPictureListEle key={index}>
              <img src={image} alt={`Image ${index}`} />
              <CanclePictureBtn onClick={() => handleRemoveImage(index)} />
            </AddPictureListEle>
          ))}
        </AddPictureList>
      </AddPictureContainer>
      <EnterText value={text} onChange={(e) => setText(e.target.value)} placeholder="게시글 입력하기" />
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
