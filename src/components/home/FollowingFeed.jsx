import React, { useEffect, useRef, useState } from 'react';
import { ButtonBox, ButtonItem, Container, SectionTitle } from './FollowingFeed.style';
import Button from 'components/common/button/Button';
import useHorizontalScroll from 'hook/useHorizontalScroll';
import PostList from 'components/post/PostList';
import { follwingPostAPI } from 'api/post.api';
import { Target } from 'components/common/container/Container.style';
import useObserve from 'hook/useObserve';

export default function FollowingFeed({ feed }) {
  const [curKategorie, setCurKategorie] = useState('#전체');
  const [posts, setPosts] = useState(feed);
  const { scrollRef, isDrag, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();
  const kategorie = ['#전체', '#내새꾸자랑', '#고민있어요', '#질문있어요', '#내새꾸간식', '#내새꾸선물'];
  const skip = useRef(5);
  const target = useRef(null);

  const addPostlist = () => {
    if (skip.current > 5) {
      follwingPostAPI(skip.current - 5)
        .then((res) => {
          if (res.posts.length !== 0) {
            setPosts((prevPosts) => {
              return [...prevPosts, ...res.posts];
            });
          } else {
            skip.current -= 5;
          }
        })
        .catch((err) => {
          alert('게시물 불러오기에 실패했습니다');
          skip.current -= 5;
        });
    }
  };

  const [observe, unobserve] = useObserve(() => {
    skip.current += 5;
    addPostlist();
  });

  useEffect(() => {
    observe(target.current);
  }, []);

  useEffect(() => {
    if (curKategorie !== '#전체') {
      const filterPostlist = posts.filter((post) => JSON.parse(post.content).kate === curKategorie);
      setPosts(filterPostlist);
    }
  }, [curKategorie]);

  //게시글 카테고리 선택
  const handleSelectBtn = (e) => {
    setCurKategorie(e.target.textContent);
  };

  const buttons = kategorie.map((btn, index) => {
    return (
      <ButtonItem key={index}>
        <Button size="md" vari="shadow" text={btn} selected={btn === curKategorie} onClick={handleSelectBtn} />
      </ButtonItem>
    );
  });

  //선택한 카테고리에 따라 게시글 필터링

  return (
    <Container>
      <SectionTitle>피드</SectionTitle>
      <ButtonBox onMouseDown={onDragStart} onMouseMove={isDrag ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
        {buttons}
      </ButtonBox>
      <PostList type="normal" posts={posts} />
      <Target ref={target} />
    </Container>
  );
}
