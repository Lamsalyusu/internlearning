-- 1.GROUP_BY 
-- > This is where  SQL starts becoming powerful 
-- | id | status    |
-- | -- | --------- |
-- | 1  | pending   |
-- | 2  | pending   |
-- | 3  | completed |
-- | 4  | completed |
-- | 5  | completed |

SELECT status, COUNT(*) FROM tasks GROUP BY status;
-- GROUP similar values together, then calculate something about each group.

-- 2. HAVING 
-- WHERE filter rows and HAVING Filters groups.
SELECT status , COUNT(*) AS total FROM tasks GROUP BY status HAVING COUNT(*) >2 
-- Group tasks by status, then only show groups having more than 2 tasks.


-- MOST IMPORTANT SQL STRUCTURE:
-- You should become comfortable reading this:
SELECT columns
FROM table
WHERE condition
GROUP BY columns
HAVING condition
ORDER BY column
LIMIT number
OFFSET number;

SELECT name, age
FROM users
WHERE age >= 18
ORDER BY age DESC
LIMIT 10;

-- SQL QUERY EXECUTION ORDER
-- WE WRITE IT AS 
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT

FROM
 ↓
WHERE
 ↓
GROUP BY
 ↓
HAVING
 ↓
SELECT
 ↓
ORDER BY
 ↓
LIMIT