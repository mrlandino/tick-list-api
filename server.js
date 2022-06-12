const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Tick List';
app.locals.climbs = [
    { id: '0', name: 'Throttle', grade: 5, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/HUdjfUDeB50"},
    { id: '1', name: 'Mighty Mouse', grade: 5, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/CVsG-cT0bPk"},
    { id: '2', name: 'Sunday Survice', grade: 11, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/FrBCev1KUME"},
    { id: '3', name: 'Jason Lives', grade: 9, location: "Boone, NC", completed: false},
    { id: '4', name: 'Doug Reed Roof', grade: 5, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/drWqSW33TyA"},
    { id: '5', name: 'Druid Roof', grade: 7, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/i2unNre4xO0"},
    { id: '6', name: 'Black Magic Woman', grade: 7, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/em3yzMvxkLM"},
    { id: '7', name: 'CigArete', grade: 7, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/TvUIbnyIN_U"},
    { id: '8', name: 'Instinct', grade: 8, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/IIGKHidFReo"},
    { id: '9', name: 'Macheesemo', grade: 8, location: "Boone, NC", completed: false},
    { id: '10', name: 'Zen Master', grade: 8, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/6E1bhQurjkc"},
    { id: '11', name: 'Masochist', grade: 9, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/tFAItk54VmY"},
    { id: '12', name: 'Have Guns Will Travel', grade: 7, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/dJBE4lD3xwg"},
    { id: '13', name: 'Tupac', grade: 6, location: "Boone, NC", completed: false},
    { id: '14', name: 'Full Throttle', grade: 11, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/T7ZfAHJBjac"},
    { id: '15', name: 'Sherman Photo', grade: 7, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/m_HyK51_qCE"},
    { id: '16', name: 'Nose Candy', grade: 6, location: "RockTown, GA", completed: true, video: "https://www.youtube.com/embed/cvMBpFqdwcg"},
    { id: '17', name: 'Vagina', grade: 8, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/Y54AJfCuQZg"},
    { id: '18', name: 'The Comet', grade: 7, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/-mZbI3mTiqQ"},
    { id: '19', name: 'Golden Harvest', grade: 10, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/fRupjE5b_y4"},
    { id: '20', name: 'Orb', grade: 8, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/hSwZMkcGP8s"},
    { id: '21', name: 'Helecopter Traverse', grade: 8, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/tLWYhox8AOE"},
    { id: '22', name: 'Lab Rats', grade: 6, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/ED70qbTTDAY"},
    { id: '23', name: 'Iron Claw Sit', grade: 9, location: "RockTown, GA", completed: false, video: "https://www.youtube.com/embed/gC3eg-JofDg"},
    { id: '24', name: 'The Flame', grade: 7, location: "Boone, NC", completed: false},
    { id: '25', name: 'Crimping Nickles', grade: 5, location: "Boone, NC", completed: true, video: "https://www.youtube.com/embed/jy1u8ySv-Sg"},
    { id: '26', name: 'Project Plow Share', grade: 8, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/gMm2EKsIGwo"},
    { id: '27', name: 'Klamper Sit', grade: 8, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/fl5oh04YgUM"},
    { id: '28', name: 'Ebonics', grade: 6, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/Wk0JBW8zOWo"},
    { id: '29', name: 'Senderella Sit', grade: 12, location: "Boone, NC", completed: false, video: "https://www.youtube.com/embed/zGQigtUnUf8"}
  ];

app.get('/', (request, response) => {
  response.send('Climbers Rule');
});

app.get('/api/v1/climbs/', (request, response) => {
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
    const id = "" + app.locals.climbs.length;
    const completed = false;
    const { name, grade, location, video } = request.body;
  
    app.locals.climbs.push({ id, name, grade, location, completed, video });
  
    response.status(201).json({ id, name, grade, location, completed, video});
});

app.delete('/api/v1/climbs', (request, response) => {
  const { id } = request.body;
  app.locals.climbs.splice(Number(id), 1);
 
  response.status(201).json({ id });
});

app.patch('/api/v1/climbs', (request, response) => {
  const { completed, id} = request.body;

  app.locals.climbs[Number(id)].completed = completed

  response.status(201).json(app.locals.climbs);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});