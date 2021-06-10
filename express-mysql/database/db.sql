CREATE DATABASE delivery;

USE delivery;

-- TABLE USER
-- all pasword wil be encrypted using SHA2
CREATE TABLE negocio (
  id INT(11) NOT NULL,
  nombre VARCHAR(16) NOT NULL,
  rubro VARCHAR(60) NOT NULL
);

ALTER TABLE negocio
  ADD PRIMARY KEY (id);

ALTER TABLE negocio
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE negocio;

INSERT INTO negocio (id, nombre, rubro)
  VALUES (1, 'Pollito con papas', 'Polleria');

SELECT * FROM negocio;

-- LINKS TABLE
CREATE TABLE tiendas (
  id INT(11) NOT NULL,
  direccion VARCHAR(150) NOT NULL,
  metodo_pago VARCHAR(255) NOT NULL,
  negocio_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY(negocio_id) REFERENCES negocio(id)
);

ALTER TABLE tiendas
  ADD PRIMARY KEY (id);

ALTER TABLE tiendas
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE tiendas;