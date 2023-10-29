import React from 'react';
import { Container, Wrap, ProfileSettingCenterText, CenterSubText } from 'pages/JoinPage/ProfileSettingPage.style';
import ProfileForm from './ProfileForm';

export default function ProfileSettingPage() {
  return (
    <>
      <Container>
        <Wrap>
          <ProfileSettingCenterText>프로필 설정</ProfileSettingCenterText>
          <CenterSubText>나중에 언제든지 변경할 수 있습니다</CenterSubText>
        </Wrap>
        <ProfileForm />
      </Container>
    </>
  );
}
