import { connect } from 'react-redux';
import { logout } from '../../action/session_actions';
import Greeting from './greeting';
import { openModal } from '../../action/modal_action';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);