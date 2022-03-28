import { USERS_URL } from "./constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PromiseCallback = (value?: any) => void;

const loadUsers = () => (resolve: PromiseCallback) => {
  fetch(USERS_URL)
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUsersFn = (): any => new Promise(loadUsers());

export default getUsersFn;
