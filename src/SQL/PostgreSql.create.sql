




CREATE TABLE Подразделения (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СписокНаМедосм (
 primaryKey UUID NOT NULL,
 НомерДок INT NULL,
 Дата TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПриказМЗР (
 primaryKey UUID NOT NULL,
 НомерПункта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ИндНапрМедосм (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 НомерДок INT NULL,
 Сотрудники UUID NOT NULL,
 МедУчреждение UUID NOT NULL,
 Организация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 IDДолжности INT NULL,
 Подразделения UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 НомерПаспорта INT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 СерияПаспорта INT NULL,
 Пол VARCHAR(7) NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 IDСотрудника INT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE МедУчреждение (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Телефон INT NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE КлассВредФакт (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 ИНН INT NULL,
 КПП INT NULL,
 ОГРН INT NULL,
 Телефон INT NULL,
 Почта VARCHAR(255) NULL,
 ЮрАдрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВреднФактПроиз (
 primaryKey UUID NOT NULL,
 КлассВредФакт UUID NOT NULL,
 ИндНапрМедосм UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE КонтингентСотр (
 primaryKey UUID NOT NULL,
 Женщины INT NULL,
 Всего INT NULL,
 До21Года INT NULL,
 Мужчины INT NULL,
 Периодичность VARCHAR(14) NULL,
 КлассВредФакт UUID NOT NULL,
 ПриказМЗР UUID NOT NULL,
 Подразделения UUID NOT NULL,
 СписокНаМедосм UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ИндНапрМедосм ADD CONSTRAINT FK20a8f60f24ecf1312034d6f16173fae085ec14c4 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index20a8f60f24ecf1312034d6f16173fae085ec14c4 on ИндНапрМедосм (Сотрудники); 

 ALTER TABLE ИндНапрМедосм ADD CONSTRAINT FK6cc1d0cb17524e2424c5f9f614706adcf33eb56d FOREIGN KEY (МедУчреждение) REFERENCES МедУчреждение; 
CREATE INDEX Index6cc1d0cb17524e2424c5f9f614706adcf33eb56d on ИндНапрМедосм (МедУчреждение); 

 ALTER TABLE ИндНапрМедосм ADD CONSTRAINT FKc3784e68fe84a9e81628efbad02143cd922514cb FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Indexc3784e68fe84a9e81628efbad02143cd922514cb on ИндНапрМедосм (Организация); 

 ALTER TABLE Должности ADD CONSTRAINT FKbaf25b30b9c997e7a8572b1ef6e53e9664de01c3 FOREIGN KEY (Подразделения) REFERENCES Подразделения; 
CREATE INDEX Indexbaf25b30b9c997e7a8572b1ef6e53e9664de01c3 on Должности (Подразделения); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE ВреднФактПроиз ADD CONSTRAINT FK20f2385b38b2f40160187ac54459302c6b5e6b88 FOREIGN KEY (КлассВредФакт) REFERENCES КлассВредФакт; 
CREATE INDEX Index20f2385b38b2f40160187ac54459302c6b5e6b88 on ВреднФактПроиз (КлассВредФакт); 

 ALTER TABLE ВреднФактПроиз ADD CONSTRAINT FKb2fffb0a3a3cd77983471dfe55919764dd869120 FOREIGN KEY (ИндНапрМедосм) REFERENCES ИндНапрМедосм; 
CREATE INDEX Indexb2fffb0a3a3cd77983471dfe55919764dd869120 on ВреднФактПроиз (ИндНапрМедосм); 

 ALTER TABLE КонтингентСотр ADD CONSTRAINT FK82ab184d6bfeb4094608d77046949a94d11d8973 FOREIGN KEY (КлассВредФакт) REFERENCES КлассВредФакт; 
CREATE INDEX Index82ab184d6bfeb4094608d77046949a94d11d8973 on КонтингентСотр (КлассВредФакт); 

 ALTER TABLE КонтингентСотр ADD CONSTRAINT FK58bf7ab5a207f491ff38de45984590fec180bb41 FOREIGN KEY (ПриказМЗР) REFERENCES ПриказМЗР; 
CREATE INDEX Index58bf7ab5a207f491ff38de45984590fec180bb41 on КонтингентСотр (ПриказМЗР); 

 ALTER TABLE КонтингентСотр ADD CONSTRAINT FK7e3a243410b9e8e6d17739776c12c40bd04d8e37 FOREIGN KEY (Подразделения) REFERENCES Подразделения; 
CREATE INDEX Index7e3a243410b9e8e6d17739776c12c40bd04d8e37 on КонтингентСотр (Подразделения); 

 ALTER TABLE КонтингентСотр ADD CONSTRAINT FKdb209b7be8aef4a507a16a9ce7390ac6180d05fc FOREIGN KEY (СписокНаМедосм) REFERENCES СписокНаМедосм; 
CREATE INDEX Indexdb209b7be8aef4a507a16a9ce7390ac6180d05fc on КонтингентСотр (СписокНаМедосм); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

