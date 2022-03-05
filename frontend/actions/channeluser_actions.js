import * as ChannelUserApiUtil from '../util/channeluser_api_util';
export const REMOVE_CHANNEL_USER = 'REMOVE_CHANNEL_USER';
export const RECEIVE_CHANNEL_USERS = 'RECEIVE_CHANNEL_USERS';

const receiveChannelUsers = (channelusers) => ({
  type: RECEIVE_CHANNEL_USERS,
  channelusers
});

export const fetchChannelUsers = (channelId, userId) => dispatch => {
  return ChannelUserApiUtil.fetchChannelUsers(channelId, userId)
  .then(cId =>dispatch(receiveChannelUsers(cId)))
}

export const createChannelUser = (channelId, userId, pending=false) => dispatch => {
  return ChannelUserApiUtil.createChannelUser(channelId, userId, pending)
  .then(userId =>dispatch(receiveChannelUsers(userId)))
}

export const patchChannelUser = (channelId, userId, pending) => dispatch => {
  return ChannelUserApiUtil.patchChannelUser(channelId, userId, pending)
  .then(userId =>dispatch(receiveChannelUsers(userId)))
}

export const deleteChannelUser = (channelId,userId) => dispatch => {
  return ChannelUserApiUtil.deleteChannelUser(channelId, userId)
  .then(userId =>dispatch(receiveChannelUsers(userId)))
}
