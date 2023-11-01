import { commentListAPI } from 'api/comment.api';
import React, { useCallback, useEffect, useState } from 'react';
import CommentCard from 'components/comment/CommentCard';
import { Container } from 'components/comment/CommentList.style';

export default function CommentList({ postid, commentCount, update }) {
  const [comments, setComments] = useState(null);

  //댓글목록 불러오기
  const commentList = useCallback(async () => {
    commentListAPI(postid)
      .then((res) => {
        setComments(res);
      })
      .catch(() => {
        alert('댓글 불러오기에 실패했습니다.');
      });
  }, [postid]);

  useEffect(() => {
    commentList();
  }, [commentCount, commentList]);

  const commentlist = () => {
    return comments.map((item) => {
      return (
        <CommentCard
          key={item.id}
          id={item.id}
          postid={postid}
          content={item.content}
          date={item.createdAt}
          authimg={item.author.image}
          authaccountname={item.author.accountname}
          authname={item.author.username}
          update={update}
        />
      );
    });
  };

  return <>{comments !== null && <Container>{commentlist()}</Container>}</>;
}
