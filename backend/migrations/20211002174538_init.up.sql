-- Add up migration script here

CREATE EXTENSION pgcrypto;

CREATE TABLE authors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    second_name VARCHAR(100) NOT NULL 
);

CREATE TABLE books (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author_id UUID REFERENCES authors(id) NOT NULL
);