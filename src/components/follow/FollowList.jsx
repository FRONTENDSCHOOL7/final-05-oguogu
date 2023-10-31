import React from 'react';
import { styled } from 'styled-components';
import FollowCard from './FollowCard';

export default function FollowList() {
  return (
    <Container>
      <FollowCard />
      <FollowCard />
      <FollowCard />
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
