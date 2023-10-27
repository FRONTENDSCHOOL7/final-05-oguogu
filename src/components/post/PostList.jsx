import React from 'react';
import { Container } from './PostList.style';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  return (
    <Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Container>
  );
}
