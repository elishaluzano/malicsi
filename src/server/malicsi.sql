DROP DATABASE IF EXISTS malicsi;
CREATE DATABASE malicsi;
USE malicsi;
CREATE TABLE contactPersonInCaseOfEmergency (
	contact_person_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	contact_person_name varchar(50) NOT NULL,
  	contact_person_relationship varchar(20) NOT NULL,
  	contact_person_number varchar(15) NOT NULL
);

CREATE TABLE user (
  	user_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	name varchar(50) NOT NULL,
  	username varchar(20) NOT NULL,
  	password varchar(20) NOT NULL,
  	gender varchar(6) NOT NULL,
 	birthday date NOT NULL,
  	email varchar(30),
  	contact_number varchar(15),
  	contact_person int,
  	profile_pic text,
	constraint user_contact_person_fk foreign key (contact_person) references contactPersonInCaseOfEmergency(contact_person_id)
);

CREATE TABLE userAffiliation (
  	user_no int NOT NULL,
  	affiliation varchar(50) NOT NULL,
  	CONSTRAINT userAffiliation_user_no_fk FOREIGN KEY (user_no) REFERENCES user(user_id)
);

CREATE TABLE sponsoringInstitution (
  	institution_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	name varchar(50) NOT NULL,
  	description varchar(1000) NOT NULL
);

CREATE TABLE institutionHasAdmin (
  	institution_no int NOT NULL,
  	user_no int NOT NULL,
  	CONSTRAINT institutionHasAdmin_user_no_fk FOREIGN KEY (user_no) REFERENCES user (user_id),
  	CONSTRAINT institutionHas_institution_no_fk FOREIGN KEY (institution_no) REFERENCES sponsoringInstitution (institution_id)
);

CREATE TABLE venue (
	venue_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(50) NOT NULL
);

CREATE TABLE event (
	event_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	event_title varchar(50) NOT NULL,
   	venue varchar(50) NOT NULL,
  	start_date date NOT NULL,
  	end_date date NOT NULL,
  	institution_id_key int NOT NULL,
	constraint event_institution_key_fk foreign key(institution_id_key) references sponsoringInstitution(institution_id)
);

CREATE TABLE sport (
  	sport_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	name varchar(20) NOT NULL,
 	event_id_key int NOT NULL,
  	CONSTRAINT sport_event_id_key_fk FOREIGN KEY (event_id_key) REFERENCES event (event_id)
);

CREATE TABLE game (
	game_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	time datetime NOT NULL,
  	min_num_of_players int NOT NULL,
  	max_num_of_players int NOT NULL,
  	status varchar(10) NOT NULL,
	venue int NOT NULL,
  	sport_id_key int NOT NULL,
	CONSTRAINT game_venue_fk FOREIGN KEY (venue) REFERENCES venue (venue_id),
	CONSTRAINT game_sport_id_key_fk FOREIGN KEY (sport_id_key) REFERENCES sport (sport_id)
);

CREATE TABLE team (
  	team_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	name varchar(20) NOT NULL,
  	event_id_key int NOT NULL,
  	CONSTRAINT team_event_id_key_fk FOREIGN KEY (event_id_key) REFERENCES event (event_id)
);

CREATE TABLE teamIsComposedOfUser (
  	team_player_id int NOT NULL,
  	user_player_id int NOT NULL,
  	CONSTRAINT isComposedOf_team_player_id_fk FOREIGN KEY (team_player_id) REFERENCES team (team_id),
  	CONSTRAINT isComposedOf_user_player_id_fk FOREIGN KEY (user_player_id) REFERENCES user (user_id)
);

CREATE TABLE teamPlaysGame (
  	team_id_play int NOT NULL,
  	game_id_play int NOT NULL,
  	CONSTRAINT plays_game_id_play_fk FOREIGN KEY (game_id_play) REFERENCES game (game_id),
  	CONSTRAINT plays_team_id_play_fk FOREIGN KEY (team_id_play) REFERENCES team (team_id)
);

CREATE TABLE teamWinsGame (
  	team_id_key int NOT NULL,
  	game_id_key int NOT NULL,
  	CONSTRAINT wins_game_id_key_fk FOREIGN KEY (game_id_key) REFERENCES game (game_id),
  	CONSTRAINT wins_team_id_key_fk FOREIGN KEY (team_id_key) REFERENCES team (team_id)
);

