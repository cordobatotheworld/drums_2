const sounds = {
    kick: new Howl({
        src: ['./sounds/kick.wav'],
        preload: true
    }),
    snare: new Howl({
        src: ['../sounds/snare.wav'],
        preload: true
    }),
    hihat: new Howl({
        src: ['../sounds/hihat.wav'],
        preload: true
    }),
    tom1: new Howl({
        src: ['../sounds/tom1.wav'],
        preload: true
    }),
    tom2: new Howl({
        src: ['../sounds/tom2.wav'],
        preload: true
    }),
    cymbal: new Howl({
        src: ['../sounds/cymbal.wav'],
        preload: true
    })
};

// Verificar que los sonidos están precargados
Object.values(sounds).forEach(sound => {
    sound.once('load', () => {
        console.log('Sound loaded successfully');
    });
    sound.once('loaderror', (id, error) => {
        console.error('Error loading sound:', error);
    });
});

function playSound(sound) {
    sounds[sound].play();
}

const keyMap = {
    'a': 'kick',
    's': 'snare',
    'd': 'hihat',
    'f': 'tom1',
    'g': 'tom2',
    'h': 'cymbal'
};

document.addEventListener('keydown', (event) => {
    const sound = keyMap[event.key.toLowerCase()];
    if (sound) {
        playSound(sound);
        const button = document.getElementById(sound);
        if (button) {
            animateButton(button);
        }
    }
});

const buttons = document.querySelectorAll('.drum');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.id;
        playSound(sound);
        animateButton(button);
    });
});

function animateButton(button) {
    button.classList.add('playing');
    setTimeout(() => {
        button.classList.remove('playing');
    }, 100);
}
