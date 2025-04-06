
const zadania = [
    { zadanie: "10% z 50", odpowiedz: 5 },
    { zadanie: "20% z 60", odpowiedz: 12 },
    { zadanie: "20% z 80", odpowiedz: 16 },
    { zadanie: "5% z 100", odpowiedz: 5 },
    { zadanie: "25% z 40", odpowiedz: 10 },
    { zadanie: "30% z 90", odpowiedz: 27 },
    { zadanie: "50% z 120", odpowiedz: 60 },
    { zadanie: "12% z 75", odpowiedz: 9 },
    { zadanie: "18% z 200", odpowiedz: 36 },
    { zadanie: "10% z 150", odpowiedz: 15 },
    { zadanie: "35% z 300", odpowiedz: 105 },
    { zadanie: "40% z 250", odpowiedz: 100 },
    { zadanie: "8% z 400", odpowiedz: 32 },
    { zadanie: "70% z 500", odpowiedz: 350 },
    { zadanie: "20% z 45", odpowiedz: 9 },
    { zadanie: "10% z 350", odpowiedz: 35 },
    { zadanie: "30% z 600", odpowiedz: 180 },
    { zadanie: "20% z 700", odpowiedz: 140 },
    { zadanie: "10% z 800", odpowiedz: 80 },
    { zadanie: "90% z 1000", odpowiedz: 900 },
    { zadanie: "20% z 50", odpowiedz: 10 },
    { zadanie: "20% z 80", odpowiedz: 16 },
    { zadanie: "10% z 90", odpowiedz: 9 },
    { zadanie: "40% z 60", odpowiedz: 24 },
    { zadanie: "15% z 200", odpowiedz: 30 },
    { zadanie: "20% z 150", odpowiedz: 30 },
    { zadanie: "5% z 500", odpowiedz: 25 },
    { zadanie: "30% z 400", odpowiedz: 120 },
    { zadanie: "18% z 250", odpowiedz: 45 },
    { zadanie: "20% z 125", odpowiedz: 25 },
    { zadanie: "80% z 250", odpowiedz: 200 },
    { zadanie: "50% z 180", odpowiedz: 90 },
    { zadanie: "90% z 300", odpowiedz: 270 },
    { zadanie: "25% z 400", odpowiedz: 100 },
    { zadanie: "10% z 200", odpowiedz: 20 },
    { zadanie: "35% z 400", odpowiedz: 140 },
    { zadanie: "10% z 120", odpowiedz: 12 },
    { zadanie: "80% z 400", odpowiedz: 320 },
    { zadanie: "30% z 300", odpowiedz: 90 },
    { zadanie: "10% z 200", odpowiedz: 20 }
];
const zadaniaSredniaTrudnosc = [
    { zadanie: "18% z 150", odpowiedz: 27 },
    { zadanie: "12% z 250", odpowiedz: 30 },
    { zadanie: "25% z 120", odpowiedz: 30 },
    { zadanie: "10% z 400", odpowiedz: 40 },
    { zadanie: "20% z 180", odpowiedz: 36 },
    { zadanie: "15% z 160", odpowiedz: 24 },
    { zadanie: "8% z 625", odpowiedz: 50 },
    { zadanie: "30% z 400", odpowiedz: 120 },
    { zadanie: "5% z 800", odpowiedz: 40 },
    { zadanie: "10% z 250", odpowiedz: 25 },
    { zadanie: "18% z 200", odpowiedz: 36 },
    { zadanie: "25% z 320", odpowiedz: 80 },
    { zadanie: "40% z 180", odpowiedz: 72 },
    { zadanie: "20% z 450", odpowiedz: 90 },
    { zadanie: "15% z 400", odpowiedz: 60 },
    { zadanie: "12% z 350", odpowiedz: 42 },
    { zadanie: "8% z 500", odpowiedz: 40 },
    { zadanie: "30% z 500", odpowiedz: 150 },
    { zadanie: "10% z 600", odpowiedz: 60 },
    { zadanie: "18% z 400", odpowiedz: 72 },
    { zadanie: "25% z 500", odpowiedz: 125 },
    { zadanie: "15% z 300", odpowiedz: 45 },
    { zadanie: "20% z 700", odpowiedz: 140 },
    { zadanie: "12% z 600", odpowiedz: 72 },
    { zadanie: "8% z 350", odpowiedz: 28 },
    { zadanie: "30% z 600", odpowiedz: 180 },
    { zadanie: "40% z 300", odpowiedz: 120 },
    { zadanie: "5% z 1000", odpowiedz: 50 },
    { zadanie: "10% z 700", odpowiedz: 70 },
    { zadanie: "18% z 300", odpowiedz: 54 },
    { zadanie: "25% z 200", odpowiedz: 50 },
    { zadanie: "12% z 450", odpowiedz: 54 },
    { zadanie: "24% z 600", odpowiedz: 120 },
    { zadanie: "15% z 500", odpowiedz: 75 },
    { zadanie: "8% z 800", odpowiedz: 64 },
    { zadanie: "35% z 700", odpowiedz: 210 },
    { zadanie: "10% z 900", odpowiedz: 90 },
    { zadanie: "18% z 500", odpowiedz: 90 },
    { zadanie: "25% z 600", odpowiedz: 150 },
    { zadanie: "40% z 700", odpowiedz: 280 }
];
const zadaniaTrudne = [
    { zadanie: "17% z 850", odpowiedz: 144.5 },
    { zadanie: "36% z 625", odpowiedz: 225 },
    { zadanie: "25% z 1280", odpowiedz: 320 },
    { zadanie: "19% z 950", odpowiedz: 180.5 },
    { zadanie: "22% z 800", odpowiedz: 176 },
    { zadanie: "15% z 1600", odpowiedz: 240 },
    { zadanie: "12% z 1800", odpowiedz: 216 },
    { zadanie: "28% z 850", odpowiedz: 238 },
    { zadanie: "47% z 1300", odpowiedz: 611 },
    { zadanie: "30% z 1300", odpowiedz: 390 },
    { zadanie: "50% z 950", odpowiedz: 475 },
    { zadanie: "22% z 1200", odpowiedz: 264 },
    { zadanie: "35% z 1600", odpowiedz: 560 },
    { zadanie: "19.5% z 2000", odpowiedz: 390 },
    { zadanie: "27% z 1450", odpowiedz: 391.5 },
    { zadanie: "28.5% z 2500", odpowiedz: 712.5 },
    { zadanie: "30% z 1600", odpowiedz: 480 },
    { zadanie: "40% z 900", odpowiedz: 360 },
    { zadanie: "50% z 1200", odpowiedz: 600 },
    { zadanie: "15% z 2400", odpowiedz: 360 },
    { zadanie: "36% z 1300", odpowiedz: 468 },
    { zadanie: "22% z 1000", odpowiedz: 220 },
    { zadanie: "17% z 1200", odpowiedz: 204 },
    { zadanie: "30% z 2000", odpowiedz: 600 },
    { zadanie: "12% z 1600", odpowiedz: 192 },
    { zadanie: "27% z 1800", odpowiedz: 486 },
    { zadanie: "10% z 1500", odpowiedz: 150 },
    { zadanie: "28% z 1200", odpowiedz: 336 },
    { zadanie: "40% z 800", odpowiedz: 320 },
    { zadanie: "50% z 1800", odpowiedz: 900 },
    { zadanie: "35% z 2400", odpowiedz: 840 },
    { zadanie: "30% z 2200", odpowiedz: 660 },
    { zadanie: "15% z 3000", odpowiedz: 450 },
    { zadanie: "17% z 2000", odpowiedz: 340 },
    { zadanie: "25% z 2500", odpowiedz: 625 },
    { zadanie: "36% z 1500", odpowiedz: 540 },
    { zadanie: "22% z 1300", odpowiedz: 286 },
    { zadanie: "40% z 1100", odpowiedz: 440 },
    { zadanie: "50% z 2000", odpowiedz: 1000 }
];

