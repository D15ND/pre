import type { CounterSchema } from '@/entities/Counter';
import type { ProfileSchema } from '@/entities/Profile';
import type { UserSchema } from '@/entities/User';
import type { LoginSchema } from '@/features/AuthByUsername';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // асинхронные редьюсеры, должны быть с ?: но т.к нет code splitting для редакса, ругается
  loginForm: LoginSchema;
  profile: ProfileSchema;
};
