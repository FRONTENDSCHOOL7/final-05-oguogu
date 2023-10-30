import React, { useEffect } from 'react';
import { Container, NavIcon, NavLink, NavText } from './NavBar.style';
import { useLocation } from 'react-router';
import iconHome from 'assets/images/icon_home.png';
import iconHomeFill from 'assets/images/icon_home_fill.png';
import iconChat from 'assets/images/icon_message.png';
import iconChatFill from 'assets/images/icon_message_fill.png';
import iconEdit from 'assets/images/icon_edit.png';
import iconOgu from 'assets/images/icon_ogudog_gray01.png';
import iconOguFill from 'assets/images/icon_ogudog_pink.png';
import { useRecoilState } from 'recoil';
import { navMenu } from 'atoms/navMenu';

export default function NavBar() {
  const { pathname } = useLocation();
  const [selected, setSelected] = useRecoilState(navMenu);
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const myProfile = `/profile/${userInfo.accountname}`;

  useEffect(() => {
    switch (pathname) {
      case '/home':
        setSelected('/home');
        break;
      case '/chatlist':
        setSelected('/chatlist');
        break;
      case myProfile:
        setSelected(myProfile);
        break;
      default:
        break;
    }
  });

  return (
    <Container>
      <NavLink to="/home" onClick={(e) => setSelected('/home')}>
        <NavIcon src={selected === '/home' ? iconHomeFill : iconHome} />
        <NavText $textcolor={selected === '/home' ? 'var(--main-color-01)' : 'var(--gray-01)'}>홈</NavText>
      </NavLink>
      <NavLink to="/chatlist" onClick={(e) => setSelected('/chatlist')}>
        <NavIcon src={selected === '/chatlist' ? iconChatFill : iconChat} />
        <NavText $textcolor={selected === '/chatlist' ? 'var(--main-color-01)' : 'var(--gray-01)'}>채팅</NavText>
      </NavLink>
      <NavLink to="/upload">
        <NavIcon src={iconEdit} />
        <NavText $textcolor="var(--gray-01)">게시물 작성</NavText>
      </NavLink>
      <NavLink to={myProfile} onClick={(e) => setSelected(myProfile)}>
        <NavIcon src={selected === myProfile ? iconOguFill : iconOgu} />
        <NavText $textcolor={selected === myProfile ? 'var(--main-color-01)' : 'var(--gray-01)'}>프로필</NavText>
      </NavLink>
    </Container>
  );
}
