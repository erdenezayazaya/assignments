#!C:\xampp\perl\bin\perl.exe
print "Content-type: text/html\n\n";

use CGI::Carp;    
use CGI;
use DBI;
use strict;

my $driver = "mysql"; 
my $database = "appointmentsystem";
my $dsn = "DBI:$driver:database=$database";
my $userid = "root";
my $password = "";
my $dbh = DBI->connect($dsn, $userid, $password ) or die $DBI::errstr;

my $cgi = CGI->new();   

my $date = $cgi->param('date');
my $time = $cgi->param('time');
my $description = $cgi->param('description');

$description = "" . $description;

my $statements = "INSERT INTO appointments(date, time, description)
           VALUES ('" . $date . "','" . $time . "' ,'" . $description . "');";

my $sth = $dbh->prepare($statements);

my $rv = $dbh->do($statements) or die $DBI::errstr;

$dbh->disconnect();

print"<META HTTP-EQUIV=refresh CONTENT=\"1;URL=http://localhost/assignments/public/index.html\">\n";