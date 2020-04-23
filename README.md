CEFIM : Formation : Cours JS

Cet exercice consistait à créer une équipe de développement représentée par un tableau d'objets littéraux.
Vous constituerez votre équipe de 5 personnes de votre promotion (En vous y incluant). Il y aura un développeur frontend, un développeur backend, un chef de projet, un designer et un commercial.
Chaque membre sera donc représenté par un objet littéral admettant les propriétés suivantes :
- Un prénom (chaine de caractères)
- Un âge (nombre entier)
- Son poste (une chaine de caractères représentant l'un des postes ci-dessus)
- La liste des langages qu'il pratique (un tableau pouvant être vide)

Ils auront aussi chacun 2 fonctions :
- Une fonction "introduce" lui permettant de se présenter en affichant dans la console "Je m'appelle {prénom} et je suis le {poste} de l'équipe !".
- Une fonction "workWith" indiquant avec qui il travaille dans la console "Je travaille avec {prénom}, {prénom} et {prénom}.".

Voici pour chaque poste la liste des autres postes avec qui il travaille :
- Le développeur frontend travail avec le designer et le développeur backend.
- Le développeur backend travail avec le développeur frontend.
- Le chef de projet travail avec tout le monde.
- Le designer travail avec le développeur frontend et le commercial.
- Le commercial travail avec le designer.

Faites ensuite que chacun se présente et dise avec qui il travaille via une boucle for.
