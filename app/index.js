const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store
let workouts = [
  { id: 1, date: '2023-10-01', name: 'Upper Body', exercises: [
    { name: 'Bench Press', sets: 3, reps: 10, weight: 135 },
    { name: 'Overhead Press', sets: 3, reps: 12, weight: 65 }
  ]},
  { id: 2, date: '2023-10-03', name: 'Lower Body', exercises: [
    { name: 'Squat', sets: 3, reps: 8, weight: 185 },
    { name: 'Deadlift', sets: 3, reps: 5, weight: 225 }
  ]}
];

// API Routes
app.get('/api/workouts', (req, res) => {
  res.json(workouts);
});

app.post('/api/workouts', (req, res) => {
  const workout = {
    id: Date.now(),
    ...req.body
  };
  workouts.push(workout);
  res.status(201).json(workout);
});

app.delete('/api/workouts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  workouts = workouts.filter(w => w.id !== id);
  res.status(204).send();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Gym App listening on http://0.0.0.0:${PORT}`);
});
