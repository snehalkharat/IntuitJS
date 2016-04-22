(function(){
    console.log('in conf.js');
    requirejs.config({
       // "baseUrl": "/amd",
        "paths": {
            "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min"
        }
    });

    require(["mymodule"], function(mm) { 
        console.log("mm seems to be with us " + mm.stuff)
    
    });
    
    setTimeout(function() {
        require(["jquery", "mymodule"], function($, mymodule) {
            console.log('jquery loaded, my code firing up');
            $('h1').text('Greetings, so nice to see you!');
            console.log("mymodule has stuff: " + mymodule.stuff);
            console.log("mymodule.doStuff returned: " + mymodule.doStuff());
        });
    }, 2000);
}());