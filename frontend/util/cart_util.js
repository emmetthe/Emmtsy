export const fetchCart = () =>
  $.ajax({
    method: 'GET',
    url: '/api/cart_items'
  });

  
  export const deleteCartItem = (cartItemId) =>
  $.ajax({
    method: 'DELETE',
    url: `/api/cart_items/${cartItemId}`
  });
  
  export const updateCartItem = (cartItem) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/cart_items/${cartItem.id}`,
    data: { cartItem }
  });
  
  export const createCartItem = (cartItem) =>
    $.ajax({
      method: 'POST',
      url: '/api/cart_items',
      data: { cartItem }
    });