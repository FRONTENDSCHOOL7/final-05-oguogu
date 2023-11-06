import React from 'react';
import { Container, PostImgCard, PostImgContainer } from 'components/post/PostList.style';
import PostCard from 'components/post/PostCard';

export default function PostList({ type, posts, update }) {
  const postlist = () => {
    if (type === 'gallery') {
      //이미지가 있는 게시글 필터링
      const postsImg = posts.filter((post) => post.image !== '');
      return postsImg.map((post) => {
        const postLink = `/post/${post.id}`;
        return (
          <li key={post.id}>
            <PostImgCard $img={post.image} to={postLink} />
          </li>
        );
      });
    } else if (type === 'normal') {
      return posts.map((post, index) => {
        const content = JSON.parse(post.content);
        const date = post.createdAt.split('T')[0].split('-');

        return (
          <li key={index}>
            <PostCard
              id={post.id}
              text={content.text}
              kate={content.kate}
              postImg={post.image}
              profileImg={post.author.image}
              authname={post.author.username}
              authaccount={post.author.accountname}
              commentCount={post.commentCount}
              heartCount={post.heartCount}
              createdDate={date}
              hearted={post.hearted}
              update={update}
            />
          </li>
        );
      });
    }
  };

  return type === 'normal' ? <Container $type={type}>{postlist()}</Container> : <PostImgContainer>{postlist()}</PostImgContainer>;
}
