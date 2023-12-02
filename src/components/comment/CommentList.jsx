import { commentListAPI } from 'api/comment.api';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CommentCard from 'components/comment/CommentCard';
import { Container } from 'components/comment/CommentList.style';
import { Target } from 'components/common/container/Container.style';
import useObserve from 'hook/useObserve';

export default function CommentList({ postid, commentCount, update }) {
  const [comments, setComments] = useState(null);
  const skip = useRef(0);
  const target = useRef(null);

  //댓글목록 불러오기
  const addCommentList = () => {
    if (skip.current > 10) {
      commentListAPI(postid, skip.current - 10)
        .then((res) => {
          setComments((prev) => {
            if (prev !== null) {
              return [...prev, ...res];
            } else {
              return res;
            }
          });
        })
        .catch(() => {
          alert('댓글 불러오기에 실패했습니다.');
          skip.current -= 10;
        });
    }
  };

  const [observe, unobserve] = useObserve(() => {
    skip.current += 10;
    addCommentList();
  });

  useEffect(() => {
    commentListAPI(postid)
      .then((res) => {
        setComments(res);
      })
      .catch(() => {
        alert('댓글 불러오기에 실패했습니다.');
      });
  }, [commentCount]);

  useEffect(() => {
    if (skip.current === 0) observe(target.current);
  }, []);

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

  return (
    <Container>
      {comments !== null && commentlist()}
      <Target ref={target} />
    </Container>
  );
}
