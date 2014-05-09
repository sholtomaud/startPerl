var util    = require('util'),
    spawn   = require('child_process').spawn,
    carrier = require('carrier'),
    pl_proc = spawn('perl', ['hello.pl']),
    my_carrier;

my_carrier = carrier.carry(pl_proc.stdout);

//console.log(JSON.stringify(pl_proc.stdout));



//my_carrier.on('reader', function(line) {
  // Do stuff...
  //console.log('Perl STDOUT: [' + line + ']');
//})




var exec = require('child_process').exec;
/*
exec("hydllpx.exe", function(err, stdout, stderr) {
    
    console.log("px");
})    

exec.stdin.write( 

{ 'function' : 'get_db_info',
      'version'  : 3,
      'params'   : {
        'table_name'  : 'company',
        'return_type' : 'hash',
      }
    }
);
exec.stdout.on('data', function(data){
  console.log('data');
  console.log(data);
});
*/

/*
exec("perl hello.pl", function(err, stdout, stderr) {
    
    console.log("stdout");
    console.log(stdout);
    
    console.log("stdout");
    //var obj = JSON.parse(stdout);//{ first: "John", last: "Doe" };
    var obj = stdout;//{ first: "John", last: "Doe" };
    console.log(obj);
    // Visit non-inherited enumerable keys
    
    
    Object.keys(obj).forEach(function(key) {
        console.log(key, obj[key]);
    });
    
    
    
});
*/

var myObj = {};
myObj.list = function(callback){
  var result;
  exec("perl hello.pl", function (error, stdout, stderr) {
     callback(JSON.parse(stdout));
  });
  // No return at all!
}


// Instead of taking a return we pass a callback
// which receives the value and carries on our computation.
myObj.list(function (stdout) {
  console.log('Ta da : '+ stdout);
  
  console.log(stdout['03539'].type);
   
});

/*
  for (var key in myObj) {
     var obj = myObj[key];
     console.log(key, myObj[key]);
  }


Object.keys(myObj).forEach(function(key) {
        console.log(key, myObj[key]);
    });
*/




