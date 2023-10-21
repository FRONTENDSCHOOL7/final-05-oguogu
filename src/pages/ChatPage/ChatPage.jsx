import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

function ChatPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ChatPage;
