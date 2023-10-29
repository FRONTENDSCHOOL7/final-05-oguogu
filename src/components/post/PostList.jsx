import React from 'react';
import { Container } from './PostList.style';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  const postlist = posts.map((post, index) => {
    // const kate = post.content
    // const content =
    return (
      <li key={index}>
        <PostCard id={post.id} />
      </li>
    );
  });
  return <Container>{postlist}</Container>;
}
