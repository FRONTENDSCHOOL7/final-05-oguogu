import React from 'react';
import { styled } from 'styled-components';
import { Container, UserImg, UserInfoBox, UserName, UserAccount } from 'components/follow/FollowCard.style';
import { useNavigate } from 'react-router';

export default function SearchCard({ username, accountname, image, searchKeyword }) {
  //해당 유저 프로필로 이동
  const navigate = useNavigate();
  const handletoProfile = () => {
    navigate(`/profile/${accountname}`);
  };

  const regex = new RegExp(`(${searchKeyword})`, 'gi');
  const highlightName = username.split(regex).map((part, index) => (regex.test(part) ? <Highlight key={'name' + index}>{part}</Highlight> : part));
  const highlightAccount = accountname.split(regex).map((part, index) => (regex.test(part) ? <Highlight key={'acc' + index}>{part}</Highlight> : part));

  return (
    <Container>
      <UserImg $img={image} onClick={handletoProfile} />
      <UserInfoBox>
        <UserName>{highlightName}</UserName>
        <UserAccount>@{highlightAccount}</UserAccount>
      </UserInfoBox>
    </Container>
  );
}

const Highlight = styled.span`
  color: var(--main-color-01);
  font-weight: 600;
`;
