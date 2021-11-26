import { connect } from 'react-redux';
import Category from './category';
import { fetchAllCategory, fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: Object.values(state.entities.categories)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
