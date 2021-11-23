import * as ProductApiUtil from '../util/product_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProductErrors = (errors) => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchProduct = (productId) => (dispatch) => {
  return ProductApiUtil.fetchProduct(productId).then(
    (product) => dispatch(receiveProduct(product))
    // ,
    // (err) => dispatch(receiveProductErrors(err.responseJSON))
  );
};

export const fetchAllProducts = () => (dispatch) => {
  return ProductApiUtil.fetchProducts().then(
    (products) => dispatch(receiveProducts(products))
    // ,
    // (err) => dispatch(receiveProductErrors(err.responseJSON))
  );
};
