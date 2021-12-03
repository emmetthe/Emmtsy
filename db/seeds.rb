require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Category.destroy_all
CartItem.destroy_all
Review.destroy_all

user1 = User.create!(
  username: 'demo',
  email: 'demo@gmail.com',
  password: '123456'
)

user2 = User.create!(
  username: 'test',
  email: 'test@gmail.com',
  password: 'test123'    
)

user3 = User.create!(
  username: 'joe',
  email: 'joe@g.com',
  password: 'joe123'    
)

user4 = User.create!(
  username: 'tom',
  email: 'tom@g.com',
  password: 'tom123'    
)

user5 = User.create!(
  username: 'sdgdfg',
  email: 'dfggszdg@g.com',
  password: 'dsfgsdfgdg'    
)

user6 = User.create!(
  username: 'testestseset',
  email: 'testsetset@g.com',
  password: 'tsetsetsetset'    
)

category2 = Category.create!(
  category_name: 'Jewelry & Accesories'
)

category3 = Category.create!(
  category_name: 'Clothing & Shoes'
)

category4 = Category.create!(
  category_name: 'Home & Living'
)

category5 = Category.create!(
  category_name: 'Wedding & Party'
)

category6 = Category.create!(
  category_name: 'Toys & Entertainment'
)

category7 = Category.create!(
  category_name: 'Art & Collectables'
)

category8 = Category.create!(
  category_name: 'Craft Supplies'
)

category9 = Category.create!(
  category_name: 'Gifts & Gift Cards'
)

product1 = Product.create!(
  seller_id: user1.id,
  product_name: 'Personalized Charcuterie Planks and Beer Flights',
  description:
    'Serve your guests with style and panache with a personalized Charcuterie or Beer Flight Serving Trays. Our cleverly designed Beer Flight Trays hold the wider flared part of the glass for stable carrying and serving. They are designed to hold most any size or shape of beer glass.',
  price: 57.99,
  category_id: category4.id
)

product1.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/charcuterie.jpg'), filename: 'charcuterie.jpg')

product2 = Product.create!(
  seller_id: user3.id,
  product_name: "Personalized Wallet, Engraved",
  description: "STYLISH, SPACIOUS, SAFE and SENTIMENTAL. With handcrafted exquisite top-grain leather from Argentina, RFID blocking technology, and the option for custom engraving, this bifold wallet makes the perfect custom-made gift for him.",
  price: 26.99,
  category_id: category2.id
)

product2.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/wallet.jpg'), filename: 'wallet.jpg')

product3 = Product.create!(
  seller_id: user2.id,
  product_name: "TGR Jane V2",
  description: "
  - Full Kobelco 5052 aluminum case
  - 6.9 degrees slope
  - 1 pcs of polished stainless steel weight (triangular bar)
  - 1 pcs of sandblasted/coated stainless steel weight (bottom plate)
  - 1 pcs of sandblasted/coated brass weight
  - CNC milled brass plate (sandblasted and coated)
  - ps2avrGB PCB
  - Fully Programmable
  - Full LED backlighting
  - Controller parts, diodes, and resistors are pre-soldered",
  price: 549.99,
  category_id: category6.id
)

product3.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/tgr-jane.jpg'), filename: 'tgr-jane.jpg')

product4 = Product.create!(
  seller_id: user3.id,
  product_name: "Big Letter Necklace",
  description: "Material: High Quality Solid 925 Sterling Silver, Featuring 1.75in Letter Charm",
  price: 23.52,
  category_id: category2.id
)

product4.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/big-letter.jpg'), filename: 'big-letter.jpg')

product5 = Product.create!(
  seller_id: user1.id,
  product_name: "Knitted Cows Sweater",
  description: "Comfy and stylish cows pattern sweater. Brings out a very positive look. Looks perfect for all seasons.",
  price: 42.11,
  category_id: category3.id
)

product5.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/cow.png'), filename: 'cow.png')

product6 = Product.create!(
  seller_id: user6.id,
  product_name: "Personalized Family Figurines",
  description: 'I create high quality personalized wooden dolls with nice little details from your daily life based on your photos.',
  price: 123.32,
  category_id: category6.id
)

product6.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/family.jpg'), filename: 'family.jpg')

product7 = Product.create!(
  seller_id: user5.id,
  product_name: "Anniversary card, Pizza Love",
  description: "5 X 7 greeting card in plastic, designed & handwritten, then printed on cream heavy card stock, hand folded, with a brown paper envelope",
  price: 4.99,
  category_id: category9.id
)

photo2 = URI.open("https://emmtsy-seeds.s3.us-west-1.amazonaws.com/pizzacard.jpg")
product7.photo.attach(io: photo2, filename:"pizzacard.jpg")
