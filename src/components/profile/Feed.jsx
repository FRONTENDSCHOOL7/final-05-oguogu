import React, { useEffect, useState } from 'react';
import { Container, FeedHeader, SectionTitle, EmptyBox, PostNormalBtn, PostGalleryBtn } from 'components/profile/Feed.style';
import PostList from 'components/post/PostList';
import { postListAPI } from 'api/post.api';
import { EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';

export default function Feed({ accountname }) {
  const [posts, setPosts] = useState(null);
  const [postType, setPostType] = useState('normal');

  useEffect(() => {
    const promise = postListAPI(accountname);
    promise
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        alert('게시글 로딩 실패');
      });
  }, [accountname]);

  return (
    posts !== null && (
      <Container>
        <FeedHeader>
          <SectionTitle>게시물</SectionTitle>
          <div>
            <PostNormalBtn $clicked={postType === 'normal'} onClick={() => setPostType('normal')} />
            <PostGalleryBtn $clicked={postType === 'gallery'} onClick={() => setPostType('gallery')} />
          </div>
        </FeedHeader>
        {posts.length ? (
          <PostList type={postType} posts={posts} />
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
