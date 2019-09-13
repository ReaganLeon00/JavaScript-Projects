function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vote_Age()  {
    var Age, Can_Vote;
    Age= document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young ":"You are old enough";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote";
}
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML= count()
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}



