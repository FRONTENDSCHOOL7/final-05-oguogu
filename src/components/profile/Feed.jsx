import React, { useEffect, useState } from 'react';
import { Container, FeedHeader, SectionTitle, EmptyBox } from 'components/profile/Feed.style';
import PostList from 'components/post/PostList';
import { postListAPI } from 'api/post.api';
import { EmptyImg, EmptyText } from 'components/product/ProductList.style';

export default function Feed({ accountname }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const promise = postListAPI(accountname);
    promise.then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    posts !== null && (
      <Container>
        <FeedHeader>
          <SectionTitle>게시물</SectionTitle>
        </FeedHeader>
        {posts.length ? (
          <PostList posts={posts} />
        ) : (
          <EmptyBox>
            <EmptyImg />
            <EmptyText>게시물이 없어요</EmptyText>
          </EmptyBox>
        )}
      </Container>
    )
  );
}
