function testClick() {
    console.log("check sanity")

    $( "#testButton" ).css( "border", "3px solid red" );
}


function notify() {
    console.log("sanity check")
    console.log($('#testDiv').css('background-color'));
    if ($('#testDiv').css('background-color') == "rgb(178, 103, 50)"){
        $('#testDiv').css("background-color", "rgb(215, 141, 90)");
    }else{
        $('#testDiv').css("background-color", "rgb(178, 103, 50)");
    }

}
$('#testButton').on( "click", notify );
