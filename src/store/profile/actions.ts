export const TOGGLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';
export const AUTH_PROFILE = 'PROFILE::IS_AUTH';

export const toggleVisible = {
  type: TOGGLE_PROFILE,
};
export const authProfile = (isAuth: boolean) => {
  return {
    type: AUTH_PROFILE,
    isAuth,
  };
};
