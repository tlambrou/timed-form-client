# Timer Form Platform

This application is for Strive Talent's coding challenge 03/29/18.  The goal is to build a timed form where users answer questions within a time limit displayed in a counter to them.



## Server

This application was built with express, sequelize, and postgresql.

### Resources

- Users
- Form
- Questions
- Answers

#### Schema

- User 
	- id
	- name
- Form
	- id
	- name
- Question
	- id
	- text
	- formId
- Answer
	- id	
	- text
	- questionId
	- userId

#### Routes

##### Forms
GET `/forms/:id`
*Should return the form with all nest questions*

##### Answers
POST `/questions/:questionId/users/:userId/answers/`
*Should create an answer for a given question and user*

##### User
POST `/users/:id`
*Should create a user*
GET `/users/:id`
*Should get a users info*

### Client Application

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).