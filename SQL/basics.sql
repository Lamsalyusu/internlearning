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