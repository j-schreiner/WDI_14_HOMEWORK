create database movies_db;

create table movies (
  id serial primary key,
  title varchar(300),
  year varchar(50),
  genre varchar(150),
  plot varchar(800),
  actors varchar(300),
  poster_url varchar(300)
);

insert into movies(title, year, genre, plot, actors) values ('title', 'year', 'genre', 'plot', 'actors');

