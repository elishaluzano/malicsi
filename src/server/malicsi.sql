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
    password varchar(72) NOT NULL,
    gender ENUM('female', 'male') NOT NULL,
    birthday date NOT NULL,
    email varchar(50),
    contact_number varchar(11),
    contact_person int default NULL,
    profile_pic text,
    isOverallAdmin int default 0,
    constraint user_username_uk unique key (username),
    constraint user_contact_person_fk foreign key (contact_person) references contactPersonInCaseOfEmergency(contact_person_id)
    ON DELETE SET NULL
);

CREATE TABLE userAffiliation (
    user_no int NOT NULL,
    affiliation varchar(50) NOT NULL,
    CONSTRAINT userAffiliation_user_no_fk FOREIGN KEY (user_no) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE sponsoringInstitution (
    institution_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    description varchar(1000) NOT NULL,
    picture text default NULL,
    constraint sponsoringInstitution_name_uk unique key (name)
);

CREATE TABLE institutionHasAdmin (
    institution_no int NOT NULL,
    user_no int NOT NULL,
    CONSTRAINT institutionHasAdmin_pk PRIMARY KEY (institution_no, user_no),
    CONSTRAINT institutionHasAdmin_user_no_fk FOREIGN KEY (user_no) REFERENCES user (user_id) ON DELETE CASCADE,
    CONSTRAINT institutionHas_institution_no_fk FOREIGN KEY (institution_no) REFERENCES sponsoringInstitution (institution_id)
    ON DELETE CASCADE
);

CREATE TABLE venue (
    venue_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    constraint venue_name_uk unique key (name)
);

CREATE TABLE event (
    event_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    event_title varchar(50) NOT NULL,
    venue_id_key int default NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    picture text,
    institution_id_key int NOT NULL,
    constraint event_event_title_uk unique key (event_title),
    constraint event_institution_key_fk foreign key(institution_id_key) references sponsoringInstitution(institution_id) ON DELETE CASCADE,
    constraint event_venue_key_fk foreign key(venue_id_key) references venue(venue_id) ON DELETE SET NULL
);

CREATE TABLE sport (
    sport_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(20) NOT NULL,
    constraint sport_name_uk unique key (name)
);

CREATE TABLE game (
    game_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    time datetime NOT NULL,
    min_num_of_players int NOT NULL,
    max_num_of_players int NOT NULL,
    status ENUM('PENDING','FINISHED','ONGOING'),
    venue int,
    event_id int NOT NULL,
    sport_id int NOT NULL,
    CONSTRAINT game_venue_fk FOREIGN KEY (venue) REFERENCES venue (venue_id) ON DELETE SET NULL,
    CONSTRAINT game_event_id_fk FOREIGN KEY (event_id) REFERENCES event (event_id) ON DELETE CASCADE,
    CONSTRAINT game_sport_id_fk FOREIGN KEY (sport_id) REFERENCES sport (sport_id) ON DELETE CASCADE
);

CREATE TABLE eventHasSport (
    event_id int NOT NULL,
    sport_id int NOT NULL,
    CONSTRAINT eventHasSport_pk PRIMARY KEY (event_id, sport_id),
    CONSTRAINT eventHasSport_event_id_fk FOREIGN KEY (event_id) REFERENCES event (event_id) ON DELETE CASCADE,
    CONSTRAINT eventHasSport_sport_id_fk FOREIGN KEY (sport_id) REFERENCES sport (sport_id) ON DELETE CASCADE
);

CREATE TABLE team (
    team_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(20) NOT NULL,
    picture text default NULL,
    event_id_key int NOT NULL,
    CONSTRAINT team_event_id_key_fk FOREIGN KEY (event_id_key) REFERENCES event (event_id) ON DELETE CASCADE
);

CREATE TABLE teamIsComposedOfUser (
    team_player_id int NOT NULL,
    user_player_id int NOT NULL,
    CONSTRAINT teamIsComposedOfUser_pk PRIMARY KEY (team_player_id, user_player_id),
    CONSTRAINT isComposedOf_team_player_id_fk FOREIGN KEY (team_player_id) REFERENCES team (team_id) ON DELETE CASCADE,
    CONSTRAINT isComposedOf_user_player_id_fk FOREIGN KEY (user_player_id) REFERENCES user (user_id) ON DELETE CASCADE
);

CREATE TABLE teamPlaysGame (
    team_id_play int NOT NULL,
    game_id_play int NOT NULL,
    record ENUM('WIN','LOSE','DRAW') default NULL,
    score float default 0,
    CONSTRAINT teamPlaysGame_pk PRIMARY KEY (team_id_play, game_id_play),
    CONSTRAINT plays_game_id_play_fk FOREIGN KEY (game_id_play) REFERENCES game (game_id) ON DELETE CASCADE,
    CONSTRAINT plays_team_id_play_fk FOREIGN KEY (team_id_play) REFERENCES team (team_id) ON DELETE CASCADE
);

CREATE TABLE sportIsJoinedByUser (
  user_id int NOT NULL,
  sport_id int NOT NULL,
  CONSTRAINT sportIsJoinedByUser_pk PRIMARY KEY (user_id, sport_id),
  CONSTRAINT sportIsJoinedByUser_user_id_fk FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
  CONSTRAINT sportIsJoinedByUser_sport_id_fk FOREIGN KEY (sport_id) REFERENCES sport(sport_id) ON DELETE CASCADE
);

CREATE TABLE userlog (
  log_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int NOT NULL,
  institution_id int default NULL,
  action varchar(100) NOT NULL,
  activity_time timestamp NOT NULL
);

CREATE TABLE gameUpdateLog (
    gameUpdateLog_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    team_id int NOT NULL,
    game_id int NOT NULL,
    score float default 0,
    time timestamp NOT NULL,
    CONSTRAINT gameUpdateLog_team_id_fk FOREIGN KEY (team_id) REFERENCES team (team_id) ON DELETE CASCADE,
    CONSTRAINT gameUpdateLog_game_id_fk FOREIGN KEY (game_id) REFERENCES game (game_id) ON DELETE CASCADE
);

delimiter //
create procedure gameAdd(in team_id int, game_id int)
BEGIN
insert into teamPlaysGame (team_id_play, game_id_play) values (team_id, game_id);
insert into gameUpdateLog (team_id, game_id) values (team_id, game_id);
END;
//

create procedure gameUpdate(in team_id int, game_id int, point float)
BEGIN
insert gameUpdateLog (team_id, game_id, score) values (team_id, game_id, point);
update teamPlaysGame set score = score + point where team_id_play = team_id and game_id_play = game_id;
END;
//

create procedure editGameLog(in id int, team_id int, game_id int, point float, prev_score float)
BEGIN
update gameUpdateLog set score = point, team_id = team_id, game_id = game_id where gameUpdateLog_id = id;
update teamPlaysGame set score = (score - prev_score) + point where team_id_play = team_id and game_id_play = game_id;
END;
//

create procedure editGameLogNewTeam(in id int, team_id int, prev_team_id int, game_id int, point float, prev_score float)
BEGIN
update gameUpdateLog set score = point, team_id = team_id, game_id = game_id where gameUpdateLog_id = id;
update teamPlaysGame set score = score - prev_score where team_id_play = prev_team_id and game_id_play = game_id;
update teamPlaysGame set score = score + point where team_id_play = team_id and game_id_play = game_id;
END;
//

create procedure deleteGameLog(in id int, team_id int, game_id int, prev_score float)
BEGIN
delete from gameUpdateLog where gameUpdateLog_id = id;
update teamPlaysGame set score = (score - prev_score) where team_id_play = team_id and game_id_play = game_id;
END;
//

create procedure setRecord(in id int, team1_id int, team2_id int)
BEGIN
update teamPlaysGame set record = "WIN" where team_id_play = team1_id and game_id_play = id;
update teamPlaysGame set record = "LOSE" where team_id_play = team2_id and game_id_play = id;
END;
//

create procedure setDrawRecord(in id int)
BEGIN
update teamPlaysGame set record = "DRAW" where game_id_play = id;
END;
//

create procedure openRecord(in id int)
BEGIN
update teamPlaysGame set record = NULL where game_id_play = id;
END;
//

create trigger deleteGameAfterDeleteTeam
    before delete on team
    for each row
BEGIN
    delete from game where game_id in (select game_id_play from team join teamPlaysGame on team.team_id = teamPlaysGame.team_id_play where team.team_id = OLD.team_id);
END;
//

create trigger setPicture
    before insert on user
    for each row
BEGIN
    if (new.gender = "female") then
        set new.profile_pic = "images/default-girl.png";
    else
        set new.profile_pic = "images/default-boy.png";
    end if;
END
//

-- create trigger setGameStatus
--     before insert on game
--     for each row
-- BEGIN
--     if (new.time <= now()) then
--         set new.status = "ONGOING";
--     else
--         set new.status = "PENDING";
--     end if;
-- END
-- //
delimiter ;
