//pour la correction, on veut que l'on affiche le poste de qui travaille avec qui et non le nom

const introduce = function() {
    console.log("Je m'appelle " + this.prenom + " et je suis le " + this.poste + " de l'équipe !");
};
const workWith = function() {
    console.log("Je travail avec " + this.collaborateurs.slice(0, -2).join(', ') + (this.collaborateurs.length > 2 ? ', ' : '') + this.collaborateurs.slice(-2).join(' et '));
};

const equipe = [
    {
        "prenom": "Nicolas",
        "age": 25,
        "poste": "développeur frontend",
        "langages": [
            "HTML",
            "CSS",
            "JavaScript",
            "SASS"
        ],
        "collaborateurs": [
            "le designer",
            "le développeur backend"
        ],
        "introduce": introduce,
        "workWith": workWith
    },
    {
        "prenom": "Julien",
        "age": 39,
        "poste": "développeur backend",
        "langages": [
            "JavaScript",
            "PHP",
            "Python",
            "java"
        ],
        "collaborateurs": [
            "le développeur frontend"
        ],
        "introduce": introduce,
        "workWith": workWith
    },
    {
        "prenom": "Marion",
        "age": 35,
        "poste": "chef de projet",
        "langages": [
            "HTML",
            "UML"
        ],
        "collaborateurs": [
            "le développeur frontend",
            "le développeur backend",
            "le designer",
            "le commercial"
        ],
        "introduce": introduce,
        "workWith": workWith
    },
    {
        "prenom": "Audrey",
        "age": 24,
        "poste": "designer",
        "langages": [
            "CSS",
            "SASS",
            "SCSS",
            "Processing"
        ],
        "collaborateurs": [
            "le développeur frontend",
            "le commercial"
        ],
        "introduce": introduce,
        "workWith": workWith
    },
    {
        "prenom": "Olivier",
        "age": 25,
        "poste": "commercial",
        "langages": [],
        "collaborateurs": [
            "le designer"
        ],
        "introduce": introduce,
        "workWith": workWith
    }
];

for (let member of equipe) {
    member.introduce();
    member.workWith();
}
