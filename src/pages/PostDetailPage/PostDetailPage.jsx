import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import PostCard from 'components/post/PostCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PostBox } from './PostDetailPage.style';
import { postDetailAPI } from 'api/post.api';

export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const { postid } = useParams();

  useEffect(() => {
    const promise = postDetailAPI(postid);
    promise
      .then((res) => {})
      .catch((err) => {
        alert('게시글 불러오기에 실패했습니다.');
      });
  }, []);

  return (
    <>
      <Header />
      <ScrollContainer>
        <PostBox>{/* <PostCard /> */}</PostBox>
      </ScrollContainer>
      <NavBar />
    </>
  );
}
