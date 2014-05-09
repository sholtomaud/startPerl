#!/usr/bin/perl -w

use strict;
use warnings;
use JSON qw(encode_json);

use HydDLLp;
use Cwd;
require 'hydlib.pl';
require 'hydtim.pl';


  my $dllp = HydDllp->New();
  my %mastdict = $dllp->get_db_info(
    { 'function' => 'get_db_info',
      'version'  => 3,
      'params'   => {
        'table_name'  => 'company',
        'return_type' => 'hash',
        'filter_values' => {
          'companyid' => '03539'
        }
      }
    },
    1900
  );
  $dllp->Close();

  chomp(%mastdict);
  #Prt('-T',"MASTDICT [".HashDump(\%mastdict)."]\n");  

  my $out = *STDOUT;

#print $out HashDump(\%mastdict);
#print $out \%mastdict;

print $out encode_json(\%mastdict);

#print $out "Hello World\n" for (1..10);

1;
