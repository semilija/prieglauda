let row=1;

let entry = document.getElementById('entry');
entry.addEventListener('click', displayDetails);

function displayDetails() {
    let rusis = document.getElementById('suoRusis').value;
    let lytis = document.getElementById('suoLytis').value;
    let dydis = document.getElementById('suoDydis').value;
    let amzius = document.getElementById('suoAmzius').value;
    let vieta = document.getElementById('suoVieta').value;

    if(!rusis || !lytis || !dydis || !amzius || !vieta) {
        alert('Iveskite visus reikiamus laukus');
        return;
    }

    let display = document.getElementById('display');

    let newRow = display.insertRow(row);

    let cell1=newRow.insertCell(0);
    let cell2=newRow.insertCell(1);
    let cell3=newRow.insertCell(2);
    let cell4=newRow.insertCell(3);
    let cell5=newRow.insertCell(4);

    cell1.innerHTML = rusis;
    cell2.innerHTML = lytis;
    cell3.innerHTML = dydis;
    cell4.innerHTML = amzius;
    cell5.innerHTML = vieta;

    row++;
}