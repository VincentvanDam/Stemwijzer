var nr = 0;

scores =[{party: 'pvv', total: 0},
         {party: 'vvd', total: 0},
         {party: 'cda', total: 0},
         {party: 'd66', total: 0},
         {party: 'groenlinks', total: 0},
         {party: 'sp', total: 0},
         {party: 'pvda', total: 0},
         {party: 'christenunie', total: 0},
         {party: 'partij voor de dieren', total: 0},
         {party: 'sgp', total: 0},
         {party: 'denk', total: 0},
         {party: 'forum voor democratie', total: 0},
         {party: 'lokaal in de kamer', total: 0},
         {party: 'ondernemerspartij', total: 0},
         {party: 'vnl', total: 0},
         {party: 'nieuwe wegen', total: 0},
         {party: 'de burger beweging', total: 0},
         {party: 'piratenpartij', total: 0},
         {party: 'artikel 1', total: 0},
         {party: 'liberatische partij', total: 0}]
         

var subject = document.getElementById('subject');
var statement = document.getElementById('statement');
var next = document.getElementById('skip');
var back = document.getElementById('back');
var agree = document.getElementById('agree')
var disagree = document.getElementById('disagree')
var pro;
var contra;

subject.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;

var next = function(event){
    nr++;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
}

var prev = function(event){
    nr--;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
}

var agree = function(event){
    pro = true;
    if (parties.position === true){
        scores.total +1;
    }
    nr++;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    console.dir(subjects.parties.position);
}

var disagree = function(event){
    contra = true;
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    console.dir(scores);
}
