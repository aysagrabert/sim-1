UPDATE products

SET name = $2, price = $3, image_url = $4
WHERE products_id = $1;

SELECT *
FROM products;