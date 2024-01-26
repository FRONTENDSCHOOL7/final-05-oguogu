import React, { useEffect, useState } from 'react';
import { Container, FeedHeader, SectionTitle, EmptyBox, PostNormalBtn, PostGalleryBtn, LoaderBox } from 'components/profile/Feed.style';
import PostList from 'components/post/PostList';
import { postListAPI } from 'api/post.api';
import { EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';
import Loader from 'components/common/loader/Loader';

export default function Feed({ accountname }) {
  const [posts, setPosts] = useState(null);
  const [postType, setPostType] = useState('normal');

  const updatepostlist = () => {
    postListAPI(accountname)
      .then((res) => {
        setPosts(res);
        console.log('업데이트포스트리스트');
      })
      .catch((err) => {
        alert('게시물 불러오기에 실패했습니다');
      });
  };

  useEffect(() => {
    updatepostlist();
  }, [accountname]);

  return (
    <Container>
      <FeedHeader>
        <SectionTitle>게시물</SectionTitle>
        <div>
          <PostNormalBtn $clicked={postType === 'normal'} onClick={() => setPostType('normal')} />
          <PostGalleryBtn $clicked={postType === 'gallery'} onClick={() => setPostType('gallery')} />
        </div>
      </FeedHeader>
      {posts !== null ? (
        posts.length ? (
          <PostList type={postType} posts={posts} update={updatepostlist} />
        ) : (
          <EmptyBox>
            <EmptyImg />
            <EmptyText>게시물이 없어요</EmptyText>
          </EmptyBox>
        )
      ) : (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
    </Container>
  );
}
