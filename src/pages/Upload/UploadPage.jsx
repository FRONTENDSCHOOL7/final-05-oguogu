import React from 'react'
import { AddPictureBtn, AddPictureContainer, AddPictureList, AddPictureListEle, CanclePictureBtn, Categorybox, EnterText, SelectCategory, UploadPageBg } from './UploadPage.style'
import Header from 'components/common/header/Header'
import Button from 'components/common/button/Button'
import { useNavigate } from 'react-router-dom'

export default function UploadPage() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1)}

  return (
    <UploadPageBg>
      <Header  type="btn"  btnText="업로드" leftOnClick={back} />

      <AddPictureContainer>
        <AddPictureBtn>사진 추가</AddPictureBtn>
          <AddPictureList>
            <AddPictureListEle>
              <CanclePictureBtn></CanclePictureBtn>
            </AddPictureListEle>
            <AddPictureListEle>
              <CanclePictureBtn></CanclePictureBtn>
            </AddPictureListEle>
          </AddPictureList>

      </AddPictureContainer>
          <EnterText placeholder = "게시글 입력하기"></EnterText>
      
      <SelectCategory>카테고리 선택</SelectCategory>
      <Categorybox>
        <Button size="md" vari="shadow" text="#전체" />
        <Button size="md" vari="shadow" text="#고민있어요" />
        <Button size="md" vari="shadow" text="#내새꾸간식" />
        <Button size="md" vari="shadow" text="#질문있어요" />
        <Button size="md" vari="shadow" text="#내새꾸자랑" />
      </Categorybox>


    </UploadPageBg>

  )
}
