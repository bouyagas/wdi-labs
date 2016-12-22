BEGIN;

INSERT INTO users (user_id, username) VALUES
(1, 'GA_NYC'),
(2, 'GA'),
(3, 'skyrawwr'),
(4, 'Pookie_pooks9'),
(5, 'realDonaldTrump');

INSERT INTO tweets (content, likes, user_id) VALUES
('What happens after you fail? Hear from startup founders tonight at our #FailForward event: http://ga.co/2ffkllF  @theNYVC', 0, 1),
('Learn how to craft & pitch your #scientificresearch from science, tech & VC professionals - 6pm tomorrow: http://ga.co/2eW1ngR  @authorea', 0, 1),
('Hack with us from 9am-6pm on Saturday at our Amazon Alexa #Hackathon! http://ga.co/2eWba6e  @alexadevs', 0, 1),
('Last week, GA''s CEO @jakeschwartz answered questions about startups, MBAs & more. Learn what he had to say: http://ga.co/2el9UJI  @Quora', 0, 1),
('Encouraging women to pursue programming careers means creating a more inclusive work culture: http://ga.co/2fnkSyY  #womenintech', 0, 2),
('Happy birthday, Carl Sagan! Nearly 40 years ago, the late astronomer sent the Voyager Golden Record into space: https://www.instagram.com/p/BMmI8tdBEbi/ ', 0, 2),
('It''s actually killing me not having a dog in NYC',0,3),
('Had a stranger give me the best life advice today. Big changes are coming.',2,4),
('Such a beautiful and important evening! The forgotten man and woman will never be forgotten again. We will all come together as never before',600000,5),
('....I ripped my pants.',1,4),
('Thank you Reno, Nevada. NOTHING will stop us in our quest to MAKE AMERICA SAFE AND GREAT AGAIN! #AmericaFirst',47596,5),
('MAKE AMERICA GREAT AGAIN!',120000,5),
('If Obama worked as hard on straightening out our country as he has trying to protect and elect Hillary, we would all be much better off!',103081,5),
('Im moving to NYC guys.... Hasn''t hit me yet.',3,3),
('"It pays to have friends in high places- like the Justice Department. Clearly the Clintons do." #DrainTheSwamp!',22000,5),
('So many great thing are coming for me. I know it.',2,4);

ALTER TABLE ONLY tweets
  ADD CONSTRAINT user_id_fkey_cascade FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;

COMMIT;

ANALYZE users;
ANALYZE tweets;
