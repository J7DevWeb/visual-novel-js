const chapterTitle = document.querySelector('#chapter');
const chapterSubtitle = document.querySelector('#subtitle');
const chapterText = document.querySelector('#text');
const chapterVisual = document.querySelector('#visual');
const chapterChoices = document.querySelector('#choices');
const restartBtn = document.querySelector('#restart');
const soundBtn = document.querySelector('#sound');
const bluredBg = document.querySelector('#blured-bg');

let lifePoint = 2;
let items = ['Fierté'];

const chapters = {
    0: {
        title: 'Chapitre 0',
        subtitle: 'Harry arrive dans la cours',
        text: 'Le sorcier se précipite dans la cours du chateau.',
        image: "https://media.giphy.com/media/3UtEIg06e3uz6/giphy.gif",
        video: "",
        audio: "",
        choices: [
            {text: 'Suivant', goTo: 1, itemsFounded: [], itemsLost: [], conditions: []}
            ]
    },
    1: {
        title: 'Chapitre 1',
        subtitle: 'Un ami dans le besoin',
        text: 'Un sorcier de Griffondor se fait sournoisement attaqué par des mangemorts.',
        image: "https://media.giphy.com/media/13eD01wPr7iiTC/giphy.gif",
        video: "",
        audio: "./assets/audios/The-Ice-Giants.mp3",
        choices: [
            {text: 'Le sauver', goTo: 2, itemsFounded: [], itemsLost: [], conditions: []},
            {text: 'S\'enfuir', goTo: 3, itemsFounded: [], itemsLost: [], conditions: []}
        ]
    },
    2: {
        title: 'Chapitre 2',
        subtitle: 'Ca fait mal d\'avoir mal',
        text: 'Un mangemort vous surprend et vous livre à celui dont on ne doit pas prononcé le nom... enfin normalement on doit pas... mais on va le faire quand même parce que voila !',
        image: "https://media.giphy.com/media/11WzxptsVKqEJa/giphy.gif",
        video: "",
        audio: "",
        choices: []
    },
    3: {
        title: 'Chapitre 3',
        subtitle: 'En plein milieu du champ de bataille',
        text: 'Notre héro se lance vaillament sur le champ de bataille. Dans la précipitation il en tombe sa baguette. En pleine course il est stoppé net par le seigneur vador ... oups mauvaise ligne ... par le GARS SANS NEZ.',
        image: "https://media.giphy.com/media/7qsYHts10xVrW/giphy.gif",
        video: "",
        audio: "",
        choices: [
            {text: 'Faire demi tour au risque de prendre une fléche dans le genoux', goTo: 2, itemsFounded: [], itemsLost: [], conditions: []},
            {text: 'Demander a Neville sa baguette', goTo: 4, itemsFounded: [], itemsLost: [], conditions: []},
            {text: 'Affronter Voldemort', goTo: 5, itemsFounded: [], itemsLost: [], conditions: []}
        ]
    },
    4: {
        title: 'Chapitre 4',
        subtitle: 'Pour une bouchée de pain',
        text: 'Neville vous tend sa baguette et s\'éloigne en rappelant à qui veut bien l\'entendre : C\'est pas ma guerre! Adrienne!!!',
        image: "https://media.giphy.com/media/3oz8xI5c0K0hFPwmGI/giphy.gif",
        video: "",
        audio: "",
        choices: [
            {text: 'Affronter Voldemort', goTo: 5, itemsFounded: ['Baguette'], itemsLost: [], conditions: []},
        ]
    },
    5: {
        title: 'Chapitre 5',
        subtitle: 'La vache qui rit',
        text: 'TU VEUX QU\'ON SE BATAILLE qui me dit! Y connais pas les Potter lui! On FUME les mangeMORTS LA ... Désolé mais la suite est censurée, merci de votre compréhension.',
        image: "https://media.giphy.com/media/LLxwPAjfpLak8/giphy.gif",
        video: "",
        audio: "",
        choices: [
          {text: 'Faire demi-tour', goTo: 2, itemsFounded: [], itemsLost: [], conditions: []},
          {text: 'Demander à Neville sa baguette', goTo: 4, itemsFounded: [], itemsLost: [], conditions: []},
          {text: 'Affronter Voldemort en duel', goTo: 6, itemsFounded: [], itemsLost: ['Baguette'], conditions: ['Baguette']},
          {text: 'Affronter Voldemort au combat de pouce', goTo: 7, itemsFounded: [], itemsLost: ['Fierté'], conditions: ['Fierté']}
    
        ]
    },
    6: {
        title: 'Chapitre 6',
        subtitle: 'Affronter le seigneur du coté obscure sous les projecteurs',
        text: 'Après avoir jetée sa baguette comme une majorette Voldemort loupe son saut perilleux. Triste histoire mais ... On a gagné on est les champions!!!!',
        image: "https://media.giphy.com/media/FHdThVQJBa1tm/giphy.gif",
        video: "",
        audio: "",
        choices: []
    },
    7: {
        title: 'Chapitre 7',
        subtitle: 'Directed by: Robert B. WEIDE',
        text: 'Co-Executive Producer: Robert B. WEIDE',
        image: "",
        video: "./assets/videos/gameover.mp4",
        audio: "./assets/audios/gameover.mp3",
        choices: []
    }
};

