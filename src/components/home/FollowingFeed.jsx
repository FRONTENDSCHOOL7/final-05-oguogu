import React from 'react';
import { ButtonBox, ButtonItem, Container, SectionTitle } from './FollowingFeed.style';
import PostCard from 'components/post/PostCard';
import Button from 'components/common/button/Button';
import useHorizontalScroll from 'hook/useHorizontalScroll';

export default function FollowingFeed() {
  const { scrollRef, isDrag, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

  const kategorie = ['#전체', '#내새꾸자랑', '#고민있어요', '#질문있어요', '#내새꾸간식', '#내새꾸선물'];

  const buttons = kategorie.map((btn, index) => {
    return (
      <ButtonItem key={index}>
        <Button size="md" vari="shadow" text={btn} />
      </ButtonItem>
    );
  });
  return (
    <Container>
      <SectionTitle>피드</SectionTitle>
      <ButtonBox onMouseDown={onDragStart} onMouseMove={isDrag ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
        {buttons}
      </ButtonBox>
      <PostCard />
    </Container>
  );
}
