import { AuthSelectors, login } from '@state/auth/authSlice';
import { useAppDispatch, useAppSelector } from './useState';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const userIsAuthorized = useAppSelector(AuthSelectors.isAuthorized);

  const onLoginPress = () => {
    dispatch(login());
  };

  return { userIsAuthorized, onLoginPress } as const;
};
