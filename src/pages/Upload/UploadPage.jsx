import React, { useRef, useState } from 'react';
import { AddPictureBtn, AddPictureContainer, AddPictureList, AddPictureListEle, CanclePictureBtn, Categorybox, EnterText, FileInput, SelectCategory, UploadPageBg } from './UploadPage.style';
import Header from 'components/common/header/Header';
import Button from 'components/common/button/Button';
import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }

  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <UploadPageBg>
      <Header type="btn" btnText="업로드" leftOnClick={back} />
      <AddPictureContainer>
        <AddPictureBtn onClick={() => fileInputRef.current.click()}>
          <FileInput
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
          사진 추가
        </AddPictureBtn>
        <AddPictureList>
          {images.map((image, index) => (
            <AddPictureListEle key={index}>
              <img src={image} alt={`Image ${index}`} />
              <CanclePictureBtn onClick={() => handleRemoveImage(index)}></CanclePictureBtn>
            </AddPictureListEle>
          ))}
        </AddPictureList>
      </AddPictureContainer>
      <EnterText placeholder="게시글 입력하기"></EnterText>
      <SelectCategory>카테고리 선택</SelectCategory>
      <Categorybox>
        <Button size="md" vari="shadow" text="#내새꾸선물" />
        <Button size="md" vari="shadow" text="#고민있어요" />
        <Button size="md" vari="shadow" text="#내새꾸간식" />
        <Button size="md" vari="shadow" text="#질문있어요" />
        <Button size="md" vari="shadow" text="#내새꾸자랑" />
      </Categorybox>
    </UploadPageBg>
  );
}
