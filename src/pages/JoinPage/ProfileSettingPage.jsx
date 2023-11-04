import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container2, Wrap, ProfileSettingCenterText, CenterSubText } from 'pages/JoinPage/ProfileSettingPage.style';
import Button from 'components/common/button/Button';
import ProfileForm from '../../components/join/ProfileForm';
import { joinAPI } from 'api/join.api';
import useUserForm from 'hook/useUserForm';

export default function ProfileSettingPage() {
  const { email, password, username, accountname, setUsername, setAccountname } = useUserForm();
  const [idDupeErrMsg, setIdDupeErrMsg] = useState('');
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [image, setImage] = useState('https://api.mandarin.weniv.co.kr/1698975821439.png');
  const [intro, setIntro] = useState('');

  // 상태변화 반영을 위한 ProfileForm에 콜백함수 전달
  const updateProfileInfo = (newUsername, newAccountname) => {
    setUsername(newUsername);
    setAccountname(newAccountname);
  };

  // 버튼 활성화
  useEffect(() => {
    setDisabled(!(username && accountname && !idDupeErrMsg));
  }, [username, accountname, idDupeErrMsg]);

  // 회원가입버튼 누른 후 서버와 통신
  const handleSubmit = (event) => {
    event.preventDefault();
    const promise = joinAPI({ username, email, password, accountname, intro, image });

    promise
      .then((res) => {
        if (res.user) {
          const userInfo = { id: res.user._id, accountname: res.user.accountname, username: res.user.username, userimg: res.user.image };
          localStorage.setItem('oguUserInfo', JSON.stringify(userInfo));
          navigate('/login');
        }
      })
      .catch((error) => {
        // 에러 핸들링
        if (error.response) {
          // 서버에서 응답을 받았지만 응답 상태 코드가 오류인 경우
          alert('Server Error: ' + error.response.status + ' ' + error.response.data);
          const errMessage = error.response.data.message;
          setIdDupeErrMsg(errMessage);
        } else {
          alert('에러 발생: ' + error);
        }
      });
  };

  return (
    <>
      <Container2>
        <Wrap>
          <ProfileSettingCenterText>프로필 설정</ProfileSettingCenterText>
          <CenterSubText>나중에 언제든지 변경할 수 있습니다</CenterSubText>
        </Wrap>
        <ProfileForm
          onSubmit={handleSubmit}
          idDupeErrMsg={idDupeErrMsg}
          setIdDupeErrMsg={setIdDupeErrMsg}
          intro={intro}
          setIntro={setIntro}
          image={image}
          setImage={setImage}
          updateProfileInfo={updateProfileInfo}
        />
        <Button size="lg" vari="basic" text="오구오구 시작하기" type="submit" onClick={handleSubmit} disabled={disabled} />
      </Container2>
    </>
  );
}
