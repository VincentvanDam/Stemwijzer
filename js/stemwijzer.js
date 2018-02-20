var nr = 0;
var choices = [];
var scores = [
	{name: "VVD", points: 0},
	{name: "CDA", points: 0},
	{name: "PVV", points: 0},
	{name: "D66", points: 0},
	{name: "GroenLinks", points: 0},
	{name: "SP", points: 0},
	{name: "PvdA", points: 0},
	{name: "ChristenUnie", points: 0},
	{name: "Partij voor de Dieren", points: 0},
	{name: "SGP", points: 0},
	{name: "DENK", points: 0},
	{name: "Forum voor Democratie", points: 0},
	{name: "Lokaal in de kamer", points: 0},
	{name: "OndernemersPartij", points: 0},
	{name: "VNL", points: 0},
	{name: "Nieuwe Wegen", points: 0},
	{name: "De Burger Beweging", points: 0},
	{name: "Piratenpartij", points: 0},
	{name: "Artikel 1", points: 0},
	{name: "Libertarische Partij", points: 0}
];


var startBtn = document.getElementById('start');
var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var nxtBtn = document.getElementById("next");
var agrBtn = document.getElementById("agree");
var disBtn = document.getElementById("disagree");
var midBtn = document.getElementById("midway");
var prevBtn = document.getElementById("prev");
var scoreResults = document.getElementById('result');


subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

startBtn.addEventListener("click", start);

function start() {
        var start = document.getElementById('start').style.display = "none";
        main.style.display = "block";
        var aside = document.getElementById('aside').style.display = "none";
        var start = document.getElementById('start');
        start.innerHTML = 'start';
   }

document.getElementById("prev").addEventListener("click", function(){
    nr--;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    choices.pop();
    console.log(choices, nr);
});

document.getElementById("next").addEventListener("click", function(){
    nr++;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement
    console.log(choices, nr);
    results(); 
});

document.getElementById("agree").addEventListener("click", function(){
    nr++;
    choices.push("pro");
    console.log(choices, nr);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    if(nr === subjects.length){
        results();
    }
});

document.getElementById("disagree").addEventListener("click", function(){
    nr++;
    choices.push("contra");
    console.log(choices);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
});

document.getElementById("midway").addEventListener("click", function(){
    nr++;
    choices.push("ambivalent");
    console.log(choices, nr);
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;

});

function results(){
	subject.innerHTML = "Dit zijn je resultaten:";
	var resultTxt = "";
		statement.innerHTML = "";
	for (i = 0; i < scores.length; i++) { 
    	resultTxt += scores[i].name + "-" + scores[i].points + "<br>";
	}
	scoreResults.innerHTML = resultTxt;

};





