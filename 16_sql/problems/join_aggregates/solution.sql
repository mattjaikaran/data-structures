SELECT c.id AS customer_id, c.name, COUNT(o.id) AS order_count,
       COALESCE(SUM(o.total), 0) AS total_spent
FROM customers AS c
LEFT JOIN orders AS o ON o.customer_id = c.id
GROUP BY c.id, c.name
ORDER BY c.id;
