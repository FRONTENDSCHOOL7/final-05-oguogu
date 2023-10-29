import React from 'react';
import { Container } from './PostList.style';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  const postlist = posts.map((post, index) => {
    const content = JSON.parse(post.content);
    const date = post.createdAt.split('T')[0].split('-');

    return (
      <li key={index}>
        <PostCard
          id={post.id}
          text={content.text}
          kate={content.kate}
          postImg={post.image}
          profileImg={post.author.image}
          authname={post.author.username}
          authaccount={post.author.accountname}
          commentCount={post.commentCount}
          heartCount={post.heartCount}
          createdDate={date}
          hearted={post.hearted}
        />
      </li>
    );
  });
  return <Container>{postlist}</Container>;
}
