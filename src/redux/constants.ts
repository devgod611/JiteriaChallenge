export const USERS_URL = "https://jsonplaceholder.typicode.com/users";
export const GET_AVATAR_URL = (user_name: string) => {
  return `https://avatars.dicebear.com/v2/avataaars/${user_name}.svg?options[mood][]=happy`;
};

// user
export const GET_ALL_USERS_REQUEST = "USER/GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "USER/GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAILURE = "USER/GET_ALL_USERS_FAILURE";
