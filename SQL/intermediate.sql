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

-- 3. INSERT 
INSERT INTO users (name, email ,age) VALUES ('RAME','rame@gmail.com',21) ('KRISHNA','krishna@gmail.com',22)

-- 4. UPDATE 
UPDATE users SET age = 23 WHERE id = 1;
-- always specify id while updating because it applies update everywhere if id is not mentioned.

DELETE FROM users WHERE id = 5;  // --> specifying the specific id of user

-- BE extremely careful with update and delete.

-- PRIMARY KEY 
-- A primary key uniquely identifies a row
-- users
-- -----------------
-- id    name
-- 1     Ram
-- 2     Hari
-- 3     Sita
-- id is usually PRIMARY KEY

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255)
);

-- Suppose:

-- users
-- id
-- ---
-- 1
-- 2
-- 3

-- and:

-- tasks
-- id   user_id
-- 1      1
-- 2      1
-- 3      2

-- tasks.user_id points to:

-- users.id

-- That's a foreign key relationship.

-- users
--   │
--   │ 1
--   │
--   └────────< tasks
--              many