import styled from 'styled-components';

export const CommonFont = `
  font-family: var(--main-font);
  font-style: normal;
  line-height: 14px;
  `;

const StyledLabel = styled.label`
  display: block;
  text-align: left;
  margin-top: 16px;
  padding-left: 0.2em;
  color: var(--gray-01);
  font-size: 12px;
  font-weight: 500;
  ${CommonFont}
`;

const StyledInput = styled.input`
  ${CommonFont}
  border: none;
  border-bottom: 1px solid var(--gray-02);
  display: block;
  height: 40px;
  width: 100%;
  color: var(--black);
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: var(--gray-02);
  }
  &:focus {
    border-bottom: 1px solid var(--main-color-01);
  }
`;

const StyledError = styled.p`
  color: var(--red-01);
  font-size: 12px;
  font-weight: 500;
  ${CommonFont}
  margin-top:6px;
  margin-bottom: 6px;
  text-align: left;
`;

export { StyledLabel, StyledInput, StyledError };
