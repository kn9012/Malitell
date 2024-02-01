// types.ts
export interface ButtonStateType {
  emailLogin: boolean;
  signup: boolean;
  client: boolean;
  counselor: boolean;
  success: boolean;
};

const initialState: ButtonStateType = {
  emailLogin: false,
  signup: false,
  client: false,
  counselor: false,
  success: false,
};

export interface FormData {
  userId: string;
  password: string;
  passwordCheck: string;
  email: string;
  name: string;
  gender: string;
  nickname: string;
  birth: string;
  phone: string;
  role: string;
}


export interface signupFocusState {
    id: boolean;
    pw: boolean;
    pwCheck: boolean;
    email: boolean;
    name: boolean;
    gender: boolean;
    nickname: boolean;
    birthday: boolean;
    phone: boolean;
}