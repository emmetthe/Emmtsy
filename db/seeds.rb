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

user7 = User.create!(
  username: 'abc',
  email: 'abc@g.com',
  password: 'aaaaaaaaaa'    
)

user8 = User.create!(
  username: 'haha',
  email: 'jajajaja@g.com',
  password: '111111111111'    
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
  seller_id: user7.id,
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
  seller_id: user7.id,
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

product8 = Product.create!(
  seller_id: user6.id,
  product_name: "Stationery Lover Surprise Box",
  description: "This product is a surprise box, meaning you are not guaranteed to order the items which are photographed, our boxes are random, and will contain various different stationery products",
  price: 13.99,
  category_id: category5.id
)

product8.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/stationery.jpg'), filename: 'stationery.jpg')

product9 = Product.create!(
  seller_id: user8.id,
  product_name: "Genuine Columbia Emerald Gem Multi Gemstone Ring Band",
  description: "MESMERIZING 100% NATURAL COLUMBIA GEM LADY AMERICA, EMERALD RING BAND WITH MULTI ZAMBIAN EMERALD GEMSTONES ALL OVER THE BAND AND SETTINGS.",
  price: 79.99,
  category_id: category5.id
)

product9.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/ring.jpg'), filename: 'ring.jpg')

product10 = Product.create!(
  seller_id: user1.id,
  product_name: "Birthday Wishes",
  description: "Our letter-pressed cards hearken back to botanical encyclopedia illustrations. Our cards are timeless and thoughtfully designed to both capture and express life's simplest and deepest sentiments.",
  price: 4.99,
  category_id: category9.id
)

product10.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/birthday.jpg'), filename: 'birthday.jpg')

product11 = Product.create!(
  seller_id: user3.id,
  product_name: "Customized Dog Socks - Put Your Cute Dog on Custom Socks",
  description: "Get custom socks with your very own fur babies face on them! They make the perfect gift for anyone who loves their dog! Perfect for any holiday, birthday, or anniversary! Handmade by local part time moms in Portland, Oregon every pair is made to order.",
  price: 6.99,
  category_id: category3.id
)

product11.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/socks.jpg'), filename: 'socks.jpg')

product12 = Product.create!(
  seller_id: user4.id,
  product_name: "Custom Dog Portrait",
  description: "We have the best pet artist in the business working for us! They produce the most incredible and seamless pet portraits. We strive to get your artwork to you in 2-6 business days (but a masterpiece does take time)",
  price: 33.99,
  category_id: category7.id
)

product12.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/dog-paint.jpg'), filename: 'dog-paint.jpg')

product13 = Product.create!(
  seller_id: user2.id,
  product_name: "HummingBird 55in Amazing painting of a flying colorful bird",
  description: "The hummingbird is known mainly for its tiny dimensions and for its ability to hover in mid-air. Its wings flutter at a speed of 90 times per second. Delicate pastel colors, dynamic brushstrokes in the direction of the wings.",
  price: 557.99,
  category_id: category7.id
)

product13.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/hummingbird.jpg'), filename: 'hummingbird.jpg')

product14 = Product.create!(
  seller_id: user1.id,
  product_name: "Vintage Caravan Sewing Machine Cover Pattern",
  description: 'Wadding - If it readily available in your area, you may wish to switch the three layers of wadding in the Tutorial for one layer of Soft and Stable (or similar) as it is easier to sew. If so, you will need to cut two rectangles of Soft and Stable 22″ X 15″ and one strip of Soft and Stable 44″ X 11″ an overall size of 44" X 30" should be sufficient. Two layers would give a sturdier finish.',
  price: 5.99,
  category_id: category8.id
)

product14.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/sewing.jpg'), filename: 'sewing.jpg')

product15 = Product.create!(
  seller_id: user4.id,
  product_name: "DIY New York Style Bagel Kit",
  description: "Learn how to make delicious, chewy bagels in an afternoon. No shopping for hard-to-find ingredients, no measuring, no frustration, just fun for all ages and experience levels! All the ingredients you'll need are in this kit. Check out our reviews to see why people love making our bagels :)",
  price: 27.99,
  category_id: category8.id
)

product15.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/bagel.jpg'), filename: 'bagel.jpg')

product16 = Product.create!(
  seller_id: user3.id,
  product_name: "Glass Propagation Station with Wood Stand",
  description: "BEAUTIFUL STYLE: This unique swing design puts the focus on your plants and gives unobstructed visibility to the health and growth of your plants. These fit nicely in a window sill, bathroom ledge, or in the kitchen. With the larger design, this also looks gorgeous as the centerpiece on your coffee table.",
  price: 17.99,
  category_id: category4.id
)

product16.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/propagation.jpg'), filename: 'propagation.jpg')

product17 = Product.create!(
  seller_id: user1.id,
  product_name: "Wind Chimes Made From Glass Wine Bottles",
  description: "Never before has the beauty of sight and sound complimented each other so perfectly. These Wine Bottle Wind Chimes are the perfect addition to any back yard or patio.
  This wind chime is a gorgeous addition to any home or makes a perfect gift for a wine lover or anyone that enjoys being out in the garden during the spring and summer months, with so many color options you're sure to find one you or someone special will love.",
  price: 21.99,
  category_id: category4.id
)

product17.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/chimes.jpg'), filename: 'chimes.jpg')

product18 = Product.create!(
  seller_id: user8.id,
  product_name: "Wool Ceramic Mug",
  description: "This mug is for all the knit lovers out there! It's hand-shaped to give it a wool texture. It's cute, beautiful, and the perfect gift for the holidays!",
  price: 29.99,
  category_id: category4.id
)

product18.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/mugs.jpg'), filename: 'mugs.jpg')

product19 = Product.create!(
  seller_id: user6.id,
  product_name: "Pokemon Terrarium",
  description: "Best Pokemon Gifts For The Pokemon Lover. Product Size: Diameter 10 cm",
  price: 59.99,
  category_id: category7.id
)

product19.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/pokemon.jpg'), filename: 'pokemon.jpg')

product20 = Product.create!(
  seller_id: user6.id,
  product_name: "Adorable Pig Earrings in Rose Gold",
  description: "We start the year with an adorable NEW Release - Rose Gold Pig Stud Earrings. This little pig is two toned with a pretty rose gold face and a silver nose. He is super cute and would make a great gift for the pig lover!",
  price: 34.99,
  category_id: category2.id
)

product20.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/earring.jpg'), filename: 'earring.jpg')

product21 = Product.create!(
  seller_id: user6.id,
  product_name: "Dad Gift Board",
  description: "• It holds your Phone, Wallet, Rings, Watch, Keys, Glasses, and Miscellaneous items all in one place.

  • It keeps all everyday essentials organized and easy to locate
  
  • Easy to assemble just slide the back piece through the holes on the front, no glue, screws, or nails required.",
  price: 35.99,
  category_id: category9.id
)

product21.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/dad.jpg'), filename: 'dad.jpg')

product22 = Product.create!(
  seller_id: user8.id,
  product_name: "Wooden Sling Hockey Board",
  description: "This wooden sling hockey board game and Chess Set games are made with solid Pine wood, planet-friendly and very durable. The pieces are long-lasting, as well as recyclable, so you can enjoy a great family game without hurting the environment.",
  price: 22.99,
  category_id: category6.id
)

product22.photo.attach(io: URI.open('https://emmtsy-seeds.s3.us-west-1.amazonaws.com/hockey.jpg'), filename: 'hockey.jpg')

