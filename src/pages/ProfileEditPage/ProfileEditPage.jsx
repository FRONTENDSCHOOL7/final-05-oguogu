import React, { useEffect, useRef, useState } from 'react';
import Header from 'components/common/header/Header';
import ProfileForm from 'components/join/ProfileForm';
import { Container } from 'pages/JoinPage/ProfileSettingPage.style';

export default function ProfileEditPage() {
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleProfileEdit = () => {};

  return (
    <>
      <Header type="btn" btnText="저장" btndisabled={submitDisabled} rightOnClick={handleProfileEdit} />
      <Container>
        <ProfileForm />
      </Container>
    </>
  );
}
