import React, { useState } from 'react';
import { ButtonBox, ButtonItem, Container, SectionTitle } from './FollowingFeed.style';
import Button from 'components/common/button/Button';
import useHorizontalScroll from 'hook/useHorizontalScroll';
import PostList from 'components/post/PostList';

export default function FollowingFeed({ posts }) {
  const [curKategorie, setCurKategorie] = useState('#전체');
  const { scrollRef, isDrag, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

  const kategorie = ['#전체', '#내새꾸자랑', '#고민있어요', '#질문있어요', '#내새꾸간식', '#내새꾸선물'];

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
  return (
    <Container>
      <SectionTitle>피드</SectionTitle>
      <ButtonBox onMouseDown={onDragStart} onMouseMove={isDrag ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
        {buttons}
      </ButtonBox>
      <PostList posts={posts} />
    </Container>
  );
}
