import { instance } from 'api/axiosInstance';

//이메일 중복 검사
export const emailValidAPI = async (email) => {
  const reqData = {
    user: {
      email: email,
    },
  };

  try {
    const result = await instance.post('user/emailvalid', reqData);
    console.log(result.data);
    // 사용 가능한 이메일인 경우
    //"message": "사용 가능한 이메일 입니다."

    // 가입한 이메일이 있는 경우
    //"message": "이미 가입된 이메일 주소 입니다."
  } catch (error) {
    throw error;
  }
};

// 계정 중복 검사
export const accountValidAPI = async (accountname) => {
  const reqData = {
    user: {
      accountname: accountname,
    },
  };

  try {
    const result = await instance.post('user/accountnamevalid', reqData);
    console.log(result.data);
    // 사용 가능한 이메일인 경우
    //"message": "사용 가능한 계정 ID 입니다."

    // 가입한 이메일이 있는 경우
    //"message": "이미 가입된 계정 ID 입니다."
  } catch (error) {
    throw error;
  }
};

// 회원가입
export const joinAPI = async ({ username, email, password, accountname, intro, image }) => {
  const reqData = {
    user: {
      username: username,
      email: email,
      password: password,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };

  try {
    const result = await instance.post('user', reqData);
    console.log(result.data);
  } catch (error) {
    throw error;
  }
};
