
// Business
var spiritAnimal = function(agetest, timetest) {
  $("#turtle, #hippo, #wolf, #chupa").hide();

  if (agetest){
    if (agetest <= 19 && timetest === "day" ) {
      $("#turtle").show();
    } else if (agetest <= 19 && timetest === "night" ) {
        $("#wolf").show();
    } else if ((agetest <= 40 && agetest >= 20) && timetest === "day"){
        $("#hippo").show();
    } else if ((agetest <=40 && agetest >=20) && timetest === "night"){
        $("#chupa").show();
    } else if (agetest > 40 && timetest === "day"){
        $("#hippo").show();
    } else{
        $("#wolf").show();
    }
  } else {
  alert("Please Enter Your Age!");
}
};

//Front end

$(document).ready(function(){
    $("#main form").submit(function(event){
      var ageInput = parseInt($("#age").val());
      var dayInput = $("input:radio[name=time]:checked").val();
      spiritAnimal(ageInput, dayInput);

    event.preventDefault();
  });
});
