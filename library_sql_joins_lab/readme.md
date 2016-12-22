# Library DB
Adapted from Adam Bray's [library_sql](https://github.com/ga-wdi-exercises/library_sql) exercise

## Setup

### Part 1 - Create your database
In your CLI, use the command

```
createdb library_lab
```

### Part 2 - Create your DB's schema

A schema file has been provided for you with the following structure:

* authors
  * id
  * name          TEXT
  * nationality   TEXT
  * birth_year    INTEGER

* books
  * id
  * title             TEXT
  * publication_date  INTEGER
  * author_id         INTEGER

Load the schema into your DB:

```bash
$ psql -d library -f schema.sql
```

### Part 3 - Seed your database

Load the given seed file into your db. Take a look at it, and note
how authors and books are related.

```bash
$ psql -d library -f seed.sql
```

## Exercise
Now we can practice our SQL joins! Open the file `joins.sql` and complete all of the prompted queries. To run your queries you should use `psql -d library_lab -f joins.sql`. After each SQL query is found to be correct, you may comment it out so when you run the next one your output isn't super messy.

## Bonus
If you've completed your joins in a timely manner there is a file called `basic_queries.sql` included. It's never a bad idea to practice the basics no matter how confident you may be in your skills. **REPS**!
