CREATE TABLE Person (
  PersonId int NOT NULL AUTO_INCREMENT,
  FirstName varchar(100) NOT NULL,
  LastName varchar(100) NOT NULL,
  PersonStatusId int(11) NOT NULL,
  PRIMARY KEY (`PersonId`)
);

CREATE TABLE PersonStatus (
  PersonStatusId int NOT NULL,
  StatusDescription varchar(100) NOT NULL,
  PRIMARY KEY (`PersonStatusId`)
);