let currentTask = 0;
let correctAnswers = 0;
const totalTasks = 10;
let selectedTasks = [];
let startTime;
let timerInterval;
let seconds;
let milliseconds;
let punkty = 0;
let zadanieStartTime; // Czas rozpoczęcia zadania
//timer
const progressBar = document.getElementById("progress");
let maxczas=30;
let zwyklytryb=false;
let czyPrzetrwanie=false;
let fala=1;


function procentownik(){
document.getElementById('procentownik').style.display = 'none';
document.getElementById('start-btn').style.display = 'inline-block';
document.getElementById('PrzetrwanieProc').style.display = 'inline-block';

}

function rozpocznijQuiz() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('end-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('PrzetrwanieProc').style.display = 'none';
    czyPrzetrwanie=false;
    zwyklytryb=true;
    losujZadania();
    pokazZadanie();
    odliczanieSekund();
}

function PrzetrwanieProc(){

    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('PrzetrwanieProc').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('przetrwanieContainer').style.display = 'block';
    czyPrzetrwanie=true;
    zwyklytryb=false;
    odliczanieSekund();
    losujZadania();
    pokazZadanie();
}


function odliczanieSekund(){
startTime = Date.now(); // Zapisz czas początkowy
if (timerInterval) clearInterval(timerInterval); // Jeśli timer jest już uruchomiony, zresetuj go

zadanieStartTime = Date.now(); // Zapisz czas rozpoczęcia zadania

timerInterval = setInterval(function() {
let elapsedTime = Date.now() - startTime; // Czas w milisekundach
seconds = Math.floor(elapsedTime / 1000);
milliseconds = elapsedTime % 1000;
//timer
if(czyPrzetrwanie){
const progress = (seconds / maxczas) * 100;
progressBar.style.width = (100-progress) + '%';
}
if(zwyklytryb){
document.getElementById('timer').textContent = `${seconds}, ${milliseconds} s`;
}}, 1); 
}

