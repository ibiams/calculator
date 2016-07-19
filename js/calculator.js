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

// $('#screen').on('keypress', function(){
//     console.log("Saving value " + $(this).val());
//     $(this).data('val', $(this).val());
//
// });

// $( "#screen" ).keyup(function(){
//     var prev = $(this).data('val');
//     var current = $(this).val();
//     console.log("Prev value " + prev);
//     console.log("New value " + current);
//
//   var str = $( "#screen" ).val() + $( this ).text();
//   var patt = new RegExp("^\\D|\\D\\D|\\d+\\.\\d+\\.");
//
//   if (!patt.test(current))
//     $("#screen").val(current);
//   else {
//     $("#screen").val(prev);
//   }
// });
