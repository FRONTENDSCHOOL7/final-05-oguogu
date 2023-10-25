import React from 'react';
import { Container } from './PostList.style';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  console.log(posts);
  return (
    <Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Container>
  );
}
