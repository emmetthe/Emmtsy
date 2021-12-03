# Emmtsy
[Live Demo](https://emmtsy.herokuapp.com/?#/)

Emmtsy is a full-stack web application based on Etsy, a website for selling/buying custom handmade goods

## Technologies Used
Emmtsy was built with:
* Ruby on Rails
* PostgreSQL
* React-Redux
* AWS S3
* JavaScript

## Features
### User Authentication
* Users can signup, login, and logout of an account
* Certain pages and features are only available for logged in users such as writing/editing reviews and adding items to cart
### Product Listing
* Product details (description, price, name, seller name and reviews) for an item will be listed on the product show page
* Product can be accessed by clicking on the product image from either the search page, or home page
* Users can choose their desired quantity when adding an item to the cart from the product's show page
### Cart
* Logged in users can add items to their shopping cart
* Each cart is unique to a user so users can not view the carts of other users
* Product quantity can be adjusted when viewing their cart, with price adjustments being reflected upon change
* User must be signed in to view their cart
* User can remove products from their cart
### Reviews
* Logged in users will be able to add a new review, or edit an existing one
* Users can only edit/delete their own reviews
* Users can not add reviews to products that they have listed
* Average review rating will be reflected underneath the product's star rating
### Search
* Users can search for items based on product name
* Search page will display all relevant results related to the search input

### Future Implemenations
* Allow users to search for items by category
* Allow users to checkout, to clear their cart
