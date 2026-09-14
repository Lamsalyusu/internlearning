-- Selecting single columns
SELECT name FROM users;

-- Selecting multiple columns 
SELECT name,email from users;

-- * operator in SQL
SELECT * FROM users;

-- applying filter using where 
SELECT * FROM users where age > 12;