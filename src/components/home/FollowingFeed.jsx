import React from 'react';
import { Container, SectionTitle } from './FollowingFeed.style';
import PostCard from 'components/post/PostCard';

export default function FollowingFeed() {
  return (
    <Container>
      <SectionTitle>피드</SectionTitle>
      <PostCard />
    </Container>
  );
}