function losujZadania() {
    while (selectedTasks.length < totalTasks) {
        const losowyIndex = Math.floor(Math.random() * zadania.length);
        if (!selectedTasks.includes(zadania[losowyIndex])) {
            selectedTasks.push(zadania[losowyIndex]);
        }
    }
}

function pokazZadanie() {
    const zadanieContainer = document.getElementById('zadanie-container');
    const zadanie = selectedTasks[currentTask];
    zadanieContainer.innerHTML = `
        <p>${zadanie.zadanie}</p>
    `;
    document.getElementById('feedback').innerText = '';
    document.getElementById('odpowiedz').value = '';
}

function sprawdzOdpowiedz() {
const userAnswer = parseFloat(document.getElementById('odpowiedz').value);                                            
const correctAnswer = selectedTasks[currentTask].odpowiedz;
if(czyPrzetrwanie==false){
if (Math.abs(userAnswer - correctAnswer) < 0.01) {
correctAnswers++;
document.getElementById('feedback').innerText = 'Dobra odpowiedź!';                                       
document.getElementById('feedback').style.color = 'green';                                              

// Oblicz punkty w zależności od czasu
let elapsedTaskTime = (Date.now() - zadanieStartTime) / 1000; // Czas w sekundach dla danego zadania

if (elapsedTaskTime <= 5) {
    punkty += 100;
} else if (elapsedTaskTime <= 10) {
    punkty += 75;
} else if (elapsedTaskTime <= 15) {
    punkty += 50;
} else {
    punkty += 25;
}
} else {
document.getElementById('feedback').innerText = 'Błędna odpowiedź!';
document.getElementById('feedback').style.color = 'red';
}
}
if(czyPrzetrwanie){
if (Math.abs(userAnswer - correctAnswer) < 0.01) {

}else{
    setTimeout(pokazWynik, 100);
}
}

currentTask++;
if(currentTask <=5){
fala=1;
document.getElementById('fala').innerText = `FALA: ${fala}`;
}else if(currentTask>5 || currentTask<10){
fala=2;
document.getElementById('fala').innerText = 'FALA: 2';
}
if (currentTask < totalTasks) {
setTimeout(function() {
    pokazZadanie();
    odliczanieSekund(); // Resetuj timer przy nowym zadaniu
}, 100);
} else {
setTimeout(pokazWynik, 100);
}
}

