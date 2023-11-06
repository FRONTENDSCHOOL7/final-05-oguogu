export const PROFILE_WARNING_MSG = {
  username: {
    format: '2~10자 이내여야 합니다',
    require: '사용자이름을 입력해주세요',
  },
  accountname: {
    format: '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다',
    require: '계정ID를 입력해주세요',
  },
};

export const PROFILE_REG = {
  username: /^.{2,10}$/,
  accountname: /^[a-zA-Z0-9_.]*$/,
};

export const USER_WARNING_MSG = {
  email: {
    format: '잘못된 이메일 형식입니다.',
    require: '이메일을 입력해주세요.',
  },
  password: {
    format: '비밀번호는 6자 이상이어야 합니다.',
    require: '비밀번호를 입력해주세요.',
  },
};

export const USER_REG = {
  email: /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
  password: /^.{6,}$/,
};
