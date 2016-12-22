# Tweeter!

## Schema.sql
| users |
| :--- |
| user_id |
| username (VARCHAR) |

| tweets |
| :--- |
| tweet_id |
| content (TEXT) |
| likes (INT) |
| user_id (INT) |

## API endpoints

| Routes | Description |
| :--- | :--- |
| `/tweets` | Returns ALL of the tweets in |
| `/tweets/user/:username` | Returns all of the tweets for that user |
| `/tweets/hashtag/:hashtag` | Returns all of the tweets containing that hashtag |
