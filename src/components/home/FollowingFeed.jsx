import React, { useEffect, useState } from 'react';
import { ButtonBox, ButtonItem, Container, LoaderBox, SectionTitle } from './FollowingFeed.style';
import Button from 'components/common/button/Button';
import useHorizontalScroll from 'hook/useHorizontalScroll';
import PostList from 'components/post/PostList';
import { follwingPostAPI, postListAPI } from 'api/post.api';
import Loader from 'components/common/loader/Loader';

export default function FollowingFeed() {
  const [curKategorie, setCurKategorie] = useState('#전체');
  const [feed, setFeed] = useState(null);
  const [posts, setPosts] = useState(null);
  const { scrollRef, isDrag, isStart, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();
  const kategorie = ['#전체', '#내새꾸자랑', '#고민있어요', '#질문있어요', '#내새꾸간식', '#내새꾸선물'];
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));

  const followingPost = () => {
    follwingPostAPI()
      .then((res1) => {
        postListAPI(userInfo.accountname).then((res2) => {
          const allPosts = [...res1.posts, ...res2].toSorted((post1, post2) => {
            const date1 = new Date(post1.updatedAt);
            const date2 = new Date(post2.updatedAt);

            // Date 객체를 비교하여 정렬 순서를 결정
            if (date1 > date2) {
              return -1;
            } else if (date1 < date2) {
              return 1;
            } else {
              return 0;
            }
          });
          setFeed(allPosts);
        });
      })
      .catch((err) => {
        alert('error: ' + err);
      });
  };

  useEffect(() => {
    followingPost();
  }, []);

  useEffect(() => {
    if (curKategorie !== '#전체') {
      const filterPostlist = feed.filter((post) => JSON.parse(post.content).kate === curKategorie);
      setPosts(filterPostlist);
    } else {
      setPosts(feed);
    }
  }, [curKategorie, feed]);

  //게시글 카테고리 선택
  const handleSelectBtn = (e) => {
    if (!isDrag) setCurKategorie(e.target.textContent);
  };

  const buttons = kategorie.map((btn, index) => {
    return (
      <ButtonItem key={index}>
        <Button size="md" vari="shadow" text={btn} selected={btn === curKategorie} onClick={handleSelectBtn} />
      </ButtonItem>
    );
  });

  return (
    <Container>
      <SectionTitle>팔로잉 피드</SectionTitle>
      <ButtonBox onMouseDown={onDragStart} onMouseMove={isStart ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
        {buttons}
      </ButtonBox>
      {posts !== null ? (
        <PostList type="normal" posts={posts} update={followingPost} />
      ) : (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}

      {/* <Target ref={target} /> */}
    </Container>
  );
}
