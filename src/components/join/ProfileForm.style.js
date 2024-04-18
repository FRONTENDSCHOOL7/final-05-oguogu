import styled from 'styled-components';
import UploadButton from 'assets/images/icon_picture.png';

export const Container = styled.section`
  padding: 41px 34px 0;
  form {
    margin-bottom: 30px;
  }
`;

export const StyledProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImageFormContainer = styled.div`
  margin: 0px auto;
  text-align: center;
  padding-bottom: 20px;
`;

export const InputImage = styled.input`
  display: none;
`;

export const ProfileInputImgButton = styled.button`
  position: relative;
  width: 110px;
  height: 110px;
  border: ${(props) => (props.hasprofileimg ? 'none' : '1px solid var(--gray-02)')};
  border-radius: 55px;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 36px;
    height: 36px;
    bottom: 0;
    right: 0;
    background: url(${UploadButton}) no-repeat center/ cover;
    background-size: 22px;
    background-color: var(--main-color-01);
    border-radius: 50%;
  }
`;
