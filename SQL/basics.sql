-- Selecting single columns
SELECT name FROM users;

-- Selecting multiple columns 
SELECT name,email from users;

-- * operator in SQL
SELECT * FROM users;

-- applying filter using where 
SELECT * FROM users where age > 12;

-- Comparision operator 
SELECT * FROM users where age =12

SELECT * FROM users WHERE age != 21;

-- AND OPERATOR
SELECT * from users WHERE age>21 AND age<30;

-- OR OPERATOR
SELECT * FROM users where age = 21 OR age = 25

-- NOT Operator 
SELECT * FROM users WHERE NOT age = 21;
WHERE age! = 21;

-- IN operator (supplement for = operator)
SELECT * FROM users WHERE age IN (21,25,30);

SELECT * FROM users WHERE status IN ('pending','in-progress')

-- BETWEEN operator in MySQL 
SELECT * FROM users where age BETWEEN 20 and 30;

-- LIKE OPERATOR IN MySQL 
SELECT * FROM users WHERE name LIKE 'ra%'

SELECT * FROM users WHERE name LIKE '%am'

SELECT * FROM USERS WHERE name LIKE '%ram%'


-- NULL operator in MySQL
WHERE email IS NULL; --> CORRECT 
WHERE email = NULL --> WRONG 

WHERE email IS NOT NULL

-- ORDER BY FUNCTION 
SELECT * FROM users ORDER BY age DESC;
SELECT * FROM users ORDER BY age ASC;
SELECT * FROM users ORDER BY name ASC;

-- LIMIT In MySQL
SELECT * FROM users LIMIT 20;
SELECT * FROM users LIMIT 10;

-- OFFSET in MySQL 
SELECT * FROM users LIMIT 10 OFFSET 20;

SELECT id, title, status FROM tasks ORDER BY created_at DESC LIMIT 10 OFFSET 20;

-- Distinct Functions 
SELECT DISTINCT status FROM tasks;
-- gives -> pending completed 


-- ALIASES- AS 
SELECT name AS username FROM users; // --> you get username in result instead of name 
SELECT u.name FROM users AS u;
