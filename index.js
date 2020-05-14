

// veranderende kleuren van kladblokjes

//var timer = window.setInterval(changeColour, 1000);
//var notesA = $(".order-last");
//var notesB = $(".order-second");
//var notesC = $(".order-first");
var notes = $(".col");

//function changeColour(){
//colors = ["#e8f044", "#323edd","#90303d", "#235952", "#ed8240", "#4d089a", "#dc2ade"];
//colorsB = ["#dc2ade", "#90303d","#323edd", "#4d089a", "#e8f044", "#ed8240", "#235952"];
//colorsC = ["#4d089a", "#235952", "#ed8240", "#dc2ade",  "#e8f044", "#323edd", "#90303d"];
//var n = Math.floor(Math.random() * colors.length);
//notesA.css("background-color", colorsC[n]);
//.css("background-color", colors[n]);
//notesC.css("background-color", colorsB[n]);
//}

//verwijdert de kladblokjes 1 voor 1 door erop te klikken
notes.click(function(){
  $(this).addClass("col-removed");
});

//verwijdert het gele kladblok
$(".title-container").click(function(){
$(this).addClass("col-removed");
});

//Maakt het grote spook zichtbaarder.
//$(".grootspook").click(function(){
  //$(this).addClass("spookgroot");
//$(".spookgroot").removeClass("grootspook");
//});

//$(".grootspook").click(function(){
//$(".focusblock").toggle();
//});


$(".grootspook").click(function(){
  //$(".focusblock").removeClass("focusblock").addClass("focusblock-on");
  $("focusblock").fadeTo(2500, 0.9, function() {
  });
    $(this).fadeTo( 2500 , 0.9, function() {
    });
  //setTimeout(function(){
  //$(".grootspook").removeClass("grootspook").addClass("spookgroot");
//}, 1500);
});

//var taakone = $
//$("#button-addon2").on."click", "myFunction()"{


//$("#button-addon2").click(function(){
//  $("label").add("taakone");
//});


//$(".spookgroot").click(function() {
  //  $(".focusblock-on").fadeIn( "slow");
//});
