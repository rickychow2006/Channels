import { connect } from 'react-redux';
import { withRouter } from "react-router";
import MessageDetail from './message_detail';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    channels: state.entities.channels,
    users: state.entities.users,
}};

export default  withRouter(connect(mapStateToProps)(MessageDetail));
