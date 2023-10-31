import React, { useState, useRef, useEffect } from 'react';
import Header from 'components/common/header/Header';
import { Bg, Wrap, TextBox, Time, ReverseWrap, TextBox2, Container, Bottom, Button } from 'pages/ChatPage/ChatPage.style';
import iconChatCircle from 'assets/images/icon_chat_circle.svg';
import iconPicture from 'assets/images/icon_picture.png';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from 'hook/useModal';
import BottomModal from 'components/common/modal/BottomModal';

function ChatRoomPage() {
  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  //상태함수관리
  const [inputText, setInputText] = useState('');
  const [chatItems, setChatItems] = useState([]);

  const ref = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // 스크롤을 컨테이너 하단으로 이동
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
    console.log('스크롤바', containerRef.current);
  }, [chatItems]);

  // Chatlist페이지의 메시지 불러오기
  const location = useLocation();
  const message = location.state?.message;

  // 시간추출함수
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // 채팅아이템(이미지,메시지) 시간순 업로드
  const handleImgUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = { type: 'image', content: e.target.result, date: getCurrentTime() };
        setChatItems([...chatItems, newImage]);
      };
      reader.readAsDataURL(file);
      setInputText('');
    }
  };

  const handleSend = () => {
    const text = ref.current.value;
    const newMessage = { type: 'text', content: text, date: getCurrentTime() };
    setChatItems([...chatItems, newMessage]);
    setInputText('');
  };

  chatItems.sort((a, b) => new Date(a.date) - new Date(b.date));

  const chatItemList = chatItems.map((item, index) => {
    if (item.type === 'image') {
      return (
        <ReverseWrap key={index}>
          <img src={item.content} alt={'업로드이미지'} />
          <Time>{item.date}</Time>
        </ReverseWrap>
      );
    } else if (item.type === 'text') {
      return (
        <ReverseWrap key={index}>
          <TextBox2>
            <p>{item.content}</p>
          </TextBox2>
          <Time>{item.date}</Time>
        </ReverseWrap>
      );
    }
  });

  // 파일첨부하기 클릭 시 전송버튼 활성화
  const handleFileOpen = () => {
    setInputText(' ');
  };

  // 메시지입력 시 전송버튼 활성화
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Enter키로 메시지를 전송
  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend(); //
    }
  };

  // 기존채팅메시지 마크업
  const image = <img src={iconChatCircle} alt="Chat Circle" />;
  const contents = [
    {
      message:
        '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
      time: '12:39',
    },
    { message, time: '12:41' },
  ];

  const listItem = contents.map((item, index) => {
    return (
      <Wrap key={index}>
        {image}
        <TextBox>
          <p>{item.message}</p>
        </TextBox>
        <Time> {item.time} </Time>
      </Wrap>
    );
  });

  //바텀모달 클릭 이벤트
  const { openModal, closeModal } = useModal();
  const handleHeaderRight = () => {
    openModal({
      type: 'chatroom',
      callback: [exitChatRoom, reportUser],
    });
  };
  const exitChatRoom = () => {
    navigate('/chatlist');
    closeModal();
  };
  const reportUser = () => {
    alert('🚨 신고가 완료되었습니다. 신속하게 처리하겠습니다.');
    closeModal();
  };

  return (
    <>
      <Bg>
        <Header type="chatroom" text={location.state?.accountId} leftOnClick={goBack} rightOnClick={handleHeaderRight} />

        <Container ref={containerRef}>
          {listItem}
          <ReverseWrap>
            <TextBox2>
              <p>네 말씀하세요</p>
            </TextBox2>
            <Time>12:50</Time>
          </ReverseWrap>
          {chatItemList}
          <Bottom>
            <div>
              <label htmlFor="chooseImg">
                <img src={iconPicture} alt="이미지업로드" onClick={handleFileOpen} />
              </label>
            </div>
            <input type="file" id="chooseImg" name="chooseImg" accept="image/*" onChange={handleImgUpload} />
            <input
              ref={ref}
              type="text"
              id="text"
              placeholder="메시지 입력하기..."
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <Button $inputText={inputText} onClick={handleSend}>
              전송
            </Button>
          </Bottom>
        </Container>
      </Bg>
      <BottomModal />
    </>
  );
}

export default ChatRoomPage;
