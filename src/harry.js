// export const robots = [
//   {
//     id: 1,
//     name: 'Harry Potter',
//     alternate_names: [],
//     species: 'human',
//     gender: 'male',
//     house: 'Gryffindor',
//     dateOfBirth: '31-07-1980',
//     yearOfBirth: 1980,
//     wizard: true,
//     ancestry: 'half-blood',
//     eyeColour: 'green',
//     hairColour: 'black',
//     wand: { wood: 'holly', core: 'phoenix feather', length: 11 },
//     patronus: 'stag',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Daniel Radcliffe',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://static.wikia.nocookie.net/harry-potter-fanon/images/b/b2/2001-Harry-Potter-and-the-Sorcerer-s-Stone-Promotional-Shoot-HQ-harry-potter-11097228-1600-1960.jpg/revision/latest/scale-to-width-down/350?cb=20170503150043'
//   },
//   {
//     id: 2,
//     name: 'Hermione Granger',
//     alternate_names: [],
//     species: 'human',
//     gender: 'female',
//     house: 'Gryffindor',
//     dateOfBirth: '19-09-1979',
//     yearOfBirth: 1979,
//     wizard: true,
//     ancestry: 'muggleborn',
//     eyeColour: 'brown',
//     hairColour: 'brown',
//     wand: { wood: 'vine', core: 'dragon heartstring', length: null },
//     patronus: 'otter',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Emma Watson',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/hermione.jpeg',
//   },
//   {
//     id: 3,
//     name: 'Ron Weasley',
//     alternate_names: ['Dragomir Despard'],
//     species: 'human',
//     gender: 'male',
//     house: 'Gryffindor',
//     dateOfBirth: '01-03-1980',
//     yearOfBirth: 1980,
//     wizard: true,
//     ancestry: 'pure-blood',
//     eyeColour: 'blue',
//     hairColour: 'red',
//     wand: { wood: 'willow', core: 'unicorn tail-hair', length: 14 },
//     patronus: 'Jack Russell terrier',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Rupert Grint',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/ron.jpg',
//   },
//   {
//     id: 4,
//     name: 'Draco Malfoy',
//     alternate_names: [],
//     species: 'human',
//     gender: 'male',
//     house: 'Slytherin',
//     dateOfBirth: '05-06-1980',
//     yearOfBirth: 1980,
//     wizard: true,
//     ancestry: 'pure-blood',
//     eyeColour: 'grey',
//     hairColour: 'blonde',
//     wand: { wood: 'hawthorn', core: 'unicorn tail-hair', length: 10 },
//     patronus: '',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Tom Felton',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/draco.jpg',
//   },
//   {
//     id: 5,
//     name: 'Minerva McGonagall',
//     alternate_names: [],
//     species: 'human',
//     gender: 'female',
//     house: 'Gryffindor',
//     dateOfBirth: '04-10-1925',
//     yearOfBirth: 1925,
//     wizard: true,
//     ancestry: '',
//     eyeColour: '',
//     hairColour: 'black',
//     wand: { wood: '', core: '', length: null },
//     patronus: 'tabby cat',
//     hogwartsStudent: false,
//     hogwartsStaff: true,
//     actor: 'Dame Maggie Smith',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/mcgonagall.jpg',
//   },
//   {
//     id: 6,
//     name: 'Cedric Diggory',
//     alternate_names: [],
//     species: 'human',
//     gender: 'male',
//     house: 'Hufflepuff',
//     dateOfBirth: '',
//     yearOfBirth: 1977,
//     wizard: true,
//     ancestry: '',
//     eyeColour: 'grey',
//     hairColour: 'brown',
//     wand: { wood: 'ash', core: 'unicorn hair', length: 12.25 },
//     patronus: '',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Robert Pattinson',
//     alternate_actors: [],
//     alive: false,
//     image: 'https://hp-api.herokuapp.com/images/cedric.png',
//   },
//   {
//     id: 7,
//     name: 'Cho Chang',
//     alternate_names: [],
//     species: 'human',
//     gender: 'female',
//     house: 'Ravenclaw',
//     dateOfBirth: '',
//     yearOfBirth: null,
//     wizard: true,
//     ancestry: '',
//     eyeColour: 'brown',
//     hairColour: 'black',
//     wand: { wood: '', core: '', length: null },
//     patronus: 'swan',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Katie Leung',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/cho.jpg',
//   },
//   {
//     id: 8,
//     name: 'Severus Snape',
//     alternate_names: ['Half-Blood Prince'],
//     species: 'human',
//     gender: 'male',
//     house: 'Slytherin',
//     dateOfBirth: '09-01-1960',
//     yearOfBirth: 1960,
//     wizard: true,
//     ancestry: 'half-blood',
//     eyeColour: 'black',
//     hairColour: 'black',
//     wand: { wood: '', core: '', length: null },
//     patronus: 'doe',
//     hogwartsStudent: false,
//     hogwartsStaff: true,
//     actor: 'Alan Rickman',
//     alternate_actors: [],
//     alive: false,
//     image: 'https://hp-api.herokuapp.com/images/snape.jpg',
//   },
//   {
//     id: 9,
//     name: 'Rubeus Hagrid',
//     alternate_names: [],
//     species: 'half-giant',
//     gender: 'male',
//     house: 'Gryffindor',
//     dateOfBirth: '06-12-1928',
//     yearOfBirth: 1928,
//     wizard: true,
//     ancestry: 'half-blood',
//     eyeColour: 'black',
//     hairColour: 'black',
//     wand: { wood: 'oak', core: '', length: 16 },
//     patronus: '',
//     hogwartsStudent: false,
//     hogwartsStaff: true,
//     actor: 'Robbie Coltrane',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/hagrid.png',
//   },
//   {
//     id: 10,
//     name: 'Neville Longbottom',
//     alternate_names: [],
//     species: 'human',
//     gender: 'male',
//     house: 'Gryffindor',
//     dateOfBirth: '30-07-1980',
//     yearOfBirth: 1980,
//     wizard: true,
//     ancestry: 'pure-blood',
//     eyeColour: '',
//     hairColour: 'blonde',
//     wand: { wood: 'cherry', core: 'unicorn tail-hair', length: 13 },
//     patronus: '',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Matthew Lewis',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/neville.jpg',
//   },
//   {
//     id: 11,
//     name: 'Luna Lovegood',
//     alternate_names: [],
//     species: 'human',
//     gender: 'female',
//     house: 'Ravenclaw',
//     dateOfBirth: '13-02-1981',
//     yearOfBirth: 1981,
//     wizard: true,
//     ancestry: '',
//     eyeColour: 'grey',
//     hairColour: 'blonde',
//     wand: { wood: '', core: '', length: null },
//     patronus: 'hare',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Evanna Lynch',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/luna.jpg',
//   },
//   {
//     id: 12,
//     name: 'Ginny Weasley',
//     alternate_names: [],
//     species: 'human',
//     gender: 'female',
//     house: 'Gryffindor',
//     dateOfBirth: '11-08-1981',
//     yearOfBirth: 1981,
//     wizard: true,
//     ancestry: 'pure-blood',
//     eyeColour: 'brown',
//     hairColour: 'red',
//     wand: { wood: 'yew', core: '', length: null },
//     patronus: 'horse',
//     hogwartsStudent: true,
//     hogwartsStaff: false,
//     actor: 'Bonnie Wright',
//     alternate_actors: [],
//     alive: true,
//     image: 'https://hp-api.herokuapp.com/images/ginny.jpg',
//   },
//   {
//     id: 13,
//     name: 'Sirius Black',
//     alternate_names: ['Padfoot', 'Snuffles'],
//     species: 'human',
//     gender: 'male',
//     house: 'Gryffindor',
//     dateOfBirth: '03-11-1959',
//     yearOfBirth: 1959,
//     wizard: true,
//     ancestry: 'pure-blood',
//     eyeColour: 'grey',
//     hairColour: 'black',
//     wand: { wood: '', core: '', length: null },
//     patronus: 'hare',
//     hogwartsStudent: false,
//     hogwartsStaff: false,
//     actor: 'Gary Oldman',
//     alternate_actors: ['James Walters', 'Rohan Gotobed'],
//     alive: false,
//     image: 'https://hp-api.herokuapp.com/images/sirius.JPG',
//   },
//   {
//     id: 14,
//     name: 'Bellatrix Lestrange',
//     alternate_names: ['Bella'],
//     species: 'human',
//     gender: 'female',
//     house: 'Slytherin',
//     dateOfBirth: '',
//     yearOfBirth: 1951,
//     wizard: true,
//     ancestry: 'pure-blood',
//     eyeColour: 'brown',
//     hairColour: 'black',
//     wand: { wood: 'walnut', core: 'dragon heartstring', length: 12.75 },
//     patronus: '',
//     hogwartsStudent: false,
//     hogwartsStaff: false,
//     actor: 'Helena Bonham Carter',
//     alternate_actors: [],
//     alive: false,
//     image: 'https://hp-api.herokuapp.com/images/bellatrix.jpg',
//   },
//   {
//     id: 15,
//     name: 'Lord Voldemort',
//     alternate_names: ['Tom Marvolo Riddle'],
//     species: 'human',
//     gender: 'male',
//     house: 'Slytherin',
//     dateOfBirth: '31-12-1926',
//     yearOfBirth: 1926,
//     wizard: true,
//     ancestry: 'half-blood',
//     eyeColour: 'red',
//     hairColour: 'bald',
//     wand: { wood: 'yew', core: 'phoenix feather', length: 13.5 },
//     patronus: '',
//     hogwartsStudent: false,
//     hogwartsStaff: false,
//     actor: 'Ralph Fiennes',
//     alternate_actors: [],
//     alive: false,
//     image: 'https://hp-api.herokuapp.com/images/voldemort.jpg',
//   }
// ];
