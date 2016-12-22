-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- 1) Find all fields (book and author related) for all books written by George R.R. Martin.
-- SELECT *
-- FROM authors
-- LEFT JOIN books
--  ON (authors.id = books.author_id)
-- WHERE authors.name = 'George R.R. Martin';

-- 2) Find all fields (book and author related) for all books written by Milan Kundera.
-- SELECT *
-- FROM authors
-- LEFT JOIN books
--  ON (authors.id = books.author_id)
-- WHERE authors.name = 'Milan Kundera';


-- 3) Find all books written by an author from China or the UK.
-- SELECT
--   books.title AS book
-- from authors
-- LEFT JOIN books
--  ON (authors.id = books.author_id)
-- WHERE authors.nationality = 'China' OR authors.nationality = 'United Kingdom';


-- 4) Find out how many books Albert Camus wrote.
-- SELECT
--   COUNT(books.author_id)
-- FROM books
-- LEFT JOIN authors
--  ON (authors.id = books.author_id)
-- WHERE authors.name = 'Albert Camus';


-- 5) Find out how many books were written by US authors.
-- SELECT
--   COUNT(books.author_id)
-- FROM books
-- LEFT JOIN authors
--  ON (authors.id = books.author_id)
-- WHERE authors.nationality = 'United States of America';


-- 6) Find all books written after 1930 by authors from Argentina.
-- SELECT
--   books.title AS book
-- FROM authors
-- INNER JOIN books
--  ON (authors.id = books.author_id)
-- WHERE authors.nationality = 'Argentina' AND books.publication_date > 1930;


-- 7) Find all books written before 1980 by authors not from the US.
-- SELECT
--   books.title AS book
-- FROM authors
-- INNER JOIN books
--  ON (authors.id = books.author_id)
-- WHERE authors.nationality <> 'United States of America' AND books.publication_date < 1980;


-- 8) Find all authors whose names start with 'J'.
-- SELECT
--   authors.name AS author
-- FROM authors
-- WHERE authors.name LIKE 'J%';


-- 9) Find all books whose titles contain 'the'.
-- SELECT
--   books.title AS book
-- FROM books
-- WHERE books.title ILIKE '%the %';


-- 10) Find all authors who have written books with that start with the letter 'N'.
SELECT
  authors.name AS author,
  books.title AS title
FROM authors
LEFT JOIN books
  ON (authors.id = books.author_id)
WHERE books.title ILIKE 'N%';

