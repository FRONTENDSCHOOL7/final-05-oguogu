import styled from 'styled-components';

export const Container = styled.section`
  padding: 41px 34px 0;
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

  &::placeholder {
    color: var(--gray-02);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => (props.$emailFocus || props.$pwFocus ? 'var(--main-color-01)' : 'var(--gray-02)')};
  position: relative;
  top: -5px;
  margin-bottom: 15px;
`;

export const EmailInput = styled(Input)``;
export const PwInput = styled(Input)``;

export const Join = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 21px;
  color: var(--gray-01);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  ${CommonFont}
`;

export const ErrMsg = styled.p`
  color: var(--red-01);
  font-size: 12px;
  font-weight: 500;
  ${CommonFont}
  margin-top:6px;
`;
