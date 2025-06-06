// src/types/User.ts
export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegister extends UserCredentials {
  email: string;
}
