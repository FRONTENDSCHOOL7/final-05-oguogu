import styled from 'styled-components';
import iconPicture from 'assets/images/icon_picture.png';

export const AddProductPageContainer = styled.div`
  width: 100%;
  padding: 30px 34px;
  font-size: 12px;
  color: var(--gray-01);
`;

export const AddImage = styled.section`
  height: 236px;
  background-color: white;
`;

export const ImageBox = styled.div`
  background-color: var(--gray-03);
  width: 100%;
  height: 204px;
  margin-top: 18px;
  border: 1px solid var(--gray-02);
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AddImageBtn = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  position: absolute;
  right: 12px;
  bottom: 12px;

  background-color: var(--gray-04);
  background-image: url(${iconPicture});
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: center;
`;
export const AddProductInfo = styled.form`
  margin-top: 31px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.2em;
  font-weight: 500;
`;

export const ProductInfoInput = styled.input`
  height: 32px;
  width: 100%;
  border: none;
  color: var(--black);
  font-size: 14px;
  border-bottom: 1px solid ${(props) => (props.$isfocus ? 'var(--main-color-01)' : 'var(--gray-02)')};
  margin-bottom: 16px;

  &::placeholder {
    color: var(--gray-02);
    font-size: 14px;
  }
`;
