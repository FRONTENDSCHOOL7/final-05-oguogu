import React, { useEffect, useState } from 'react';
import { myInfoAPI } from 'api/profile.api';
import ProfileEditForm from 'components/profile-edit/ProfileEditForm';

export default function ProfileEditPage() {
  const [userInfo, setUserInfo] = useState({
    image: '',
    username: '',
    accountname: '',
    intro: '',
  });

  useEffect(() => {
    // accountname을 사용하여 프로필 정보 가져오기
    const prevUserInfo = async () => {
      try {
        const storedToken = localStorage.getItem('oguToken');
        if (!storedToken) {
          console.log('Token not found. Redirecting to login.');
          return;
        }
        const res = await myInfoAPI(storedToken);
        const { image, username, accountname, intro } = res;
        setUserInfo({ image, username, accountname, intro });
      } catch (error) {
        console.error(error);
      }
    };
    prevUserInfo();
  }, []);

  return <ProfileEditForm userInfo={userInfo} />;
}
