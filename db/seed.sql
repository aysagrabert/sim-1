CREATE TABLE products (
  products_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(25) NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL
);

-- how to insert dummy DATAINSERT into products
-- INSERT INTO products
-- (name, price, image_url)
-- VALUES
-- ('Black Jeans', 50, 'https://cdn.shopify.com/s/files/1/0340/3381/products/young-and-reckless-mens-bottoms-denim-carthage-distressed-skinny-jeans-black-30112521679_2000x.jpg?v=1505261241'),
-- ('Black Shoes', 30, 'https://images-na.ssl-images-amazon.com/images/I/71sIs1BvfiL._UX395_.jpg');