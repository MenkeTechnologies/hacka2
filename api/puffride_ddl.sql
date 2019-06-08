use puffride;

DROP TABLE IF EXISTS `PHONE`;
CREATE TABLE `PHONE`
(
    `PHONE_ID`     int(11)      NOT NULL AUTO_INCREMENT,
    `COUNTRY_CODE` int(2) UNSIGNED,
    `AREA_CODE` int(2) UNSIGNED,
    `DIGITS` int(10) UNSIGNED,
    primary key (`PHONE_ID`)

) ENGINE = InnoDB;

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
SET character_set_client = utf8mb4;
CREATE TABLE `USER`
(
    `USER_ID`             int(11)      NOT NULL AUTO_INCREMENT,
    `NAME`                varchar(150) NOT NULL,
    `PROFILE_PICTURE`     varchar(250) NOT NULL,
    `PW_HASH`             varchar(400) NOT NULL,
    `EMAIL`               varchar(400) NOT NULL,
    `BIO`                 varchar(400) NOT NULL,
    `EMAIL_VERIFIED_FLAG` varchar(1)   NOT NULL DEFAULT 'N',
    `PHONE_ID`            int(11)      NOT NULL,
    `CREATE_DATE`         datetime     NOT NULL,
    `UPDATE_DATE`         timestamp    NULL     DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`USER_ID`),
    FOREIGN KEY (`PHONE_ID`) REFERENCES `PHONE` (`PHONE_ID`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE = InnoDB
  AUTO_INCREMENT = 215
  DEFAULT CHARSET = latin1;
