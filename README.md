Create a Sequelize application that connects to a Clever Cloud database 
Create both a Books and an Author model and the following routes/controllers 

Book 
POST - adds a book to the DB 
GET - gets all books 
GET - gets a book by author 
PUT - dynamically updates a book on title 
DELETE - deletes a single book by title 
DELETE - deletes all books 

Author 
POST - adds an author to the DB 
GET - gets a single author by author name and retrieves associated books 

Create an association between Books and Author, where 
Author has many Book, 
Book belongs to Author 

Test all routes with Thunder Client

Stretch Goal 

Create a Genre model with the following fields; 
Genre: type - string 

Create an association between Genre and Books; 
Genre has many Book 
Book belongs to genre 

Genre
POST - adds an genre to the db
GET - gets a single genre  by genre name and retrieves associated books 
