import { connect } from "react-redux";
import { signup, login, clearSessionErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mapStateToProps = state => ({
  user: {
      username: "",
      email: "",
      password: "",
  },
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);