import { userActions, userReducer } from './model/slice/userSlice';
import type { User, UserSchema } from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { userActions, userReducer };
export type { User, UserSchema };
