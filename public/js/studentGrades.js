var name = "John Doe"
var firstUnitName = "Mathemathics"
var secondunitName = "Literature"
var firstUnitGrade = 7.5
var secondUnitGrade = 11.2

window.onload = function () {
    document.getElementById("student").innerHTML = name;
// TODO: Fazer o segundo cartão, são funções repetidas?
    let card = ""
    card += "<div id='grade-card'>"
    card += "<div id='grade-card-substring'><h1>" + firstUnitName.substring(0,2) + "</h1></div>"
    card += "<div id='unit-data'><h2>" + firstUnitName + "</h2>" + "<h4> Grade: " + firstUnitGrade + "</h4>";
    card += "</div>"
    document.getElementById("grade-card-line").innerHTML = card;
}


/* <div id="grade-card-line">

<div id="grade-card">

    <div id="grade-card-substring"><h1>Ma</h1></div>

    <div id="unit-data">
        <h2>Mathemathics</h2>
        <h3>7,5</h3>
    </div>

</div>

</div> */