CREATE TABLE sportIsJoinedByUser (
	user_id int NOT NULL,
	sport_id int NOT NULL,
	CONSTRAINT sportIsJoinedByUser_user_id_fk FOREIGN KEY (user_id) REFERENCES user(user_id),
	CONSTRAINT sportIsJoinedByUser_sport_id_fk FOREIGN KEY (sport_id) REFERENCES sport(sport_id)
);

CREATE TABLE userlog (
	log_id int NOT NULL PRIMARY KEY,
	user_id int NOT NULL,
	action varchar(100) NOT NULL,
	activity_time timestamp NOT NULL
);

insert into contactPersonInCaseOfEmergency values (contact_person_id,'Ryan Magorian','Father','09987898765');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Cath Kaufer','Mother', '09192969040');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Sheerrie Linton','Sister', '09296004019');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Ben West','Brother', '09124365874');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Dan Gofe','Uncle','09700973926');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Joy Aran','Aunt', '09739700926');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Angel Adriatico','Grandmother','09097073926');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Anton Aleta','Grandfather','09680402919');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Avril Morgan','Mother','09040682919');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Ana Moran','Mother','09564738219');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Thelma Saludo', 'Mother', '09361524567');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Mar Platon', 'Father', '09879623142');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Sam Mangilin', 'Father', '09456278569');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Annie Sorilla', 'Mother', '09126573487');
insert into contactPersonInCaseOfEmergency values (contact_person_id,'Francis Gonzales', 'Mother', '09126573487');
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Rusty Magorian', 'rustymagorian', 'rmagorian', 'male', '1998-01-06', 'rmagorian@up.edu.ph', '09123456789', 1);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Chipo Kaufer', 'chipokaufer', 'ckaufer', 'male', '1997-01-06', 'ckaufer@up.edu.ph', '09987654321', 2);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Shad Linton', 'shadlinton', 'slinton', 'male', '1999-01-06', 'slinton@up.edu.ph', '09102938475', 3);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Harve West', 'harvewest', 'hwest', 'male', '1998-02-07', 'hwest@up.edu.ph', '09564738291', 4);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Dean Gofe', 'deangofe', 'dgofe', 'male', '1997-05-25', 'dgofe@up.edu.ph', '09132435467', 5);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Marijoy Aran', 'marijoyaran', 'maran', 'female', '1998-04-23', 'maran@up.edu.ph', '09988776654', 6);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Alan Adriatico', 'alanadriatico', 'aadriatico', 'male', '1999-12-06', 'aadriactico@up.edu.ph', '09267009739', 7);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Antonia Aleta', 'antoniaaleta', 'aaleta', 'female', '1989-11-06', 'aaleta@up.edu.ph', '09111112234', 8);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Aplasca Morgan', 'aplascamorgan', 'amorgan', 'male', '1994-08-16', 'amorgan@up.edu.ph', '09229933884', 9);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Sam Moran', 'sammoran', 'smoran', 'female', '1994-01-26', 'smoran@up.edu.ph', '09124356785', 10);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Khent Saludo', 'khentsaludo', 'ksaludo', 'male', '1998-11-16', 'ksaludo@up.edu.ph', '09201703170', 11);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Cyryll Platon', 'cyryllplaton', 'cplaton', 'female', '1998-04-24', 'cplaton@up.edu.ph', '09222223145', 12);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Genica Mangilin', 'genicamangilin', 'gmangilin', 'female', '1996-10-03', 'gmangilin@up.edu.ph', '09666555778', 13);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Joyce Sorilla', 'joycesorilla', 'jsorilla', 'female', '1997-07-30', 'jsorilla@up.edu.ph', '09099887765', 14);
insert into user (name, username, password, gender, birthday, email, contact_number, contact_person) values ('Kaye Gonzales', 'kayegonzales', 'kgonzales', 'female', '1998-07-06', 'kgonzales@up.edu.ph', '09236512875', 15);
insert into userAffiliation values(1, 'UPLB ASTROSOC');
insert into userAffiliation values(2, 'UPLB ASTROSOC');
insert into userAffiliation values(3, 'CHORAL ENSEMBLE');
insert into userAffiliation values(4, 'CHORAL ENSEMBLE');
insert into userAffiliation values(5, 'CHORAL ENSEMBLE');
insert into userAffiliation values(6, 'CHORAL ENSEMBLE');
insert into userAffiliation values(7, 'EUYEOMUYEO JOJIK');
insert into userAffiliation values(8, 'EUYEOMUYEO JOJIK');
insert into userAffiliation values(9, 'FILM CIRCLE');
insert into userAffiliation values(10, 'HARMONYA');
insert into userAffiliation values(11, 'HARMONYA');
insert into userAffiliation values(12, 'HARMONYA');
insert into userAffiliation values(13, 'HARMONYA');
insert into userAffiliation values(14, 'HARMONYA');
insert into userAffiliation values(15, 'HARMONYA');
insert into sponsoringInstitution values (institution_id, 'ICS', 'Institute of Computer Science');
insert into sponsoringInstitution values (institution_id, 'CHE', 'College of Human Ecology');
insert into sponsoringInstitution values (institution_id, 'CAS', 'College of Arts and Science');
insert into sponsoringInstitution values (institution_id, 'IBS', 'Institute of Biological Science');
insert into sponsoringInstitution values (institution_id, 'CA', 'College of Agriculture');
insert into sponsoringInstitution values (institution_id, 'CDC', 'College of Development Communication');
insert into sponsoringInstitution values (institution_id, 'CEAT', 'College of Engineering and Agro-industrial Technology');
insert into sponsoringInstitution values (institution_id, 'DEE', 'Department of Electrical Engineering');
insert into sponsoringInstitution values (institution_id, 'IC', 'Institute of Chemistry');
insert into sponsoringInstitution values (institution_id, 'UPLB', 'University of the Philippines Los Banos');
insert into institutionHasAdmin values (1, 1);
insert into institutionHasAdmin values (1, 3);
insert into institutionHasAdmin values (1, 4);
insert into institutionHasAdmin values (2, 5);
insert into institutionHasAdmin values (3, 7);
insert into institutionHasAdmin values (4, 8);
insert into institutionHasAdmin values (5, 10);
insert into institutionHasAdmin values (5, 12);
insert into institutionHasAdmin values (6, 13);
insert into institutionHasAdmin values (7, 15);
insert into venue values (venue_id, 'Baker Hall');
insert into venue values (venue_id, 'Track Oval');
insert into venue values (venue_id, 'Copeland Gym');
insert into venue values (venue_id, 'Smart Araneta Arena');
insert into venue values (venue_id, 'SU Bowling Lanes');
insert into venue values (venue_id, 'Lower Parade Grounds');
insert into venue values (venue_id, 'Philippine Arena');
insert into venue values (venue_id, 'Sta. Rosa Arena');
insert into venue values (venue_id, 'Subic Gym');
insert into venue values (venue_id, 'Mall of Asia Arena');
insert into event values (event_id, 'PALICSIHAN', 'Copeland Gym', '2017-02-13', '2017-02-13', 1);
insert into event values (event_id, 'Palarong UPLB', 'UPLB', '2017-04-01', '2017-04-05', 10);
insert into event values (event_id, 'IClympics', 'Baker Hall', '2017-10-01', '2017-10-02', 9);
insert into event values (event_id, 'AllEEmpics', 'UPLB', '2017-01-15', '2017-01-17', 8);
insert into event values (event_id, 'CEAT Sportsfest', 'UPLB', '2017-03-13', '2017-03-15', 7);
insert into event values (event_id, 'CDClympics', 'Copeland Gym', '2017-02-17', '2017-02-17', 6);
insert into event values (event_id, 'CA Sportfest', 'Copeland Gym', '2017-02-13', '2017-02-13', 5);
insert into event values (event_id, 'IBSlympics', 'Copeland Gym', '2017-02-13', '2017-02-13', 4);
insert into event values (event_id, 'CHElympics', 'Baker Hall', '2017-04-10', '2017-04-11', 2);
insert into event values (event_id, 'PALACASAN', 'UPLB', '2017-02-13', '2017-02-13', 3);
insert into sport values (sport_id, 'Basketball',1);
insert into sport values (sport_id, 'Basketball',2);
insert into sport values (sport_id, 'Volleyball',1);
insert into sport values (sport_id, 'Volleyball',2);
insert into sport values (sport_id, 'Football',2);
insert into sport values (sport_id, 'Scrabble',2);
insert into sport values (sport_id, 'Badminton',1);
insert into sport values (sport_id, 'Badminton',2);
insert into sport values (sport_id, 'Bowling',2);
insert into sport values (sport_id, 'Chess',2);
insert into game values (game_id, '2017-02-13 08:30:00', 5, 10, 'Done', 3, 1);
insert into game values (game_id, '2017-02-13 10:30:00', 5, 10, 'Done', 3, 1);
insert into game values (game_id, '2017-04-01 09:30:00', 5, 10, 'Planned', 3, 2);
insert into game values (game_id, '2017-02-13 08:30:00', 6, 12, 'Done', 3, 3);
insert into game values (game_id, '2017-02-13 10:30:00', 6, 12, 'Done', 3, 3);
insert into game values (game_id, '2017-04-01 08:30:00', 6, 12, 'Planned', 3, 4);
insert into game values (game_id, '2017-02-13 09:30:00', 1, 2, 'Done', 3, 7);
insert into game values (game_id, '2017-04-02 15:30:00', 11, 17, 'Planned', 2, 5);
insert into game values (game_id, '2017-04-05 09:30:00', 1, 2, 'Planned', 3, 10);
insert into game values (game_id, '2017-04-05 12:30:00', 1, 1, 'Done', 5, 9);
insert into team values (team_id, 'Red Team', 1);
insert into team values (team_id, 'White Team', 1);
insert into team values (team_id, 'Yellow Team', 1);
insert into team values (team_id, 'Blue Team', 1);
insert into team values (team_id, 'Green Team', 1);
insert into team values (team_id, 'Red Griffins', 2);
insert into team values (team_id, 'Blue Champs', 2);
insert into team values (team_id, 'Royal White', 2);
insert into team values (team_id, 'Yellow Raptors', 2);
insert into team values (team_id, 'Green Hunter', 2);
insert into teamIsComposedOfUser values (1, 1);
insert into teamIsComposedOfUser values (1, 2);
insert into teamIsComposedOfUser values (1, 3);
insert into teamIsComposedOfUser values (1, 4);
insert into teamIsComposedOfUser values (1, 5);
insert into teamIsComposedOfUser values (2, 6);
insert into teamIsComposedOfUser values (2, 7);
insert into teamIsComposedOfUser values (2, 8);
insert into teamIsComposedOfUser values (3, 9);
insert into teamIsComposedOfUser values (4, 10);
insert into teamPlaysGame values (1, 1);
insert into teamPlaysGame values (2, 1);
insert into teamPlaysGame values (3, 4);
insert into teamPlaysGame values (4, 4);
insert into teamPlaysGame values (5, 5);
insert into teamPlaysGame values (4, 5);
insert into teamPlaysGame values (6, 3);
insert into teamPlaysGame values (7, 3);
insert into teamPlaysGame values (8, 6);
insert into teamPlaysGame values (9, 6);
insert into teamPlaysGame values (10, 8);
insert into teamPlaysGame values (9, 8);
insert into teamPlaysGame values (3, 2);
insert into teamPlaysGame values (4, 2);
insert into teamPlaysGame values (1, 7);
insert into teamPlaysGame values (5, 7);
insert into teamPlaysGame values (10, 9);
insert into teamPlaysGame values (8, 9);
insert into teamPlaysGame values (9, 10);
insert into teamPlaysGame values (7, 10);
insert into teamWinsGame values (1, 1);
insert into teamWinsGame values (3, 4);
insert into teamWinsGame values (5, 5);
insert into teamWinsGame values (6, 3);
insert into teamWinsGame values (8, 6);
insert into teamWinsGame values (10, 8);
insert into teamWinsGame values (3, 2);
insert into teamWinsGame values (1, 7);
insert into teamWinsGame values (10, 9);
insert into teamWinsGame values (9, 10);
insert into sportIsJoinedByUser values (1, 1);
insert into sportIsJoinedByUser values (1, 2);
insert into sportIsJoinedByUser values (1, 3);
insert into sportIsJoinedByUser values (1, 4);
insert into sportIsJoinedByUser values (2, 7);
insert into sportIsJoinedByUser values (3, 5);
insert into sportIsJoinedByUser values (4, 6);
insert into sportIsJoinedByUser values (4, 8);
insert into sportIsJoinedByUser values (5, 7);
insert into sportIsJoinedByUser values (6, 8);
