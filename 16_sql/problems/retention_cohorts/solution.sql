WITH first_activity AS (
    SELECT user_id, MIN(event_date) AS cohort_date
    FROM activity
    GROUP BY user_id
), retained AS (
    SELECT f.user_id, f.cohort_date,
           CASE WHEN EXISTS (
               SELECT 1 FROM activity AS a
               WHERE a.user_id = f.user_id
                 AND a.event_date = DATE(f.cohort_date, '+1 day')
           ) THEN 1 ELSE 0 END AS returned
    FROM first_activity AS f
)
SELECT cohort_date, COUNT(*) AS users, SUM(returned) AS retained_users,
       1.0 * SUM(returned) / COUNT(*) AS retention_rate
FROM retained
GROUP BY cohort_date
ORDER BY cohort_date;
