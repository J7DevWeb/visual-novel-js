const chapterTitle = document.querySelector('#chapter');
const chapterSubtitle = document.querySelector('#subtitle');
const chapterText = document.querySelector('#text');
const chapterVisual = document.querySelector('#visual');
const chapterChoices = document.querySelector('#choices');
const restartBtn = document.querySelector('#restart');
const soundBtn = document.querySelector('#sound');
const bluredBg = document.querySelector('#blured-bg');
const audioPlayer =  new Audio();
const displayLifePoint = document.querySelector('#life-point');
const displayInventory = document.querySelector('#inventory');

let lifePoint = 2;
let items = ['Fierté'];

if (localStorage.getItem('save')) {
    const load = JSON.parse(localStorage.getItem('save'));
    items = load.items;
    lifePoint = load.lifePoint;
    goToChapter({nextChapterNumber: load.actualChapterNumber})
} else {
    goToChapter({});
}

function goToChapter({nextChapterNumber = 0, itemsFounded = [], itemsLost = [], damage = 0}) {

    if (damage > 0) {
        lifePoint -= damage;
    }

    displayLifePoint.innerText = lifePoint;

    if (lifePoint <= 0) {
        lifePoint = 2;
        items = ['Fierté'];
        goToChapter({});
        return;
    }

    if (itemsFounded.length > 0) {
        items = items.concat(itemsFounded);
    }

    if (itemsLost.length > 0) {
        items = items.filter(item => !itemsLost.includes(item));
    }

    displayInventory.innerText = '';
    items.map(item => {
        const displayItem = document.createElement('li');
        displayItem.innerText = item;
        displayInventory.appendChild(displayItem);
    })

    const save = { actualChapterNumber: nextChapterNumber, items: items, lifePoint: lifePoint};
    localStorage.setItem('save', JSON.stringify(save));

    const actualChapter = chapters[nextChapterNumber];
    chapterTitle.innerText = actualChapter.title;
    chapterSubtitle.innerText = actualChapter.subtitle;
    chapterText.innerText = actualChapter.text;
    chapterVisual.innerText = '';

    if (actualChapter.video !== '') {

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
        button.addEventListener('click', ()=> goToChapter({nextChapterNumber: choice.goTo, itemsFounded: choice.itemsFounded, itemsLost: choice.itemsLost, damage: choice.damage}));
        chapterChoices.appendChild(button);
       }
    } );

    if (actualChapter.audio !== '' && soundBtn.checked) {
       if (typeof audioPlayer != "undefined") {
        audioPlayer.pause();
       }
       audioPlayer.src = actualChapter.audio;
       audioPlayer.play();
    }
}

restartBtn.addEventListener('click', () => {
    localStorage.removeItem('save');
    location.reload();
});
