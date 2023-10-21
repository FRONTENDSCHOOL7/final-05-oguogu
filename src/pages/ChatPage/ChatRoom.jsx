import React, { useState } from 'react';
import { List, Box, Content, Bg, Header } from 'pages/ChatPage/ChatPage.style';
import iconArrowLeft from 'assets/images/icon_arrow_left.png';
import iconMore from 'assets/images/icon_more_vertical_small.png';

function ChatRoom() {
  return (
    <Bg>
      <Header>
        <img src={iconArrowLeft} alt="되돌아가기" style={{ width: '22px' }} />
        <img src={iconMore} alt="편집하기" style={{ width: '24px' }} />
      </Header>
    </Bg>
  );
}

export default ChatRoom;
