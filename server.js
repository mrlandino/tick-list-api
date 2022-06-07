const express = require('express');
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Tick List';
app.locals.climbs = [
    { id: '1', name: 'Throttle', grade: 5, location: "Boone, NC", completed: true},
    { id: '2', name: 'Mighty Mouse', grade: 5, location: "Boone, NC", completed: true},
    { id: '3', name: 'Sunday Survice', grade: 11, location: "Boone, NC", completed: false},
    { id: '4', name: 'Jason Lives', grade: 9, location: "Boone, NC", completed: false},
    { id: '5', name: 'Reed Roof', grade: 5, location: "Boone, NC", completed: true},
    { id: '6', name: 'Druid Roof', grade: 7, location: "Boone, NC", completed: true},
    { id: '7', name: 'Magic Woman', grade: 7, location: "Boone, NC", completed: true},
    { id: '8', name: 'CigArete', grade: 7, location: "Boone, NC", completed: true},
    { id: '9', name: 'Throttle', grade: 5, location: "Boone, NC", completed: true},
    { id: '10', name: 'Macheesemo', grade: 8, location: "Boone, NC", completed: false},
    { id: '11', name: 'Zen Master', grade: 8, location: "Boone, NC", completed: true},
    { id: '11', name: 'Hot Rod', grade: 8, location: "Boone, NC", completed: false},
    { id: '12', name: 'Masochist', grade: 9, location: "Boone, NC", completed: false},
    { id: '13', name: 'Have Guns Will Travel', grade: 7, location: "Boone, NC", completed: false},
    { id: '14', name: 'Tupac', grade: 6, location: "Boone, NC", completed: false},
    { id: '15', name: 'Full Throttle', grade: 11, location: "Boone, NC", completed: false},
    { id: '16', name: 'Sherman Photo', grade: 7, location: "RockTown, GA", completed: false},
    { id: '17', name: 'Nose Candy', grade: 6, location: "RockTown, GA", completed: true},
    { id: '18', name: 'Vagina', grade: 7, location: "RockTown, GA", completed: false},
    { id: '19', name: 'The Comet', grade: 7, location: "RockTown, GA", completed: false},
    { id: '20', name: 'Golden Harvest', grade: 10, location: "RockTown, GA", completed: false},
    { id: '21', name: 'Orb', grade: 8, location: "RockTown, GA", completed: false},
    { id: '22', name: 'Helecopter Traverse', grade: 8, location: "RockTown, GA", completed: false},
    { id: '23', name: 'Lab Rats', grade: 6, location: "RockTown, GA", completed: false},
    { id: '24', name: 'Iron Claw Sit', grade: 9, location: "RockTown, GA", completed: false},
    { id: '25', name: 'The Flame', grade: 7, location: "Boone, NC", completed: false},
    { id: '26', name: 'Crimping Nickles', grade: 5, location: "Boone, NC", completed: true},
    { id: '27', name: 'Project Plow Share', grade: 8, location: "Boone, NC", completed: false},
    { id: '28', name: 'Klamper Sit', grade: 8, location: "Boone, NC", completed: false},
    { id: '29', name: 'Eye Candy', grade: 9, location: "Boone, NC", completed: false},
    { id: '30', name: 'Senderella', grade: 8, location: "Boone, NC", completed: false}
  ];

app.get('/', (request, response) => {
  response.send('Climbers Rule');
});

app.get('/api/v1/climbs', (request, response) => {
    const climbs = app.locals.climbs;
  
    response.json({climbs});
  });

app.get('/api/v1/climbs/:id', (request, response) => {
    const { id } = request.params;
    const climb = app.locals.climbs.find(climb => climb.id === id);
  
    if (!climb) {
        response.sendStatus(404).send('not found');
    } else {
        response.status(200).json(climb);
    }
});

app.post('/api/v1/climbs', (request, response) => {
    const id = (app.locals.climbs.length + 1);
    const { name, grade, location, completed } = request.body;
  
    app.locals.climbs.push({ id, name, grade, location, completed });
  
    response.status(201).json({ id, name, grade, location, completed });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});