import React from 'react'
import { Container, Img, Text, SearchLink } from './NotFoundPage.style';
import iconOgucatNotfound from 'assets/images/icon_ogucat_notfound.png'

export default function NotFoundPage() {
  return (
    <Container>
      <Img src={iconOgucatNotfound} alt="404 오류. 찾을 수 없는 페이지" />
      <Text>페이지를 찾을 수 없습니다. :(</Text>
      <SearchLink href = "history.back();">이전 페이지</SearchLink>
    </Container>
  );
}

