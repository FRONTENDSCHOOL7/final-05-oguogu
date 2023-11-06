import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import FollowCard from './FollowCard';
import { EmptyBox, EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';

export default function FollowList({ userlist, updatelist }) {
  const makelist = () => {
    return userlist.map((user) => (
      <FollowCard
        key={user._id}
        username={user.username}
        accountname={user.accountname}
        intro={user.intro}
        image={user.image}
        isfollow={user.isfollow}
        updatelist={updatelist}
      />
    ));
  };

  return (
    <Container>
      {userlist.length ? (
        makelist()
      ) : (
        <EmptyBox>
          <EmptyImg />
          <EmptyText>팔로워가 없어요</EmptyText>
        </EmptyBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;
`;
