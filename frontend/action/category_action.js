import * as CategoryApiUtil from '../util/category_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const fetchCategories = () => (dispatch) => {
  return CategoryApiUtil.fetchCategories().then((categories) => dispatch(receiveAllCategories(categories)));
};
