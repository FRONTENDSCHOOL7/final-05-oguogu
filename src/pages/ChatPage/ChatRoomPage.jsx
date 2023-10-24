import React, { useState } from 'react';
import Header from 'components/common/header/Header';
import { Bg, Wrap, TextBox, Date, ReverseWrap, TextBox2, Rect, Container, Bottom, Button } from 'pages/ChatPage/ChatPage.style';
import iconChatCircle from 'assets/images/icon_chat_circle.svg';
import iconPicture from 'assets/images/icon_picture.png';
import { useLocation, useNavigate } from 'react-router-dom';

function ChatRoomPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [inputText, setInputText] = useState('');

  const location = useLocation();
  const message = location.state?.message;

  const image = <img src={iconChatCircle} alt="Chat Circle" />;

  const handleFileOpen = () => {
    setInputText(' ');
  };

  const handleImgUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        document.querySelector('.Rect').style.backgroundImage = `url(${imageUrl})`;
      };
      reader.readAsDataURL(file);
    }
    setInputText('');
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    setInputText('');
  };

  const contents = [
    {
      message:
        '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
      date: '12:39',
    },
    { message, date: '12:41' },
  ];

  const listItem = contents.map((item, index) => {
    return (
      <Wrap key={index}>
        {image}
        <TextBox>
          <p>{item.message}</p>
        </TextBox>
        <Date> {item.date} </Date>
      </Wrap>
    );
  });

  return (
    <>
      <Bg>
        <Header type="chatroom" text={location.state?.accountId} leftOnClick={goBack} />

        <Container>
          {listItem}
          <ReverseWrap>
            <TextBox2>
              <p>네 말씀하세요</p>
            </TextBox2>
            <Date>12:50</Date>
          </ReverseWrap>

          <ReverseWrap>
            <Rect className="Rect"></Rect>
            <Date>12:51</Date>
          </ReverseWrap>

          <Bottom>
            <div>
              <label htmlFor="chooseImg">
                <img src={iconPicture} alt="이미지업로드" onClick={handleFileOpen} />
              </label>
            </div>
            <input type="file" id="chooseImg" name="chooseImg" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />
            <input type="text" id="text" placeholder="메시지 입력하기..." value={inputText} onChange={handleInputChange} />
            <Button $inputText={inputText} onClick={handleSend}>
              전송
            </Button>
          </Bottom>
        </Container>
      </Bg>
    </>
  );
}

export default ChatRoomPage;
