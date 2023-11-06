import React from 'react';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import { ScrollContainer } from 'components/common/container/Container.style';
import ProductList from 'components/product/ProductList';
import Feed from 'components/profile/Feed';
import { useNavigate, useParams } from 'react-router';
import useModal from 'hook/useModal';
import useConfirm from 'hook/useConfirm';
import BottomModal from 'components/common/modal/BottomModal';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function ProfilePage() {
  const { accountname } = useParams();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const isMyProfile = accountname === userInfo.accountname;
  const { openModal, closeModal } = useModal();
  const { openConfirm } = useConfirm();

  //로그아웃
  const logout = () => {
    localStorage.removeItem('oguToken');
    localStorage.removeItem('oguUserInfo');
    navigate('/');
  };
  //로그아웃 confirm모달 열기
  const logoutConfirm = () => {
    openConfirm({
      content: '로그아웃하시겠어요?',
      type: 'logout',
      onClick: logout,
    });
  };
  //개인정보 및 설정 -> 프로필수정
  const toEditProfile = () => {
    navigate('/profile/edit');
  };
  //유저신고
  const reportUser = () => {
    alert('🚨 신고가 완료되었습니다. 신속하게 처리하겠습니다.');
    closeModal();
  };
  //유저신고 confirm모달 열기
  const reportUserConfirm = () => {
    openConfirm({
      content: '해당 유저를 신고할까요?',
      type: 'report',
      onClick: reportUser,
    });
  };

  const handleHeaderRight = () => {
    isMyProfile
      ? openModal({
          type: 'myProfile',
          callback: [toEditProfile, logoutConfirm],
        })
      : openModal({
          type: 'userProfile',
          callback: [reportUserConfirm],
        });
  };
  return (
    <>
      <Header type="edit" rightOnClick={handleHeaderRight} />
      <ScrollContainer>
        <ProfileBox accountname={accountname} isMyProfile={isMyProfile} />
        <ProductList type="profile" accountname={accountname} />
        <Feed accountname={accountname} />
      </ScrollContainer>
      <NavBar />
      <BottomModal />
      <ConfirmModal />
    </>
  );
}
