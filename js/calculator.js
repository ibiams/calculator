$( ".character" ).click( function (){
  var str = $( "#screen" ).val() + $( this ).text();
  var patt = new RegExp("^\\D|\\D\\D|\\d+\\.\\d+\\.");

  if (!patt.test(str))
    $("#screen").val(str);
});

$( "#backspace" ).click(function(){
  var str = $( "#screen" ).val();
  $( "#screen" ).val( str.substring(0, str.length-1) );
});

$( "#clean" ).click(function(){
  $( "#screen" ).val("");
});

$( "#result" ).click(function(){
  var expression = $( "#screen" ).val();
  $( "#screen" ).val(math.eval(expression));
});

$( "#document" ).keyup(function(){
  $( "#screen" ).val("");
  console.log("");
});
