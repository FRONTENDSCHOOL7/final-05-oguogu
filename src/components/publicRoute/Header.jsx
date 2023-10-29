import React, { useState } from 'react';
import Button from 'components/common/button/Button';
import { useNavigate } from 'react-router';
import { Container, CenterText, ProfileSettingCenterText, CenterSubText, Wrap, ImageWrap, ChangeImg } from 'components/publicRoute/Header.style';
import iconPicture from 'assets/images/icon_picture.png';
import { imgUploadAPI } from 'api/image.api';

export default function Header({ isProfileSetting, text, subText, isRender }) {
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };
  const [imageSrc, setImageSrc] = useState(null);

  const handleImgUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const newImage = event.target.result;
        setImageSrc(newImage);

        // 이미지를 로컬 스토리지에 저장 (Base64로 인코딩)
        localStorage.setItem('userImage', newImage);

        // 이미지 업로드 API 호출 (Header에서 직접 호출)
        try {
          const imgUploadResult = await imgUploadAPI(file);
          localStorage.setItem('uploadedImage', imgUploadResult.filename);
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Container $isProfileSetting={isProfileSetting}>
        {isRender && <Button vari="back" onClick={toBack} />}
        {isProfileSetting ? (
          <>
            <Wrap>
              <ProfileSettingCenterText>{text}</ProfileSettingCenterText>
              <CenterSubText>{subText}</CenterSubText>
              <ImageWrap>
                <img src={imageSrc} />
              </ImageWrap>
              {!imageSrc && (
                <ChangeImg htmlFor="chooseImg">
                  <img src={iconPicture} alt="이미지업로드" />
                </ChangeImg>
              )}
              <input type="file" id="chooseImg" name="chooseImg" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />
            </Wrap>
          </>
        ) : (
          <CenterText>{text}</CenterText>
        )}
      </Container>
    </>
  );
}
