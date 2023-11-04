import React, { useEffect, useRef, useState } from 'react';
import { ButtonBox, ButtonItem, Container, LoaderBox, SectionTitle } from './FollowingFeed.style';
import Button from 'components/common/button/Button';
import useHorizontalScroll from 'hook/useHorizontalScroll';
import PostList from 'components/post/PostList';
import { follwingPostAPI } from 'api/post.api';
import { Target } from 'components/common/container/Container.style';
import useObserve from 'hook/useObserve';
import Loader from 'components/common/loader/Loader';

export default function FollowingFeed() {
  const [curKategorie, setCurKategorie] = useState('#전체');
  const [feed, setFeed] = useState(null);
  const [posts, setPosts] = useState(null);
  const { scrollRef, isDrag, isStart, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();
  const kategorie = ['#전체', '#내새꾸자랑', '#고민있어요', '#질문있어요', '#내새꾸간식', '#내새꾸선물'];
  const skip = useRef(0);
  const target = useRef(null);

  const followPost = () => {
    follwingPostAPI(0)
      .then((res) => {
        setFeed(res.posts);
      })
      .catch((err) => {
        alert('error: ' + err);
      });
  };

  const addPostlist = () => {
    if (skip.current > 5) {
      follwingPostAPI(skip.current - 5)
        .then((res) => {
          if (res.posts.length !== 0) {
            setFeed((prevPosts) => {
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
    followPost();
  }, []);

  useEffect(() => {
    console.log(feed);
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
      <SectionTitle>피드</SectionTitle>
      <ButtonBox onMouseDown={onDragStart} onMouseMove={isStart ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
        {buttons}
      </ButtonBox>
      {posts !== null ? (
        <PostList type="normal" posts={posts} update={followPost} />
      ) : (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}

      <Target ref={target} />
    </Container>
  );
}
