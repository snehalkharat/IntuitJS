define(["jquery"], function($) {
    console.log('loading mymodule...');
    $('p').text('mymodule doing stuff!');
    return {
        stuff: "This is data stuff",
        doStuff: function() {
            return Math.random()*100;
        }
    };
});