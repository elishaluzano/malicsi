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
insert into sport values (sport_id, 'Basketball');
insert into sport values (sport_id, 'Volleyball');
insert into sport values (sport_id, 'Soccer');
insert into sport values (sport_id, 'Scrabble');
insert into sport values (sport_id, 'Badminton');
insert into sport values (sport_id, 'Bowling');
insert into sport values (sport_id, 'Chess');
insert into sport values (sport_id, 'Swimming');
insert into sport values (sport_id, 'Table Tennis');
insert into sport values (sport_id, 'Track and Field');
insert into game values (game_id, '2017-02-13 08:30:00', 5, 10, 'FINISHED', 3, 1, 1);
insert into game values (game_id, '2017-02-13 10:30:00', 5, 10, 'FINISHED', 3, 1, 1);
insert into game values (game_id, '2017-04-01 09:30:00', 5, 10, 'PENDING', 3, 2, 1);
insert into game values (game_id, '2017-02-13 08:30:00', 6, 12, 'FINISHED', 3, 1, 2);
insert into game values (game_id, '2017-02-13 10:30:00', 6, 12, 'FINISHED', 3, 1, 2);
insert into game values (game_id, '2017-04-01 08:30:00', 6, 12, 'PENDING', 3, 2, 2);
insert into game values (game_id, '2017-02-13 09:30:00', 1, 2, 'FINISHED', 3, 1, 5);
insert into game values (game_id, '2017-04-02 15:30:00', 11, 17, 'PENDING', 2, 2, 3);
insert into game values (game_id, '2017-04-05 09:30:00', 1, 2, 'PENDING', 3, 2, 7);
insert into game values (game_id, '2017-04-05 12:30:00', 1, 1, 'PENDING', 5, 2, 6);
insert into eventHasSport values (1, 1);
insert into eventHasSport values (2, 1);
insert into eventHasSport values (1, 2);
insert into eventHasSport values (2, 2);
insert into eventHasSport values (2, 3);
insert into eventHasSport values (2, 4);
insert into eventHasSport values (1, 5);
insert into eventHasSport values (2, 5);
insert into eventHasSport values (2, 6);
insert into eventHasSport values (2, 7);
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
call gameAdd(1,1);
call gameUpdate(1,1,60);
call gameAdd(2,1);
call gameUpdate(2, 1, 58);
call gameAdd(3,4);
call gameUpdate(3, 4, 25);
call gameAdd(4,4);
call gameUpdate(4, 4, 20);
call gameAdd(5,5);
call gameUpdate(5, 5, 25);
call gameAdd(4,5);
call gameUpdate(4, 5, 20);
call gameAdd(6,3);
call gameAdd(7,3);
call gameAdd(8,6);
call gameAdd(9,6);
call gameAdd(10,8);
call gameAdd(9,8);
call gameAdd(3,2);
call gameUpdate(3, 2, 50);
call gameAdd(4,2);
call gameUpdate(4, 2, 21);
call gameAdd(1,7);
call gameUpdate(1, 7, 10);
call gameAdd(5,7);
call gameUpdate(5, 7, 7);
call gameAdd(10,9);
call gameAdd(8,9);
call gameAdd(9,10);
call gameAdd(7,10);
update teamPlaysGame set record='WIN' where team_id_play=1 and game_id_play=1;
update teamPlaysGame set record='LOSE' where team_id_play=2 and game_id_play=1;
update teamPlaysGame set record='WIN' where team_id_play=3 and game_id_play=4;
update teamPlaysGame set record='LOSE' where team_id_play=4 and game_id_play=4;
update teamPlaysGame set record='WIN' where team_id_play=5 and game_id_play=5;
update teamPlaysGame set record='LOSE' where team_id_play=4 and game_id_play=5;
update teamPlaysGame set record='WIN' where team_id_play=3 and game_id_play=2;
update teamPlaysGame set record='LOSE' where team_id_play=4 and game_id_play=2;
update teamPlaysGame set record='WIN' where team_id_play=1 and game_id_play=7;
update teamPlaysGame set record='LOSE' where team_id_play=5 and game_id_play=7;
insert into sportIsJoinedByUser values (1, 1);
insert into sportIsJoinedByUser values (1, 2);
insert into sportIsJoinedByUser values (1, 3);
insert into sportIsJoinedByUser values (1, 4);
insert into sportIsJoinedByUser values (1, 7);
insert into sportIsJoinedByUser values (2, 5);
insert into sportIsJoinedByUser values (2, 6);
insert into sportIsJoinedByUser values (2, 8);
insert into sportIsJoinedByUser values (3, 7);
insert into sportIsJoinedByUser values (4, 8);
