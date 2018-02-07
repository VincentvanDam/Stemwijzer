var nr = 0;

scores =[{party: 'pvv', total: 0},{party: 'vvd', total: 0}];

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
    nr++;
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    console.dir(scores);
}

var disagree = function(event){
    contra = true;
    nr++
    subject.innerHTML = subjects[nr].title;
    statement.innerHTML = subjects[nr].statement;
    console.dir(scores);
}
