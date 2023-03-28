import * as CategoryApiUtil from '../util/category_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

const receiveCategoryProduct = (products) => {
  return {
    type: RECEIVE_CATEGORY,
    products
  };
};

export const fetchCategories = () => (dispatch) => {
  return CategoryApiUtil.fetchCategories().then((categories) => dispatch(receiveAllCategories(categories)));
};

export const fetchCategoryProducts = (categoryId) => (dispatch) => {
  return CategoryApiUtil.fetchProducts(categoryId).then((products) => dispatch(receiveCategoryProduct(products)));
};