if (localStorage.getItem('save')) {
    const load = JSON.parse(localStorage.getItem('save'));
    items = load.items;
    goToChapter({nextChapterNumber: load.actualChapterNumber})
} else {
    goToChapter({});
}

function goToChapter({nextChapterNumber = 0, itemsFounded = [], itemsLost = []}) {

    if (lifePoint <= 0) {
        goToChapter({});
    }

    if (itemsFounded.length > 0) {
        items = items.concat(itemsFounded);
    }

    if (itemsLost.length > 0) {
        items = items.filter(item => !itemsLost.includes(item));
    }

    const save = { actualChapterNumber: nextChapterNumber, items: items, lifePoint: lifePoint};
    localStorage.setItem('save', JSON.stringify(save));

    const actualChapter = chapters[nextChapterNumber];
    chapterTitle.innerText = actualChapter.title;
    chapterSubtitle.innerText = actualChapter.subtitle;
    chapterText.innerText = actualChapter.text;
    chapterVisual.innerText = '';

    if (actualChapter.video !== '') {
        console.log(actualChapter.video);

        const video = document.createElement('video');
        video.setAttribute('src', actualChapter.video);
        if (actualChapter.image !== '') {
            video.setAttribute('poster', actualChapter.image);
        }
        video.setAttribute('loop', true);
        video.muted = 'muted';
        video.setAttribute('autoplay', true);

        chapterVisual.appendChild(video);
    } else if (actualChapter.image !== '') {
        console.log('image');

        const image = document.createElement('img');
        image.setAttribute('src', actualChapter.image);
        image.setAttribute('alt', 'Image du jeu');
        chapterVisual.appendChild(image);
    }

    if (actualChapter.image !== '') {
        bluredBg.style.backgroundImage = `url(${actualChapter.image})`;
    }

    chapterChoices.innerText = '';
    actualChapter.choices.map(choice => {
       if (choice.conditions.length === 0 || items.some(item => choice.conditions.includes(item))) {
        const button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerText = choice.text;
        button.addEventListener('click', ()=> goToChapter({nextChapterNumber: choice.goTo, itemsFounded: choice.itemsFounded, itemsLost: choice.itemsLost}));
        chapterChoices.appendChild(button);
       }
    } );

    if (actualChapter.audio !== '' && soundBtn.checked) {
        new Audio(actualChapter.audio).play();
    }
}

restartBtn.addEventListener('click', () => {
    localStorage.removeItem('save');
    location.reload();
});
