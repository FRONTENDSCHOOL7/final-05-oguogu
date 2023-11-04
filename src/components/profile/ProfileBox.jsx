import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IconButton, ProfileBoxBg, ProfileBtns, ProfileHeader, ProfileImage, ProfileMain } from './ProfileBox.style';
import Button from 'components/common/button/Button';
import iconShare from 'assets/images/icon_share.png';
import iconChat from 'assets/images/icon_message_small.png';
import { profileAPI } from 'api/profile.api';
import { followAPI, unfollowAPI } from 'api/follow.api';

export default function ProfileBox({ accountname, isMyProfile }) {
  const [profileInfo, setProfileInfo] = useState(null);
  const navigate = useNavigate();

  //프로필정보 불러오기
  const loadProfileInfo = () => {
    const promise = profileAPI(accountname);
    promise
      .then((res) => {
        setProfileInfo(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  //팔로워 리스트 페이지로 이동
  const toFollowerlist = () => {
    navigate(`/profile/${accountname}/followers`);
  };
  //팔로잉 리스트 페이지로 이동
  const toFollowinglist = () => {
    navigate(`/profile/${accountname}/followings`);
  };
  //팔로우
  const handleFollow = async () => {
    await followAPI(accountname)
      .then((res) => {})
      .catch((err) => {
        alert('팔로우를 실패했습니다');
      });
    loadProfileInfo();
  };
  //언팔로우
  const handleUnfllow = async () => {
    await unfollowAPI(accountname)
      .then((res) => {})
      .catch((err) => {
        alert('언팔로우를 실패했습니다');
      });
    loadProfileInfo();
  };

  useEffect(() => {
    loadProfileInfo();
  }, [accountname]);

  //상품 등록 페이지로 이동
  const navigateToAddProduct = () => {
    navigate('/addproduct');
  };

  //프로필수정 페이지로 이동
  const navigateToProfileEdit = () => {
    navigate(`/profile/${accountname}/edit`);
  };

  return profileInfo !== null ? (
    <ProfileBoxBg>
      <ProfileHeader>
        <span>
          <p onClick={toFollowerlist}>
            <span>{profileInfo.followerCount}</span>followers
          </p>
        </span>
        <ProfileImage $img={profileInfo.image} />
        <span>
          <p onClick={toFollowinglist}>
            <span>{profileInfo.followingCount}</span>followings
          </p>
        </span>
      </ProfileHeader>

      <ProfileMain>
        <li>{profileInfo.username}</li>
        <li>@{profileInfo.accountname}</li>
        <li>{profileInfo.intro}</li>
      </ProfileMain>
      {isMyProfile ? (
        <ProfileBtns $gap="16px">
          <Button size="md" vari="border" text="프로필 수정" onClick={navigateToProfileEdit} />
          <Button size="sm" vari="border" text="상품등록" onClick={navigateToAddProduct} />
        </ProfileBtns>
      ) : (
        <ProfileBtns $gap="12px">
          <IconButton $img={iconChat} />
          {profileInfo.isfollow ? (
            <Button size="md" vari="border" text="팔로잉" onClick={handleUnfllow} />
          ) : (
            <Button size="md" text="팔로우" onClick={handleFollow} />
          )}
          <IconButton $img={iconShare} />
        </ProfileBtns>
      )}
    </ProfileBoxBg>
  ) : (
    <ProfileBoxBg />
  );
}
