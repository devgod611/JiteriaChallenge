export type UserListType = {
  users: UserType[];
};

export type UserType = {
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
};

export type UserState = {
  users: UserType[];
};

export type RootState = {
  UserState: UserState;
};
