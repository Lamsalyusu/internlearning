-- This is the PART WHERE SQL optimization Starts

-- imagine you have 
-- 10 million rows 

SELECT * FROM users WHERE EMAIL = 'abc@gmail.com'
-- without a suitable index MySQL needs to inspect a huge amount of data.

-- creating a index 
CREATE INDEX idx_users_email ON users(email);

-- what should be indexed 
-- common candidates like 
-- PRIMARY KEY
-- FOREIGN KEY
-- columns frequently used in WHERE
-- columns frequently used in JOIN
-- sometimes ORDER BY
-- sometimes UNIQUE columns


-- For example:

-- WHERE email = ?

-- → index email.

-- WHERE user_id = ?

-- → index user_id.

-- JOIN tasks ON users.id = tasks.user_id

-- → tasks.user_id is commonly indexed.

-- ================================================================================

-- But don't index everything

-- This is important.

-- Indexes aren't free.

-- They:
-- consume storage
-- slow down INSERT
-- slow down UPDATE
-- slow down DELETE

-- because MySQL must maintain the index.

-- So don't think:

-- "More indexes = faster database."

-- Think:
-- "Correct indexes = faster important queries."


-- EXPLAIN

-- This is one of the most important optimization tools you should learn.

-- Instead of:

SELECT *
FROM users
WHERE email = 'abc@gmail.com';

-- run:

EXPLAIN
SELECT *
FROM users
WHERE email = 'abc@gmail.com';

-- MySQL tells you how it intends to execute the query.

-- You'll encounter things like:

-- type
-- possible_keys
-- key
-- rows
-- Extra

-- You don't need to master every column immediately.

-- But you should learn to ask:
-- Is MySQL using my index?


-- AVOID USING SELECT * when performance matters 
-- INSTEAD OF :
SELECT * FROM tasks;
-- prefer
SELECT id, email , status from tasks;

-- AVOID LEADING % WHEN YOU NEED AN INDEX
-- THIS
WHERE name LIKE 'Yuy%';
-- can potentially use an index effeciently.

-- But:
WHERE name LIKE '%yutsu'
-- is much harder to optimize with a normal B-tree index because MySQL doesno't know where the value begins

-- COMPOSITE INDEXES
-- suppose you frequently query 
SELECT * FROM task where user_id = 10 AND status ='pending'

-- You might use 
CREATE INDEX idx_tasks_users_status ON tasks (user_id,status);
-- This is a composite index
-- order matters
(user_id,status)
-- is not necessarily equivalent to:
(status,user_id)

-- This becomes important once you're doing serious query optimization.

-- =================================================================================
DONT OPTIMIZE BLINDLY
-- =================================================================================
-- Don't look at:

SELECT *
FROM users
WHERE email = ?;

-- and immediately say:

-- "I need an index."

-- First ask:

-- How large is the table?
-- How frequently is this query executed?
-- Is there already an index?
-- What does EXPLAIN show?
-- Is the query actually slow?

-- Optimization should be measurement-driven.

-- ==================================================================================
-- Prepared Statements
-- Don't construct SQL like:

"SELECT * FROM users WHERE email = '" + email + "'"

Use parameters:

SELECT *
FROM users
WHERE email = ?;

-- Then provide the value separately.

-- This helps prevent SQL injection and allows database drivers to handle values safely.

-- Constraints

-- You'll want to understand:

PRIMARY KEY
FOREIGN KEY
UNIQUE
NOT NULL
DEFAULT
CHECK

-- Example:

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,

    email VARCHAR(255)
        NOT NULL
        UNIQUE,

    age INT,

    status VARCHAR(20)
        DEFAULT 'active'
);

-- These constraints let the database itself enforce rules.

-- ====================================================================================
CREATE TABLE

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(30) DEFAULT 'pending',
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
);


-- Whenever you get a requirement like:

-- "Get the latest 10 pending tasks for user 5."

-- Don't think about syntax first.

-- Break the English down:

-- Get
--  ↓
-- tasks
--  ↓
-- belonging to user 5
--  ↓
-- where status = pending
--  ↓
-- sort newest first
--  ↓
-- take 10

-- Then construct:

SELECT id, title, status, created_at
FROM tasks
WHERE user_id = 5
AND status = 'pending'
ORDER BY created_at DESC
LIMIT 10;

-- That's how you should learn SQL.