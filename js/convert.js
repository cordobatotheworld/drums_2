const fs = require('fs');
const path = require('path');

const soundPath = path.join(__dirname, '../sounds/snare.wav');
const soundData = fs.readFileSync(soundPath);
const base64Sound = soundData.toString('base64');
console.log('data:audio/wav;base64,' + base64Sound);
