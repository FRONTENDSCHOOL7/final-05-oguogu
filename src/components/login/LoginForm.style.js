import styled from 'styled-components';

export const StyledInputWrap = styled.div`
  position: relative;
`;

export const StyledButtonWrap = styled.div`
  margin-top: 30px;
`;

export const StyledCheckbox = styled.input`
  vertical-align: middle;
  margin: 30px 10px 0 0;
`;

export const CheckboxDiv = styled.div`
  display: inline-block;
  margin: 30px 10px 0 0;
  .taste {
    appearance: none;
    background-color: var(--gray-02);
    border-radius: 72px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 30px;

    &::before {
      bottom: -6px;
      content: '';
      left: -6px;
      position: absolute;
      right: -6px;
      top: -6px;
    }

    &,
    &::after {
      transition: all 100ms ease-out;
    }

    &::after {
      background-color: var(--white);
      border-radius: 50%;
      content: '';
      height: 14px;
      left: 3px;
      position: absolute;
      top: 3px;
      width: 14px;
    }

    &:hover {
      background-color: var(--gray-01);
      transition-duration: 0s;
    }

    &:checked {
      background-color: var(--main-color-01);

      &::after {
        background-color: var(--white);
        left: 13px;
      }
    }

    &:focus:not(.focus-visible) {
      outline: 0;
    }

    &:checked:hover {
      background-color: var(--main-color-01);
    }
  }
`;

export const StyledCheckboxLable = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-01);
  font-family: var(--main-font);
  font-style: normal;
  line-height: 14px;
  cursor: pointer;
`;
