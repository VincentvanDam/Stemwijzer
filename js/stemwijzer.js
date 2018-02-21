var nr = 0;
var i = 0;
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
    var nxtBtn = document.getElementById('next').style.display = "inline-block";
	var agrBtn = document.getElementById('agree').style.display = "inline-block";
	var disBtn = document.getElementById('disagree').style.display = "inline-block";
	var midBtn = document.getElementById('midway').style.display = "inline-block";
});

document.getElementById("next").addEventListener("click", function(){
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement 
    nr++;
    console.log(choices, nr);
    results();
});

document.getElementById("agree").addEventListener("click", function(){
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    nr++;
    choices.push("pro");
    console.log(choices);
    results();
});

document.getElementById("disagree").addEventListener("click", function(){
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    nr++;
    choices.push("contra");
    console.log(choices);

    results();
});

document.getElementById("midway").addEventListener("click", function(){
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    nr++;
    choices.push("ambivalent");
    console.log(choices, nr);

    results();

});

function results(){
    text = "<ul>";

    if (nr == subjects.length) { 
        subject.innerHTML = "Dit is je uitkomst:";
        statement.innerHTML = "";
        text = "<ul>";

        for (i = 0; i < scores.length; i++) {
            text += "<li>" + scores[i].name + "-" + scores[i].points + "</li>";
        }

        text += "</ul>";
        document.getElementById("result").innerHTML = text;

        var nxtBtn = document.getElementById('next').style.display = "none";
        var agrBtn = document.getElementById('agree').style.display = "none";
        var disBtn = document.getElementById('disagree').style.display = "none";
        var midBtn = document.getElementById('midway').style.display = "none";
        
    }
};





