import { UserState, RootState } from "../../types";

const getUserState = (state: RootState): UserState => state.UserState;

export default getUserState;