function pokazWynik() {
    document.getEleme
        const zadania = [
            { zadanie: "10% z 50", odpowiedz: 5 },
            { zadanie: "20% z 60", odpowiedz: 12 },
            { zadanie: "20% z 80", odpowiedz: 16 },
            { zadanie: "5% z 100", odpowiedz: 5 },
            { zadanie: "25% z 40", odpowiedz: 10 },
            { zadanie: "30% z 90", odpowiedz: 27 },
            { zadanie: "50% z 120", odpowiedz: 60 },
            { zadanie: "12% z 75", odpowiedz: 9 },
            { zadanie: "18% z 200", odpowiedz: 36 },
            { zadanie: "10% z 150", odpowiedz: 15 },
            { zadanie: "35% z 300", odpowiedz: 105 },
            { zadanie: "40% z 250", odpowiedz: 100 },
            { zadanie: "8% z 400", odpowiedz: 32 },
            { zadanie: "70% z 500", odpowiedz: 350 },
            { zadanie: "20% z 45", odpowiedz: 9 },
            { zadanie: "10% z 350", odpowiedz: 35 },
            { zadanie: "30% z 600", odpowiedz: 180 },
            { zadanie: "20% z 700", odpowiedz: 140 },
            { zadanie: "10% z 800", odpowiedz: 80 },
            { zadanie: "90% z 1000", odpowiedz: 900 },
            { zadanie: "20% z 50", odpowiedz: 10 },
            { zadanie: "20% z 80", odpowiedz: 16 },
            { zadanie: "10% z 90", odpowiedz: 9 },
            { zadanie: "40% z 60", odpowiedz: 24 },
            { zadanie: "15% z 200", odpowiedz: 30 },
            { zadanie: "20% z 150", odpowiedz: 30 },
            { zadanie: "5% z 500", odpowiedz: 25 },
            { zadanie: "30% z 400", odpowiedz: 120 },
            { zadanie: "18% z 250", odpowiedz: 45 },
            { zadanie: "20% z 125", odpowiedz: 25 },
            { zadanie: "80% z 250", odpowiedz: 200 },
            { zadanie: "50% z 180", odpowiedz: 90 },
            { zadanie: "90% z 300", odpowiedz: 270 },
            { zadanie: "25% z 400", odpowiedz: 100 },
            { zadanie: "10% z 200", odpowiedz: 20 },
            { zadanie: "35% z 400", odpowiedz: 140 },
            { zadanie: "10% z 120", odpowiedz: 12 },
            { zadanie: "80% z 400", odpowiedz: 320 },
            { zadanie: "30% z 300", odpowiedz: 90 },
            { zadanie: "10% z 200", odpowiedz: 20 }
        ];
        const zadaniaSredniaTrudnosc = [
            { zadanie: "18% z 150", odpowiedz: 27 },
            { zadanie: "12% z 250", odpowiedz: 30 },
            { zadanie: "25% z 120", odpowiedz: 30 },
            { zadanie: "10% z 400", odpowiedz: 40 },
            { zadanie: "20% z 180", odpowiedz: 36 },
            { zadanie: "15% z 160", odpowiedz: 24 },
            { zadanie: "8% z 625", odpowiedz: 50 },
            { zadanie: "30% z 400", odpowiedz: 120 },
            { zadanie: "5% z 800", odpowiedz: 40 },
            { zadanie: "10% z 250", odpowiedz: 25 },
            { zadanie: "18% z 200", odpowiedz: 36 },
            { zadanie: "25% z 320", odpowiedz: 80 },
            { zadanie: "40% z 180", odpowiedz: 72 },
            { zadanie: "20% z 450", odpowiedz: 90 },
            { zadanie: "15% z 400", odpowiedz: 60 },
            { zadanie: "12% z 350", odpowiedz: 42 },
            { zadanie: "8% z 500", odpowiedz: 40 },
            { zadanie: "30% z 500", odpowiedz: 150 },
            { zadanie: "10% z 600", odpowiedz: 60 },
            { zadanie: "18% z 400", odpowiedz: 72 },
            { zadanie: "25% z 500", odpowiedz: 125 },
            { zadanie: "15% z 300", odpowiedz: 45 },
            { zadanie: "20% z 700", odpowiedz: 140 },
            { zadanie: "12% z 600", odpowiedz: 72 },
            { zadanie: "8% z 350", odpowiedz: 28 },
            { zadanie: "30% z 600", odpowiedz: 180 },
            { zadanie: "40% z 300", odpowiedz: 120 },
            { zadanie: "5% z 1000", odpowiedz: 50 },
            { zadanie: "10% z 700", odpowiedz: 70 },
            { zadanie: "18% z 300", odpowiedz: 54 },
            { zadanie: "25% z 200", odpowiedz: 50 },
            { zadanie: "12% z 450", odpowiedz: 54 },
            { zadanie: "24% z 600", odpowiedz: 120 },
            { zadanie: "15% z 500", odpowiedz: 75 },
            { zadanie: "8% z 800", odpowiedz: 64 },
            { zadanie: "35% z 700", odpowiedz: 210 },
            { zadanie: "10% z 900", odpowiedz: 90 },
            { zadanie: "18% z 500", odpowiedz: 90 },
            { zadanie: "25% z 600", odpowiedz: 150 },
            { zadanie: "40% z 700", odpowiedz: 280 }
        ];
        const zadaniaTrudne = [
            { zadanie: "17% z 850", odpowiedz: 144.5 },
            { zadanie: "36% z 625", odpowiedz: 225 },
            { zadanie: "25% z 1280", odpowiedz: 320 },
            { zadanie: "19% z 950", odpowiedz: 180.5 },
            { zadanie: "22% z 800", odpowiedz: 176 },
            { zadanie: "15% z 1600", odpowiedz: 240 },
            { zadanie: "12% z 1800", odpowiedz: 216 },
            { zadanie: "28% z 850", odpowiedz: 238 },
            { zadanie: "47% z 1300", odpowiedz: 611 },
            { zadanie: "30% z 1300", odpowiedz: 390 },
            { zadanie: "50% z 950", odpowiedz: 475 },
            { zadanie: "22% z 1200", odpowiedz: 264 },
            { zadanie: "35% z 1600", odpowiedz: 560 },
            { zadanie: "19.5% z 2000", odpowiedz: 390 },
            { zadanie: "27% z 1450", odpowiedz: 391.5 },
            { zadanie: "28.5% z 2500", odpowiedz: 712.5 },
            { zadanie: "30% z 1600", odpowiedz: 480 },
            { zadanie: "40% z 900", odpowiedz: 360 },
            { zadanie: "50% z 1200", odpowiedz: 600 },
            { zadanie: "15% z 2400", odpowiedz: 360 },
            { zadanie: "36% z 1300", odpowiedz: 468 },
            { zadanie: "22% z 1000", odpowiedz: 220 },
            { zadanie: "17% z 1200", odpowiedz: 204 },
            { zadanie: "30% z 2000", odpowiedz: 600 },
            { zadanie: "12% z 1600", odpowiedz: 192 },
            { zadanie: "27% z 1800", odpowiedz: 486 },
            { zadanie: "10% z 1500", odpowiedz: 150 },
            { zadanie: "28% z 1200", odpowiedz: 336 },
            { zadanie: "40% z 800", odpowiedz: 320 },
            { zadanie: "50% z 1800", odpowiedz: 900 },
            { zadanie: "35% z 2400", odpowiedz: 840 },
            { zadanie: "30% z 2200", odpowiedz: 660 },
            { zadanie: "15% z 3000", odpowiedz: 450 },
            { zadanie: "17% z 2000", odpowiedz: 340 },
            { zadanie: "25% z 2500", odpowiedz: 625 },
            { zadanie: "36% z 1500", odpowiedz: 540 },
            { zadanie: "22% z 1300", odpowiedz: 286 },
            { zadanie: "40% z 1100", odpowiedz: 440 },
            { zadanie: "50% z 2000", odpowiedz: 1000 }
        ];
        
        let currentTask = 0;
        let correctAnswers = 0;
        const totalTasks = 10;
        let selectedTasks = [];
        let startTime;
let timerInterval;
let seconds;
let milliseconds;
let punkty = 0;
let zadanieStartTime; // Czas rozpoczęcia zadania
//timer
const progressBar = document.getElementById("progress");
let maxczas=30;
let zwyklytryb=false;
let czyPrzetrwanie=false;
let fala=1;


function procentownik(){
    document.getElementById('procentownik').style.display = 'none';
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('PrzetrwanieProc').style.display = 'inline-block';
    
}

        function rozpocznijQuiz() {
            document.getElementById('start-btn').style.display = 'none';
            document.getElementById('end-container').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            document.getElementById('PrzetrwanieProc').style.display = 'none';
            czyPrzetrwanie=false;
            zwyklytryb=true;
            losujZadania();
            pokazZadanie();
            odliczanieSekund();
        }

        function PrzetrwanieProc(){

            document.getElementById('start-btn').style.display = 'none';
            document.getElementById('PrzetrwanieProc').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            document.getElementById('przetrwanieContainer').style.display = 'block';
            document.getElementById('progress-bar').style.display = 'block';
            czyPrzetrwanie=true;
            zwyklytryb=false;
            odliczanieSekund();
            losujZadania();
            pokazZadanie();
        }


        function odliczanieSekund() {
            startTime = Date.now(); // Zapisz czas początkowy
            if (timerInterval) clearInterval(timerInterval); // Jeśli timer jest już uruchomiony, zresetuj go
        
            zadanieStartTime = Date.now(); // Zapisz czas rozpoczęcia zadania
        
            timerInterval = setInterval(function() {
                let elapsedTime = Date.now() - startTime; // Czas w milisekundach
                seconds = Math.floor(elapsedTime / 1000);
                milliseconds = elapsedTime % 1000;
        
                // Odświeżanie paska postępu co 10 ms
                if(czyPrzetrwanie){
                    const progress = (seconds / maxczas) * 100;
                    progressBar.style.width = (100 - progress) + '%';
                }
        
                // Wyświetlanie czasu w formacie sekund i milisekund
                if(zwyklytryb){
                    document.getElementById('timer').textContent = `${seconds}, ${milliseconds} s`;
                }
            }, 10); // Ustawienie interwału na 10 ms
        }

        function losujZadania() {
            while (selectedTasks.length < totalTasks) {
                const losowyIndex = Math.floor(Math.random() * zadania.length);
                if (!selectedTasks.includes(zadania[losowyIndex])) {
                    selectedTasks.push(zadania[losowyIndex]);
                }
            }
        }

        function pokazZadanie() {
            const zadanieContainer = document.getElementById('zadanie-container');
            const zadanie = selectedTasks[currentTask];
            zadanieContainer.innerHTML = `
                <p>${zadanie.zadanie}</p>
            `;
            document.getElementById('feedback').innerText = '';
            document.getElementById('odpowiedz').value = '';
        }

        function sprawdzOdpowiedz() {
    const userAnswer = parseFloat(document.getElementById('odpowiedz').value);                                            
    const correctAnswer = selectedTasks[currentTask].odpowiedz;
    if(czyPrzetrwanie==false){
    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        correctAnswers++;
        document.getElementById('feedback').innerText = 'Dobra odpowiedź!';                                       
        document.getElementById('feedback').style.color = 'green';                                              
        
        // Oblicz punkty w zależności od czasu
        let elapsedTaskTime = (Date.now() - zadanieStartTime) / 1000; // Czas w sekundach dla danego zadania

        if (elapsedTaskTime <= 5) {
            punkty += 100;
        } else if (elapsedTaskTime <= 10) {
            punkty += 75;
        } else if (elapsedTaskTime <= 15) {
            punkty += 50;
        } else {
            punkty += 25;
        }
    } else {
        document.getElementById('feedback').innerText = 'Błędna odpowiedź!';
        document.getElementById('feedback').style.color = 'red';
    }
    }
    if(czyPrzetrwanie){
        if (Math.abs(userAnswer - correctAnswer) < 0.01) {

        }else{
            setTimeout(pokazWynik, 100);
        }
    }

    currentTask++;
    if(currentTask <=5){
        fala=1;
        document.getElementById('fala').innerText = `FALA: ${fala}`;
    }else if(currentTask>5 || currentTask<10){
        fala=2;
        document.getElementById('fala').innerText = 'FALA: 2';
    }
        if (currentTask < totalTasks) {
        setTimeout(function() {
            pokazZadanie();
            odliczanieSekund(); // Resetuj timer przy nowym zadaniu
        }, 100);
    } else {
        setTimeout(pokazWynik, 100);
    }
}

        function pokazWynik() {
            document.getElementById('quiz-container').style.display = 'none';
            const finalResult = document.getElementById('final-result');
            if(zwyklytryb){
            finalResult.innerHTML = `Liczba poprawnych odpowiedzi: ${correctAnswers} / 10
            Liczba zdobytych punktów ${punkty}`;
        }
            document.getElementById('end-container').style.display = 'block';
            if(czyPrzetrwanie){
                document.getElementById('przetrwanieContainer').style.display = 'none';
                finalResult.innerHTML = `Liczba przetrwanych fal: ${fala} `;
 
            }
        }

        function powrotDoStronyStartowej() {
            currentTask = 0;
            correctAnswers = 0;
            selectedTasks = [];
            document.getElementById('start-btn').style.display = 'inline-block';
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('end-container').style.display = 'none';
        }ntById('quiz-container').style.display = 'none';
    const finalResult = document.getElementById('final-result');
    if(zwyklytryb){
    finalResult.innerHTML = `Liczba poprawnych odpowiedzi: ${correctAnswers} / 10
    Liczba zdobytych punktów ${punkty}`;
}
    document.getElementById('end-container').style.display = 'block';
    if(czyPrzetrwanie){
        document.getElementById('przetrwanieContainer').style.display = 'none';
        finalResult.innerHTML = `Liczba przetrwanych fal: ${fala} `;

    }
}

function powrotDoStronyStartowej() {
    currentTask = 0;
    correctAnswers = 0;
    selectedTasks = [];
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('end-container').style.display = 'none';
}