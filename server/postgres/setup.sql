
CREATE TABLE IF NOT EXISTS users (
	id BIGSERIAL NOT NULL PRIMARY KEY, 
	firstname VARCHAR(1000) NOT NULL,
	lastname VARCHAR(1000) NOT NULL, 
	username VARCHAR(1000) NOT NULL,
	image TEXT DEFAULT 'none',
	age INT(11) NOT NULL,
	gender VARCHAR(1000) NOT NULL,
	sexual_orient VARCHAR(1000) DEFAULT 'bisexual',
	bio VARCHAR(1000),
	city VARCHAR(1000),
	country VARCHAR(1000),
	actual_location /* complete this */
	password VARCHAR(1000) NOT NULL,
	email VARCHAR(1000), 
	active TINYINT(1) DEFAULT 0,
	token varchar(255) NOT NULL,
	fame INT(11) NOT NULL DEFAULT 0,
	online INYINT(1) DEFAULT 0,
	last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_images (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	user_id INT(11) NOT NULL, 
	image TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS matches (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	user1 INT(11) NOT NULL,
	user2 INT(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS likes (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	liker_id INT(11) NOT NULL,
	liked_id INT(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS chat (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	sender_id INT(11) NOT NULL, 
	receiver_id INT(11) NOT NULL,
	message TEXT NOT NULL,
	read TINYINT(1) DEFAULT 0,
	time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS notifications (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	sender_id INT(11) NOT NULL, 
	reciever_id INT(11) NOT NULL,
	text VARCHAR(100),
	time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS block (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	user_id INT(11) NOT NULL,
	blocked_id INT(11) NOT NULL
);