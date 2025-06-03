drop database if exists codigoCognitivo;
create database codigoCognitivo;
use codigoCognitivo;
create table usuario (
id int auto_increment primary key,
nome varchar(45),
email varchar(255) unique,
senha varchar(255),
nivelAcesso enum("adm","comun") default "comun"
);
CREATE TABLE posts (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255),
  descricao TEXT,
  tooltip TEXT,
  status ENUM('draft', 'published', 'archived'),
  visibility ENUM('public', 'private'),
  version VARCHAR(10),
  duration INT,
  metadata_author VARCHAR(255),
  metadata_level ENUM('Basico', 'Intermediario', 'Avancado'),
  fkCreator int,
  constraint foreign key (fkCreator) references usuario(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE feedback (
  post_id BIGINT PRIMARY KEY,
  like_count INT DEFAULT 0,
  dislike_count INT DEFAULT 0,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE content_items (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  post_id BIGINT,
  titulo VARCHAR(255),
  descricao TEXT,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);




CREATE TABLE arquivos (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  post_id BIGINT,
  tipo ENUM('audio', 'video', 'quiz'),
  url TEXT,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE tags (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100)
);

CREATE TABLE post_tags (
  post_id BIGINT,
  tag_id BIGINT,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE TABLE searches (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  usuario_id BIGINT,
  termo VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post_children (
  parent_id BIGINT,
  child_id BIGINT,
  ordem INT,
  PRIMARY KEY (parent_id, child_id),
  FOREIGN KEY (parent_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (child_id) REFERENCES posts(id) ON DELETE CASCADE
);



