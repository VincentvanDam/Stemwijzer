var nr = 0;

var scores = {
    'PVV': 0,
    'SP': 0,
    'D66': 0,
    'GroenLinks': 0,
    'Partij voor de Dieren"': 0,
    '50Plus': 0,
    'VNL': 0,
    'Nieuwe Wegen': 0,
    'Forum voor Democratie': 0,
    'De Burger Beweging': 0,
    'Vrijzinnige Partij': 0,
    'Piratenpartij': 0,
    'Libertarische Partij': 0,
    'Lokaal in de Kamer': 0,
    'VVD': 0,
    'PvdA': 0,
    'CDA': 0,
    'ChristenUnie': 0,
    'SGP': 0,
    'OndernemersPartij': 0,
    'DENK': 0,
    'Artikel 1': 0
};

var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var nxtBtn = document.getElementById("next");
var agrBtn = document.getElementById("agree");
var disBtn = document.getElementById("disagree");
var midBtn = document.getElementById("midway");
var prevBtn = document.getElementById("prev");


subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

console.log(scores);


document.getElementById("prev").addEventListener("click", function(){
    nr--;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
});

document.getElementById("next").addEventListener("click", function(){
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement
});

document.getElementById("agree").addEventListener("click", function(){
    nr++;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    subjects[nr].parties.forEach(function(party){
        if (party.position === "pro") {
            scores[party.name]++;
        }
    });
    console.log(scores);
});

document.getElementById("disagree").addEventListener("click", function(){
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    subjects[nr].parties.forEach(function(party){
        if (party.position === "contra") {
              scores[party.name]++;
          }
      });
      console.log(scores);
     });

document.getElementById("midway").addEventListener("click", function(){
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;

    subjects[nr].parties.forEach(function(party){
        if (party.position === "ambivalent") {
            scores[party.name]++;        
        }    
    });
    console.log(scores);
});


function results(){
    if (nr === 7){
        console.log("Ik ben klaar");
    }
}
