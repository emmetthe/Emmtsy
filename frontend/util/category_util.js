export const fetchCategories = () => {
  return $.ajax({
    url: 'api/categories',
    method: 'GET'
  });
};

export const fetchProducts = (categoryId) => {
  return $.ajax({
    url: `api/categories/${categoryId}`,
    method: 'GET'
  });
};
