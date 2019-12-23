/*$(function(){
  alert("hi..!");
});*/

$(function(){
  $("#complete").hide();
  $("h3").shuffleString({
    color : "aqua",
    done : function(){
      $("#complete").show();
    }
  });

});
