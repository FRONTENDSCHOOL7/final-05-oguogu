import React, { useState } from 'react';
import { List, Box, Content, Bg, Header } from 'pages/ChatPage/ChatPage.style';
import iconArrowLeft from 'assets/images/icon_arrow_left.png';
import iconMore from 'assets/images/icon_more_vertical_small.png';
import iconChatEllipse from 'assets/images/icon_chat_ellipse.png';
import iconChatPink from 'assets/images/icon_chat_pink.png';
import { useNavigate } from 'react-router-dom';

function ChatList() {
  const date = '2020.10.25';
  const contents = [
    { id: '1', accountId: '쿠리미히어로즈', message: '오늘 산책 언제 나갈거에요?', img: <img src={iconChatPink} alt="이미지" /> },
    { id: '2', accountId: '야옹아 멍멍해봐', message: '강남역 오픈 이벤트! 전 품목 최대 50% 할인 & 1+1?', img: <img src={iconChatPink} alt="이미지" /> },
    {
      id: '3',
      accountId: '나 댕댕이 좋아하네',
      message: '내 새꾸는 내가 관리한다. 이벤트에 참여 하시면...',
      img: <img src={iconChatEllipse} style={{ width: '42px' }} alt="이미지" />,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleListClick = (event) => {
    setSelectedItem(event.currentTarget.id);
  };

  const handleLink = (event) => {
    navigate('/chatroom');
  };

  const listItem = contents.map((item) => {
    return (
      <List key={item.id} id={item.id} onMouseDown={handleListClick} onMouseUp={handleLink} className={selectedItem === item.id ? 'selected' : ''}>
        {item.img}
        <Box>
          <strong>{item.accountId}</strong>
          <Content>
            <p>{item.message}</p>
            <span> {date} </span>
          </Content>
        </Box>
      </List>
    );
  });

  return (
    <Bg>
      <Header>
        <img src={iconArrowLeft} alt="되돌아가기" style={{ width: '22px' }} />
        <img src={iconMore} alt="편집하기" style={{ width: '24px' }} />
      </Header>
      <ul>{listItem}</ul>
    </Bg>
  );
}

export default ChatList;
