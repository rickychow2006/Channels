import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Message from './message';
import {fetchCMessages, receiveCMessage} from '../../../actions/cmessage_actions';
import { createChannelUser, fetchChannelUsers, deleteChannelUser} from '../../../actions/channeluser_actions';
import { fetchDMessages } from '../../../actions/dmessage_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.entities.users,
    currentChannel: state.entities.channels[ownProps.match.params.channelId],
    messages: state.entities.messages,
    currentDM: ownProps.match.params.dmId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChannelUser: (channelId, userId) => dispatch(createChannelUser(channelId, userId)),
    deleteChannelUser: (channelId, userId) => dispatch(deleteChannelUser(channelId, userId)),
    fetchCMessages: (channelId) => dispatch(fetchCMessages(channelId)),
    receiveCMessage: (message) => dispatch(receiveCMessage(message)),
    fetchChannelUsers: (channelId) => dispatch(fetchChannelUsers(channelId)),
    fetchDMessages: (currentUserId,otherPersonId) => dispatch(fetchDMessages(currentUserId,otherPersonId))
  }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Message));
