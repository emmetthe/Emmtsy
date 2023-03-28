import { connect } from 'react-redux';
import { logout } from '../../action/session_actions';
import Greeting from './greeting';
import { openModal } from '../../action/modal_action';
import { fetchSearchedProducts } from '../../action/product_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchSearchedProducts: (search) => dispatch(fetchSearchedProducts(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);