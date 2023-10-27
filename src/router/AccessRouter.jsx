import { Navigate, Outlet, useLocation } from 'react-router';

export const ProtectedRoutePage = () => {
  const Auth = localStorage.getItem('oguToken');
  const currentLocation = useLocation();

  console.log('hi');
  //비로그인상태라면 접근금지, 로그인페이지로 보내기
  return Auth ? <Outlet /> : <Navigate to="/login" replace state={{ redirectedFrom: currentLocation }} {...alert('로그인이 필요한 서비스입니다')} />;
};

export const PublicRoutePage = () => {
  const Auth = localStorage.getItem('oguToken');

  //로그인상태라면 접금금지, 홈으로 보내기
  return Auth ? <Navigate to="/home" /> : <Outlet />;
};
