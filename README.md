# Tick List API
This is an API using Express/Node.js deployed through Heroku for a final Mod 3 project at Turing Software of Engineering and Design.
This app exposes endpoints to return a single users list of climbs. 

Available endpoints:

####  1. Get Climbs: Returns a user's climbs

<details>
  <summary> Request </summary>
  
  *GET `https://tick-list-api.herokuapp.com/api/v1/climbs`*
  
  </details>
  
  <details>
    <summary> Response </summary>
  
```  
 {
  climbs: [
    {
      id: "1",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "2",
      name: "Mighty Mouse",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "3",
      name: "Sunday Survice",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "4",
      name: "Jason Lives",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "5",
      name: "Reed Roof",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "6",
      name: "Druid Roof",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "7",
      name: "Magic Woman",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "8",
      name: "CigArete",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "9",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "10",
      name: "Macheesemo",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "11",
      name: "Zen Master",
      grade: 8,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "11",
      name: "Hot Rod",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "12",
      name: "Masochist",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "13",
      name: "Have Guns Will Travel",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "14",
      name: "Tupac",
      grade: 6,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "15",
      name: "Full Throttle",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "16",
      name: "Sherman Photo",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "17",
      name: "Nose Candy",
      grade: 6,
      location: "RockTown, GA",
      completed: true
    },
    {
      id: "18",
      name: "Vagina",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "19",
      name: "The Comet",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "20",
      name: "Golden Harvest",
      grade: 10,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "21",
      name: "Orb",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "22",
      name: "Helecopter Traverse",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "23",
      name: "Lab Rats",
      grade: 6,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "24",
      name: "Iron Claw Sit",
      grade: 9,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "25",
      name: "The Flame",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "26",
      name: "Crimping Nickles",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "27",
      name: "Project Plow Share",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "28",
      name: "Klamper Sit",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "29",
      name: "Eye Candy",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "30",
      name: "Senderella",
      grade: 8,
      location: "Boone, NC",
      completed: false
    }
  ]
}
```
</details>

---

####  2. Get Single Climb: Returns a user's single climb

<details>
  <summary> Request </summary>
  
  *GET `https://tick-list-api.herokuapp.com/api/v1/climbs/0`*
  
  </details>
  
  <details>
    <summary> Response </summary>
  
```  
[
    {
      id: "1",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
      {
      id: "2",
      name: "Mighty Mouse",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "3",
      name: "Sunday Survice",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "4",
      name: "Jason Lives",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "5",
      name: "Reed Roof",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "6",
      name: "Druid Roof",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "7",
      name: "Magic Woman",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "8",
      name: "CigArete",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "9",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "10",
      name: "Macheesemo",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "11",
      name: "Zen Master",
      grade: 8,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "11",
      name: "Hot Rod",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "12",
      name: "Masochist",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "13",
      name: "Have Guns Will Travel",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "14",
      name: "Tupac",
      grade: 6,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "15",
      name: "Full Throttle",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "16",
      name: "Sherman Photo",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "17",
      name: "Nose Candy",
      grade: 6,
      location: "RockTown, GA",
      completed: true
    },
    {
      id: "18",
      name: "Vagina",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "19",
      name: "The Comet",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "20",
      name: "Golden Harvest",
      grade: 10,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "21",
      name: "Orb",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "22",
      name: "Helecopter Traverse",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "23",
      name: "Lab Rats",
      grade: 6,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "24",
      name: "Iron Claw Sit",
      grade: 9,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "25",
      name: "The Flame",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "26",
      name: "Crimping Nickles",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "27",
      name: "Project Plow Share",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "28",
      name: "Klamper Sit",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "29",
      name: "Eye Candy",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "30",
      name: "Senderella",
      grade: 8,
      location: "Boone, NC",
      completed: false
    }
  ]

```
</details>

---

  #### 3. Create New Climb

