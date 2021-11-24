export const fetchCart = () =>
  $.ajax({
    method: 'GET',
    url: '/api/cart_items'
  });

export const createCart = (cartItem) =>
  $.ajax({
    method: 'POST',
    url: '/api/cart_items',
    data: { cartItem }
  });

export const deleteCartItem = (itemId) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${itemId}`
  });

export const updateCartItem = (cartItem) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem }
  });
