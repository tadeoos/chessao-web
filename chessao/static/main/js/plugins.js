// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function testClick() {
    console.log("check sanity")

    $( "#testButton" ).css( "border", "3px solid red" );
}


function notify() {
    console.log("sanity check")
    console.log($('#testDiv').css('background-color'));
    if $('#testDiv').css('background-color') == black){
        $('#testDiv').css("background-color", "white");
    }else{
        $('#testDiv').css("background-color", "black");
    }

}
$('#testButton').on( "click", notify );
