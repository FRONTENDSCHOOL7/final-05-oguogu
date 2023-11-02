import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, FeedHeader, SectionTitle, EmptyBox, PostNormalBtn, PostGalleryBtn } from 'components/profile/Feed.style';
import PostList from 'components/post/PostList';
import { postListAPI } from 'api/post.api';
import { EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';
import { Target } from 'components/common/container/Container.style';
import useObserve from 'hook/useObserve';

export default function Feed({ accountname }) {
  const [posts, setPosts] = useState(null);
  const [postType, setPostType] = useState('normal');
  const skip = useRef(0);
  const target = useRef(null);

  const updatepostlist = () => {
    postListAPI(accountname, 0)
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        alert('게시물 불러오기에 실패했습니다');
      });
  };

  const addpostlist = useCallback(() => {
    postListAPI(accountname, skip.current - 3)
      .then((res) => {
        setPosts((prevPosts) => {
          if (prevPosts !== null) {
            return [...prevPosts, ...res];
          } else {
            return res;
          }
        });
      })
      .catch((err) => {
        alert('게시물 불러오기에 실패했습니다');
        skip.current -= 3;
      });
  }, [accountname]);

  const [observe, unobserve] = useObserve(() => {
    skip.current += 3;
    addpostlist();
  });

  useEffect(() => {
    if (skip.current === 0) observe(target.current);
  }, []);

  return (
    <Container>
      <FeedHeader>
        <SectionTitle>게시물</SectionTitle>
        <div>
          <PostNormalBtn $clicked={postType === 'normal'} onClick={() => setPostType('normal')} />
          <PostGalleryBtn $clicked={postType === 'gallery'} onClick={() => setPostType('gallery')} />
        </div>
      </FeedHeader>
      {posts !== null &&
        (posts.length ? (
          <>
            <PostList type={postType} posts={posts} update={updatepostlist} />
          </>
        ) : (
          <EmptyBox>
            <EmptyImg />
            <EmptyText>게시물이 없어요</EmptyText>
          </EmptyBox>
        ))}
      <Target ref={target} />
    </Container>
  );
}
