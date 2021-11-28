import { connect } from "react-redux";
import { fetchCategories } from "../../action/category_action";
import Category from './category'

const mSTP = (state) => ({
  categories: Object.values(state.entities.categories)
})

const mDTP = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mSTP, mDTP)(Category)