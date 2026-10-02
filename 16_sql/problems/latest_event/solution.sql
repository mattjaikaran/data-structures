WITH ranked AS (
    SELECT id, user_id, value,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY occurred_at DESC, id DESC) AS position
    FROM events
)
SELECT user_id, id AS event_id, value
FROM ranked
WHERE position = 1
ORDER BY user_id;
