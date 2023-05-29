CREATE DATABASE JobHub;

-- Tabela Users
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(100),
    Role VARCHAR(20)
);

-- Tabela Companies
CREATE TABLE Companies (
    CompanyID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Location VARCHAR(100),
    Industry VARCHAR(100)
);

-- Tabela Jobs
CREATE TABLE Jobs (
    JobID SERIAL PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    SkillsRequired TEXT,
    Location VARCHAR(100),
    Salary INTEGER,
    CompanyID INTEGER REFERENCES Companies(CompanyID),
    RecruiterID INTEGER REFERENCES Users(UserID)
);

-- Tabela Applications
CREATE TABLE Applications (
    ApplicationID SERIAL PRIMARY KEY,
    UserID INTEGER REFERENCES Users(UserID),
    JobID INTEGER REFERENCES Jobs(JobID),
    ApplicationDate DATE,
    Status VARCHAR(20)
);

-- Dodanie kluczy obcych i kaskadowego usuwania
ALTER TABLE Jobs
    ADD CONSTRAINT FK_Jobs_Companies FOREIGN KEY (CompanyID) REFERENCES Companies(CompanyID) ON DELETE CASCADE,
    ADD CONSTRAINT FK_Jobs_Users FOREIGN KEY (RecruiterID) REFERENCES Users(UserID) ON DELETE CASCADE;

ALTER TABLE Applications
    ADD CONSTRAINT FK_Applications_Users FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    ADD CONSTRAINT FK_Applications_Jobs FOREIGN KEY (JobID) REFERENCES Jobs(JobID) ON DELETE CASCADE;