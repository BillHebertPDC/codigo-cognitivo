drop database if exists codigoCognitivo;
create database codigoCognitivo;
use codigoCognitivo;
CREATE TABLE codigos (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  codigo TEXT,
  dificuldade varchar(45),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE conteudos (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  dificuldade varchar(45),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table usuario (
id int auto_increment primary key,
nome varchar(45),
email varchar(255) unique,
senha varchar(255),
interesse varchar(15),
nivelAcesso enum("adm","comun") default "comun"
);

create table quizz (
id int auto_increment primary key,
fkUsuario int,
pontuacao int,
constraint foreign key (fkUsuario) references usuario(id)
);

select * from usuario;
select * from codigos;
select * from conteudos;
select * from quizz;

select max(pontuacao) from quizz where fkUsuario = 1;
insert into quizz (fkUsuario,pontuacao) values (1,80);
-- insert into codigos(nome, codigo,dificuldade)
-- update codigos set nome = 2, codigo="sadfasdf", dificuldade="1" where id = 1;
