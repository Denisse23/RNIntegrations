import { AuthSelectors, login } from '@state/auth/authSlice';
import { useAppSelector, useAppDispatch } from './useState';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const userIsAuthorized = useAppSelector(AuthSelectors.isAuthorized);

  const onLoginPress = () => {
    dispatch(login());
  };

  return { userIsAuthorized, onLoginPress } as const;
};