<details>
  <summary> Request </summary>
  
  *POST `https://tick-list-api.herokuapp.com/api/v1/climbs`*
  
  ```
      {
        "name": "Project Plow Share",
        "grade": 8,
        "location": "Boone, NC",
        "video": "https://www.youtube.com/embed/IIGKHidFReo"
       }
  ```
  </details>
  
  <details>
    <summary> Response </summary>
  
```  
   [
    {
      id: "1",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "2",
      name: "Mighty Mouse",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "3",
      name: "Sunday Survice",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "4",
      name: "Jason Lives",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "5",
      name: "Reed Roof",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "6",
      name: "Druid Roof",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "7",
      name: "Magic Woman",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "8",
      name: "CigArete",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "9",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "10",
      name: "Macheesemo",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "11",
      name: "Zen Master",
      grade: 8,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "11",
      name: "Hot Rod",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "12",
      name: "Masochist",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "13",
      name: "Have Guns Will Travel",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "14",
      name: "Tupac",
      grade: 6,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "15",
      name: "Full Throttle",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "16",
      name: "Sherman Photo",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "17",
      name: "Nose Candy",
      grade: 6,
      location: "RockTown, GA",
      completed: true
    },
    {
      id: "18",
      name: "Vagina",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "19",
      name: "The Comet",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "20",
      name: "Golden Harvest",
      grade: 10,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "21",
      name: "Orb",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "22",
      name: "Helecopter Traverse",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "23",
      name: "Lab Rats",
      grade: 6,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "24",
      name: "Iron Claw Sit",
      grade: 9,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "25",
      name: "The Flame",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "26",
      name: "Crimping Nickles",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "27",
      name: "Project Plow Share",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "28",
      name: "Klamper Sit",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "29",
      name: "Eye Candy",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "30",
      name: "Senderella",
      grade: 8,
      location: "Boone, NC",
      completed: false
    }
  ]
```
</details>

---

  #### 4. Update Climb

<details>
  <summary> Request </summary>
  
  *PATCH `https://tick-list-api.herokuapp.com/api/v1/climbs`*
  
  ```
      {
        "completed": false
       }
  ```
  </details>
  
  <details>
    <summary> Response </summary>
  
```  
  [
    {
      id: "1",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "2",
      name: "Mighty Mouse",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "3",
      name: "Sunday Survice",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "4",
      name: "Jason Lives",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "5",
      name: "Reed Roof",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "6",
      name: "Druid Roof",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "7",
      name: "Magic Woman",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "8",
      name: "CigArete",
      grade: 7,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "9",
      name: "Throttle",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "10",
      name: "Macheesemo",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "11",
      name: "Zen Master",
      grade: 8,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "11",
      name: "Hot Rod",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "12",
      name: "Masochist",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "13",
      name: "Have Guns Will Travel",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "14",
      name: "Tupac",
      grade: 6,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "15",
      name: "Full Throttle",
      grade: 11,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "16",
      name: "Sherman Photo",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "17",
      name: "Nose Candy",
      grade: 6,
      location: "RockTown, GA",
      completed: true
    },
    {
      id: "18",
      name: "Vagina",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "19",
      name: "The Comet",
      grade: 7,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "20",
      name: "Golden Harvest",
      grade: 10,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "21",
      name: "Orb",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "22",
      name: "Helecopter Traverse",
      grade: 8,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "23",
      name: "Lab Rats",
      grade: 6,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "24",
      name: "Iron Claw Sit",
      grade: 9,
      location: "RockTown, GA",
      completed: false
    },
    {
      id: "25",
      name: "The Flame",
      grade: 7,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "26",
      name: "Crimping Nickles",
      grade: 5,
      location: "Boone, NC",
      completed: true
    },
    {
      id: "27",
      name: "Project Plow Share",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "28",
      name: "Klamper Sit",
      grade: 8,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "29",
      name: "Eye Candy",
      grade: 9,
      location: "Boone, NC",
      completed: false
    },
    {
      id: "30",
      name: "Senderella",
      grade: 8,
      location: "Boone, NC",
      completed: false
    }
  ]
```
</details>

