import { connect } from "react-redux";
import { getUsers } from "../../core/users/usersActions";

const usersSelector = state => state.core.users;

const mapStateToProps = state => ({
  users: usersSelector(state)
});

export default connect(mapStateToProps, { getUsers });
