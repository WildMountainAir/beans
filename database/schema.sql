DROP DATABASE IF EXISTS beansdb;
CREATE DATABASE beansdb;

USE beansdb;

CREATE TABLE beans {
  _id UNIQUE AUTO_INCREMENT NOT NULL,
  category VARCHAR(50) NOT NULL,
  bean VARCHAR(550) NOT NULL,
  favorite BOOLEAN,
}

CREATE TABLE users {
  _id UNIQUE AUTO_INCREMENT NOT NULL,
  fname VARCHAR(50),
  lname VARCHAR(50),
  username VARCHAR(50),
  email VARCHAR(75),
  sessions INT,
  password VARCHAR(25)
}
INSERT INTO beans VALUES ('Self Love', 'I am love.', false);
INSERT INTO beans VALUES ('Self Love', 'I love myself unconditionally.', false);
INSERT INTO beans VALUES ('Self Love', 'I am deserving of love and respect.', false);
INSERT INTO beans VALUES ('Self Love', 'My body is healthy; my mind is brilliant; my soul is tranquil.', false);
INSERT INTO beans VALUES ('Self Love', 'I am grateful for the good in my life.', false);
INSERT INTO beans VALUES ('Self Love', 'I am learning to take control of my habits.', false);
INSERT INTO beans VALUES ('Self Love', 'I only compare myself to myself.', false);
INSERT INTO beans VALUES ('Self Love', 'I am enough.', false);
INSERT INTO beans VALUES ('Self Love', 'My thoughts are not facts.', false);
INSERT INTO beans VALUES ('Self Love', 'I am not my anxiety.', false);
INSERT INTO beans VALUES ('Self Love', 'I love and forgive myself.', false);
INSERT INTO beans VALUES ('Self Love', 'My thoughts do not define who I am.', false);
INSERT INTO beans VALUES ('Self Love', 'I deserve all of the good things that are in my life.', false);
INSERT INTO beans VALUES ('Self Love', 'I am good enough. I am smart enough, and doggone it -- people like me', false);
INSERT INTO beans VALUES ('Confidence', 'I am resilient. I am capable. I am enough.', false);
INSERT INTO beans VALUES ('Confidence', 'I have the power to create change.', false);
INSERT INTO beans VALUES ('Confidence', 'I am important.', false);
INSERT INTO beans VALUES ('Confidence', 'I am not afraid to be different.', false);
INSERT INTO beans VALUES ('Confidence', 'I am superior to negative thoughts and low actions.', false);
INSERT INTO beans VALUES ('Confidence', 'I am strong.', false);
INSERT INTO beans VALUES ('Confidence', 'I am strong. I am powerful. I can.', false);
INSERT INTO beans VALUES ('Confidence', 'I can push through anything that life throws at me.', false);
INSERT INTO beans VALUES ('Confidence', 'I am a strong, independent person.', false);
INSERT INTO beans VALUES ('Confidence', 'I am my own superhero.', false);
INSERT INTO beans VALUES ('Confidence', 'I am fearless.', false);
INSERT INTO beans VALUES ('Confidence', 'The choices I make honor my heart.', false);
INSERT INTO beans VALUES ('Confidence', 'I am confident and calm.', false);
INSERT INTO beans VALUES ('Confidence', 'I belive in you. -Alison Sipos, creator of Beans', false);
INSERT INTO beans VALUES ('Confidence', 'Every breath I take gives me another level of confidence.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am getting better with every passing moment.', false);
INSERT INTO beans VALUES ('Acceptance', 'I face reality and accept what I cannot change.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am choosing to let go of my past pain.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am proud of myself.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am worthy.', false);
INSERT INTO beans VALUES ('Acceptance', 'I choose to let go of my fear.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am healing.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am valued.', false);
INSERT INTO beans VALUES ('Acceptance', 'I let go of all that no longer serves me.', false);
INSERT INTO beans VALUES ('Acceptance', 'I choose to forgive and let go of negative energy.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am in control of every aspect of my life.', false);
INSERT INTO beans VALUES ('Acceptance', 'I am allowed to say no to others and yes to myself.', false);
INSERT INTO beans VALUES ('Career', 'I am creating the career of my dreams.', false);
INSERT INTO beans VALUES ('Career', 'I have a lot to offer the world.', false);
INSERT INTO beans VALUES ('Career', 'I can and I will.', false);
INSERT INTO beans VALUES ('Career', 'I make myself proud.', false);
INSERT INTO beans VALUES ('Career', 'I am worth it.', false);
INSERT INTO beans VALUES ('Career', 'I am confident that I can achieve anything.', false);
INSERT INTO beans VALUES ('Career', 'I have the power to create change.', false);
INSERT INTO beans VALUES ('Career', 'I am transforming.', false);
INSERT INTO beans VALUES ('Career', 'I passionate about my creativity.', false);
INSERT INTO beans VALUES ('Career', 'I believe in myself.', false);
INSERT INTO beans VALUES ('Career', 'I am becoming wealthy.', false);
INSERT INTO beans VALUES ('Career', 'My productivity does not define my worth.', false);
INSERT INTO beans VALUES ('Career', 'The future is safe. All is well.', false);
INSERT INTO beans VALUES ('Career', 'I overcome my fears by following my dreams.', false);
INSERT INTO beans VALUES ('Happiness', 'I am in control of my feelings.', false);
INSERT INTO beans VALUES ('Happiness', 'I choose to be happy.', false);
INSERT INTO beans VALUES ('Happiness', 'I am living in the moment.', false);
INSERT INTO beans VALUES ('Happiness', 'I am happy now in this moment which is all there is.', false);
INSERT INTO beans VALUES ('Happiness', 'I am happy to be who I am, where I am, and when I am.', false);
INSERT INTO beans VALUES ('Happiness', 'I deserve to be happy and loved.', false);
INSERT INTO beans VALUES ('Happiness', 'I am free.', false);
INSERT INTO beans VALUES ('Happiness', 'I am happy. I am healthy. I am wealthy. I am loved. I am respected.', false);

INSERT INTO users VALUES ('Alison', 'Sipos', 'LvlyAli', 'alison.sipos@icloud.com', 0, 'password');
