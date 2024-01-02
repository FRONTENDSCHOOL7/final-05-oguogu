import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ScrollContainer } from 'components/common/container/Container.style';
import { PostBox } from './PostDetailPage.style';
import PostCard from 'components/post/PostCard';
import { postDetailAPI } from 'api/post.api';
import Header from 'components/common/header/Header';
import CommentList from 'components/comment/CommentList';
import CommentWrite from 'components/comment/CommentWrite';
import BottomModal from 'components/common/modal/BottomModal';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function PostDetailPage() {
  const [post, setPost] = useState(null);
  const { postid } = useParams();

  //게시글정보 불러오기
  const postDetail = useCallback(async () => {
    try {
      const data = await postDetailAPI(postid);
      setPost(data);
    } catch (err) {
      alert('게시글 불러오기에 실패했습니다.');
    }
  }, [postid]);

  useEffect(() => {
    postDetail();
  }, [postDetail]);

  return (
    <>
      <Header />
      <ScrollContainer $bg>
        {post !== null && (
          <>
            <PostBox>
              <PostCard
                id={post.id}
                text={JSON.parse(post.content).text}
                kate={JSON.parse(post.content).kate}
                postImg={post.image}
                profileImg={post.author.image}
                authname={post.author.username}
                authaccount={post.author.accountname}
                commentCount={post.commentCount}
                heartCount={post.heartCount}
                createdDate={post.createdAt.split('T')[0].split('-')}
                isUpdate={post.updatedAt !== post.createdAt}
                hearted={post.hearted}
                type="detail"
                update={postDetail}
              />
            </PostBox>
            <CommentList postid={postid} commentCount={post.commentCount} update={postDetail} />
          </>
        )}
      </ScrollContainer>
      <CommentWrite postid={postid} update={postDetail} />
      <BottomModal />
      <ConfirmModal />
    </>
  );
}
