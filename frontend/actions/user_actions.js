import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchAllUsers()
  .then((users) =>dispatch(receiveUsers(users)))
);