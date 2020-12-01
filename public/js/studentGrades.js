var name = "John Doe"
var firstUnitName = "Mathemathics"
var secondunitName = "Literature"
var firstUnitGrade = 7.5
var secondUnitGrade = 11.2

var units = [firstUnitName, secondunitName]
var grades = [firstUnitGrade, secondUnitGrade]


window.onload = function () {
    var i;
    document.getElementById("student").innerHTML = name;
    let card = ""

    for (i = 0; i < units.length; i++){
        card += "<div class='grade-card'>"
        card += "<div class='grade-card-substring'><h1>" + units[i].substring(0,2) + "</h1></div>"
        card += "<div class='unit-data'><h2>" + units[i] + "</h2>" + "<h4> Grade: " + grades[i] + "</h4>";
        card += "</div> </div>";
        console.log(card)
        
        document.getElementById("grade-card-line").innerHTML = card

    }
    
}



// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }


// window.onload = function () {
//     document.getElementById("student").innerHTML = name;
//     let card = ""
//     card += "<div class='grade-card'>"
//     card += "<div class='grade-card-substring'><h1>" + firstUnitName.substring(0,2) + "</h1></div>"
//     card += "<div class='unit-data'><h2>" + firstUnitName + "</h2>" + "<h4> Grade: " + firstUnitGrade + "</h4>";
//     card += "</div> </div>";
//     document.getElementById("grade-card-line").innerHTML = card + card
// }
