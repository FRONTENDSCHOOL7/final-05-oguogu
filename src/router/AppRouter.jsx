import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from 'pages/404/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
import MainLoginPage from 'pages/LoginPage/MainLoginPage';
import ChatListPage from 'pages/ChatPage/ChatListPage';
import ChatRoomPage from 'pages/ChatPage/ChatRoomPage';
import EmailLoginPage from 'pages/LoginPage/EmailLoginPage';
import JoinPage from 'pages/JoinPage/JoinPage';
import PostUploadPage from 'pages/PostUpload/PostUploadPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { ProtectedRoutePage, PublicRoutePage } from 'router/AccessRouter';
import PostDetailPage from 'pages/PostDetailPage/PostDetailPage';
import FollowersPage from 'pages/FollowPage/FollowersPage';
import FollowingsPage from 'pages/FollowPage/FollowingsPage';
import AddProductPage from 'pages/AddProductPage/AddProductPage';
import ProductEditPage from 'pages/ProductEditPage/ProductEditPage';
import SearchPage from 'pages/SearchPage/SearchPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutePage />}>
          <Route path="/" element={<MainLoginPage />} />
          <Route path="/login" element={<EmailLoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Route>
        <Route element={<ProtectedRoutePage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/chatlist" element={<ChatListPage />} />
          <Route path="/chatroom" element={<ChatRoomPage />} />
          <Route path="/upload" element={<PostUploadPage />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:productid/edit" element={<ProductEditPage />} />
          <Route path="/profile">
            <Route path=":accountname">
              <Route index element={<ProfilePage />} />
              <Route path="followers" element={<FollowersPage />} />
              <Route path="followings" element={<FollowingsPage />} />
            </Route>
          </Route>
          <Route path="/post/:postid" element={<PostDetailPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
