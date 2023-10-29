import React, { useEffect, useState } from 'react';
import { IconButton, ProfileBoxBg, ProfileBtns, ProfileHeader, ProfileImage, ProfileMain } from './ProfileBox.style';
import { profileAPI } from 'api/profile.api';
import Button from 'components/common/button/Button';
import iconShare from 'assets/images/icon_share.png';
import iconChat from 'assets/images/icon_message_small.png';

export default function ProfileBox({ accountname, isMyProfile }) {
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
    const promise = profileAPI(accountname);
    promise
      .then((res) => {
        console.log(res);
        setProfileInfo(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return profileInfo !== null ? (
    <ProfileBoxBg>
      <ProfileHeader>
        <span>
          <p>
            <span>{profileInfo.followerCount}</span>followers
          </p>
        </span>
        <ProfileImage $img={profileInfo.image} />
        <span>
          <p>
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
          <Button size="md" vari="border" text="프로필 수정" />
          <Button size="sm" vari="border" text="상품등록" />
        </ProfileBtns>
      ) : (
        <ProfileBtns $gap="12px">
          <IconButton $img={iconChat} />
          {profileInfo.isfollow ? <Button size="md" vari="border" text="언팔로잉" /> : <Button size="md" text="팔로우" />}
          <IconButton $img={iconShare} />
        </ProfileBtns>
      )}
    </ProfileBoxBg>
  ) : (
    <ProfileBoxBg />
  );
}
