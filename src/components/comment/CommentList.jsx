import { commentListAPI } from 'api/comment';
import React, { useEffect, useState } from 'react';
import CommentWrite from 'components/comment/CommentWrite';
import CommentCard from 'components/comment/CommentCard';
import { Container } from 'components/comment/CommentList.style';

export default function CommentList({ postid, commentCount }) {
  const [comments, setComments] = useState(null);

  //댓글목록 불러오기
  const commentList = async () => {
    const commentlist = await commentListAPI(postid);
    setComments(commentlist);
  };

  useEffect(() => {
    commentList();
  }, [commentCount]);

  const commentlist = () => {
    return comments.map((item) => {
      return (
        <CommentCard
          key={item.id}
          id={item.id}
          content={item.content}
          date={item.createdAt}
          authimg={item.author.image}
          authaccountname={item.author.accountname}
          authname={item.author.username}
        />
      );
    });
  };

  return <>{comments !== null && <Container>{commentlist()}</Container>}</>;
}
