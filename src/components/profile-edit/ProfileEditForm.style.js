import styled, { css } from 'styled-components';
import UploadButton from 'assets/images/icon_picture.png';

export const StyledInputWrap = styled.div`
  position: relative;
`;

export const StyledProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;

  ${(props) =>
    props.$isDefault &&
    css`
      width: 79.836px;
      height: 52.941px;
      border-radius: 0;
      object-fit: contain;
    `}
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
export const ImageFormContainer = styled.div`
  margin: 0px auto;
  text-align: center;
  padding-bottom: 20px;
`;

export const InputImage = styled.input`
  display: none;
`;

export const Container = styled.section`
  padding: 41px 34px 0;
  form {
    margin-bottom: 30px;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  border-bottom: none;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 36px;

  button {
    margin: 0 auto;
  }
`;

export const CommonFont = `
  font-family: var(--main-font);
  font-style: normal;
  line-height: 14px;
  `;

export const Label = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 16px;
  padding-left: 0.2em;
  color: var(--gray-01);
  font-size: 12px;
  font-weight: 500;
  ${CommonFont}
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  color: var(--black);
  font-size: 14px;
  font-weight: 400;
  ${CommonFont}
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px 'var(--white);' inset !important;
    -webkit-text-fill-color: 'var(--white);' !important;
  }

  &::placeholder {
    color: var(--gray-02);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) =>
    props.$emailFocus || props.$pwFocus || props.$accountnameFocus || props.$introFocus || props.$usernameFocus ? 'var(--main-color-01)' : 'var(--gray-02)'};
  position: relative;
  top: -5px;
`;

export const ErrMsg = styled.p`
  color: var(--red-01);
  font-size: 12px;
  font-weight: 500;
  ${CommonFont}
  margin-top:6px;
  margin-bottom: 6px;
`;

export const CenterText = styled.h1`
  color: var(--black);
  font-weight: var(--medium);
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const ImageWrap = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 110px;
  height: 110px;
  border: 1px solid var(--gray-02);
  border-radius: 55px;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ChangeBtn = styled.label`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background-color: var(--main-color-01);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(219px, -42px);
  img {
    object-fit: cover;
    width: 22px;
    cursor: pointer;
  }
`;
