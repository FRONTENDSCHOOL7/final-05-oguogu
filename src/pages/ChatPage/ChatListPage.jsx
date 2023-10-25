import React, { useState } from 'react';
import Header from 'components/common/header/Header';
import { List, Box, Content, Bg } from 'pages/ChatPage/ChatPage.style';
import iconChatEllipse from 'assets/images/icon_chat_ellipse.png';
import iconChatPink from 'assets/images/icon_chat_pink.png';
import { useNavigate } from 'react-router-dom';

function ChatListPage() {
  const date = '2020.10.25';
  const contents = [
    { id: '1', accountId: '쿠리미히어로즈', message: '오늘 산책 언제 나갈거에요?', img: <img src={iconChatPink} alt="이미지" /> },
    { id: '2', accountId: '야옹아 멍멍해봐', message: '강남역 오픈 이벤트! 전 품목 최대 50% 할인 & 1+1', img: <img src={iconChatPink} alt="이미지" /> },
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
    const selectedItem = contents.find((item) => item.id === event.currentTarget.id);
    if (selectedItem) {
      navigate('/chatroom', { state: { message: selectedItem.message, accountId: selectedItem.accountId } });
    }
  };

  const listItem = contents.map((item) => {
    return (
      <List
        key={item.id}
        id={item.id}
        onMouseDown={handleListClick}
        onMouseUp={handleLink}
        onTouchStart={handleListClick}
        onTouchEnd={handleListClick}
        $selectedItem={selectedItem}
      >
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
      <Header />
      <ul>{listItem}</ul>
    </Bg>
  );
}

export default ChatListPage;
