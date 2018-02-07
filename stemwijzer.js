document.getElementById('subject').innerHTML = 'StemWijzer Tweede Kamer 2017';
document.getElementById('statement').innerHTML = 'Test uw politieke voorkeur aan de hand van 30 stellingen';



function vraag1() {
	var nr = 0;
	var text = document.getElementById('subject');
	text.innerHTML = subjects[nr].title;
	
	var text = document.getElementById('statement');
    text.innerHTML = subjects[nr].statement;

    document.getElementById('option1').innerHTML = 'Eens';
    document.getElementById('option2').innerHTML ='Geen van beide';
    document.getElementById('option3').innerHTML ='Mee oneens'
    document.getElementById('option4').innerHTML ='Sla deze vraag over'

    document.getElementById('option2').style.display ="block";
    document.getElementById('option3').style.display ="block";
    document.getElementById('option4').style.display ="block";
}