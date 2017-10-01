PROJECT DESCRIPTION:

I've used MySql as database, Apache as web server and GIT for source control.
I implemented all project requirements. I hope, i covered every requirements.

Folder structure
-- cgi : It contains backend and perl files
-- database: It contains database dump file
-- public: Public folder from browser
-- script: It contains main script file
-- style: It contains main style css file

demo.pdf - The project demo pictures

INSTALLATION GUIDE:

1. There is sql dump file inside database folder. 
Create database that named appointmentsystem in Mysql (otherwise db name should changed in CGI).
Then import this file to MySQL. And it has some demo data. 

2. Copy all file to your Apache server htdocs (public folder). 
Apache server must configured to support perl and CGI. I skip this part.
Then access to public folder from browser.

3. Enjoy :)