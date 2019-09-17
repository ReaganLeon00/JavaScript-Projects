function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin","Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += Instrument[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "black";
    Musical_Instrument.price = "$700";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + "was" + Musical_Instrument.price;
}

var X=82;
document.write(X);
{
    let X=33;
    document.write("<br>"+X);
}
document.write("<br>"+X);

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a  " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();