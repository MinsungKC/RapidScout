/* script.js */

// Example Predictions Data
const predictions = [
    { match: "Match 1", winner: "Team A", confidence: "75%" },
    { match: "Match 2", winner: "Team B", confidence: "60%" },
];

// Populate Predictions
const predictionContainer = document.querySelector('.prediction-cards');
predictions.forEach(prediction => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<h4>${prediction.match}</h4><p>Winner: ${prediction.winner}</p><p>Confidence: ${prediction.confidence}</p>`;
    predictionContainer.appendChild(div);
});

// Example Schedule Data
const scheduleData = [
    { time: "10:00 AM", match: "Match 1", teams: "Team A vs Team B" },
    { time: "10:30 AM", match: "Match 2", teams: "Team C vs Team D" },
];

// Populate Schedule
const scheduleBody = document.querySelector('#schedule-body');
scheduleData.forEach(event => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${event.time}</td><td>${event.match}</td><td>${event.teams}</td>`;
    scheduleBody.appendChild(tr);
});

// Notes Functionality
const notesForm = document.querySelector('#notes-form');
const notesList = document.querySelector('#notes-list');

notesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const robotName = document.querySelector('#robot-name').value;
    const note = document.querySelector('#note').value;

    const li = document.createElement('li');
    li.textContent = `${robotName}: ${note}`;
    notesList.appendChild(li);

    notesForm.reset();
});
