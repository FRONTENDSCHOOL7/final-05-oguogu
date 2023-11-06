import React from 'react';
import { Container, Img, Text, SearchLink } from './NoneFeed.style';
import iconOguCat from 'assets/images/icon_ogucat_gray.png';

export default function NoneFeed() {
  return (
    <Container>
      <Img src={iconOguCat} alt="논팔로잉 피드 안내 이미지" />
      <Text>유저를 검색해 팔로우 해보세요!</Text>
      <SearchLink to="/search">검색하기</SearchLink>
    </Container>
  );
}
