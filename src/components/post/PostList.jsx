import React from 'react';
import { Container, ImgIcon, PostImgCard, PostImgContainer } from 'components/post/PostList.style';
import PostCard from 'components/post/PostCard';

export default function PostList({ type, posts, update }) {
  const postlist = () => {
    if (type === 'gallery') {
      //이미지가 있는 게시글 필터링
      const postsImg = posts.filter((post) => post.image !== '');
      return postsImg.map((post) => {
        const images = post.image.split(',');
        const firstImageUrl = images.length > 0 ? images[0] : null;
        const postLink = `/post/${post.id}`;
        return (
          <li key={post.id}>
            <PostImgCard $img={firstImageUrl} to={postLink} >{images.length > 1 && <ImgIcon />}</PostImgCard>
          </li>
        );
      });
    } else if (type === 'normal') {
      return posts.map((post, index) => {
        const content = JSON.parse(post.content);
        const date = post.createdAt.split('T')[0].split('-');
        const isUpdate = post.updatedAt !== post.createdAt;
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
              isUpdate={isUpdate}
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
