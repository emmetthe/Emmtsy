export const fetchCart = () =>
  $.ajax({
    method: 'GET',
    url: '/api/cart_items'
  });

export const createCartItem = (cartItem) =>
  $.ajax({
    method: 'POST',
    url: '/api/cart_items',
    data: { cartItem }
  });

export const deleteCartItem = (cartItem) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${cartItem.id}`
  });

export const updateCartItem = (cartItem) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/cart_items/${cartItem.product_id}`,
    data: { cartItem }
  });
