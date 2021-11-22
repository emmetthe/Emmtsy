# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all
Category.delete_all

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

category1 = Category.create!(
  category_name: 'Keyboard & Accesories'
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

product2 = Product.create!(
  seller_id: user3.id,
  product_name: "Personalized Wallet, Engraved",
  description: "STYLISH, SPACIOUS, SAFE and SENTIMENTAL. With handcrafted exquisite top-grain leather from Argentina, RFID blocking technology, and the option for custom engraving, this bifold wallet makes the perfect custom-made gift for him.",
  price: 26.99,
  category_id: category2.id
)

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
  category_id: category1.id
)

product4 = Product.create!(
  seller_id: user3.id,
  product_name: "Big Letter Necklace",
  description: "Material: High Quality Solid 925 Sterling Silver, Featuring 1.75in Letter Charm",
  price: 23.52,
  category_id: category2.id
)

product5 = Product.create!(
  seller_id: user1.id,
  product_name: "Cows Sweater, Knitted",
  description: "Comfy and stylish cows pattern sweater. Brings out a very positive look. Looks perfect for all seasons.",
  price: 42.11,
  category_id: category3.id
)
