#!C:\xampp\perl\bin\perl.exe

print "Content-type: text/html\n\n";

use DBI;
use CGI;
use Data::Dumper;
use strict;
use JSON;

# Connect to DB
my $driver = "mysql"; 
my $database = "appointmentsystem";
my $dsn = "DBI:$driver:database=$database";
my $userid = "root";
my $password = "";

my $dbh = DBI->connect($dsn, $userid, $password ) or die $DBI::errstr;

my $parameters = CGI->new;
my $searchValue = $parameters->param('searchValue');

# Convert To String
$searchValue = "" . $searchValue;

my $isEmpty = ( $searchValue eq "" ? "yes" : "no" );

my $statements;

if ( $isEmpty eq "yes" )
{	
    $statements = qq(SELECT id, date, time, description from appointments;);
}
else
{
    $statements = qq(SELECT id, date, time, description from appointments where description LIKE ? ;);
}

my $preparedStatements = $dbh->prepare($statements);

if ( $isEmpty eq "no" ) {
    $preparedStatements->bind_param( 1, "%" . $searchValue . "%" );
}

my $result = $preparedStatements->execute() or die $DBI::errstr;

if ( $result < 0 ) {
    print $DBI::errstr;
}

my $json = JSON->new->utf8;

my @resultArray;

while ( my @row = $preparedStatements->fetchrow_array() ) {
    my %json_hash = (
        "ID" => $row[0],
        "Date"        => $row[1],
        "Time"        => $row[2],
        "Description"        => $row[3]
    );

    push(@resultArray, \%json_hash);
}

print $json->encode( \@resultArray ) . "\n";

$dbh->disconnect();


