import React from 'react'
import { NotFoundContainer, Img, BackLink } from './NotFoundPage.style';
import iconOgucatNotfound from 'assets/images/icon_ogucat_notfound.png'
import { Text } from '../../components/home/NoneFeed.style';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Img src={iconOgucatNotfound} alt="404 오류. 찾을 수 없는 페이지" />
      <Text>페이지를 찾을 수 없습니다. :(</Text>
      <BackLink onClick={() => {navigate(-1)}}>이전 페이지</BackLink>
    </NotFoundContainer>
  );
}

