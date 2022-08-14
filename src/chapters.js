const chapters = {
    0: {
        title: 'Chapitre 0',
        subtitle: 'Harry arrive dans la cours',
        text: 'Le sorcier se précipite dans la cours du chateau.',
        image: "https://media.giphy.com/media/3UtEIg06e3uz6/giphy.gif",
        video: "",
        audio: "",
        choices: [
            {text: 'Suivant', goTo: 1, itemsFounded: [], itemsLost: [], conditions: [], damage: 0}
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
            {text: 'Le sauver', goTo: 2, itemsFounded: [], itemsLost: [], conditions: [], damage: 0},
            {text: 'S\'enfuir', goTo: 3, itemsFounded: [], itemsLost: [], conditions: [], damage: 0}
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
            {text: 'Faire demi tour au risque de prendre une fléche dans le genoux', goTo: 2, itemsFounded: [], itemsLost: [], conditions: [], damage: 0},
            {text: 'Demander a Neville sa baguette', goTo: 4, itemsFounded: [], itemsLost: [], conditions: [], damage: 0},
            {text: 'Affronter Voldemort', goTo: 5, itemsFounded: [], itemsLost: [], conditions: [], damage: 1}
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
            {text: 'Affronter Voldemort', goTo: 5, itemsFounded: ['Baguette'], itemsLost: [], conditions: [], damage: 0},
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
          {text: 'Faire demi-tour', goTo: 2, itemsFounded: [], itemsLost: [], conditions: [], damage: 0},
          {text: 'Demander à Neville sa baguette', goTo: 4, itemsFounded: [], itemsLost: [], conditions: [], damage: 0},
          {text: 'Affronter Voldemort en duel', goTo: 6, itemsFounded: [], itemsLost: ['Baguette'], conditions: ['Baguette'], damage: 0},
          {text: 'Affronter Voldemort au combat de pouce', goTo: 7, itemsFounded: [], itemsLost: ['Fierté'], conditions: ['Fierté'], damage: 0}
    
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
        subtitle: '',
        text: '',
        image: "",
        video: "./assets/videos/gameover.mp4",
        audio: "./assets/audios/gameover.mp3",
        choices: []
    }
};
