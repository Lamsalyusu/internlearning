Reading
SELECT
FROM
WHERE
ORDER BY
LIMIT
OFFSET
DISTINCT

Filtering
AND
OR
NOT
IN
BETWEEN
LIKE
IS NULL
IS NOT NULL

Aggregation
COUNT
SUM
AVG
MIN
MAX
GROUP BY
HAVING

Modification
INSERT
UPDATE
DELETE

Relationships
JOIN
INNER JOIN
LEFT JOIN
RIGHT JOIN

Database structure
CREATE DATABASE
CREATE TABLE
ALTER TABLE
DROP TABLE
CREATE INDEX

Performance
EXPLAIN

Transactions
START TRANSACTION
COMMIT
ROLLBACK


                 SQL
                  │
        ┌─────────┴─────────┐
        │                   │
      READ                WRITE
        │                   │
 SELECT                  INSERT
 WHERE                   UPDATE
 ORDER BY                DELETE
 LIMIT
        │
        ├───────────────┐
        │               │
    Aggregation      Relationships
        │               │
 GROUP BY              JOIN
 HAVING             INNER JOIN
 COUNT              LEFT JOIN
 SUM
 AVG
        │
        └───────────────┐
                        │
                   Optimization
                        │
                      INDEX
                      EXPLAIN
                   Pagination
                Query efficiency