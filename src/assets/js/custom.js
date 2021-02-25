// function start() {
//     // MENU
//     document.getElementById("close-menu").addEventListener("click", function() {
//         function hideMenu() {
//             var menu = document.querySelector(".show-menu");
//             // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
//             var left = parseFloat(getComputedStyle(menu).left);

//             // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")

//             if (left >= -500) { // Si le bloc n'est pas encore au bout du cadre
//                 // Déplacement du bloc
//                 menu.style.left = (left - 40) + "px";

//                 // Demande au navigateur d'appeler deplacerBloc dès que possible
//                 animationId = requestAnimationFrame(hideMenu);
//             } else {
//                 // Annulation de l'animation
//                 //menu.style.left = 0 + "px";
//                 menu.style.left = "";
//                 document.getElementById("menu-content").classList.remove("show-menu");
//                 document.querySelector(".container").classList.remove("blur-container");
//                 cancelAnimationFrame(animationId);
//             }
//         }
//         animationId = requestAnimationFrame(hideMenu); // Début de l'animation
//     });

//     document.getElementById("btnMenu").addEventListener("click", function() {
//         document.getElementById("menu-content").classList.add("show-menu");
//         document.querySelector(".container").classList.add("blur-container");

//     });

//     // END MENU

//     // CHOIX DE L'ANNNEE
// let choiceAnneeClick = false;

// document.querySelector(".change-annee").addEventListener("click", function(e) {
//     alert("test");
//     // document.querySelector(".choice-annee").classList.remove("blur-container");
//     if (document.querySelector(".choice-annee").style.display === "block") {
//         document.querySelector(".choice-annee").style.display = "none";
//     } else {
//         document.querySelector(".choice-annee").style.display = "block";
//         choiceAnneeClick = true;
//     }

//     e.stopPropagation();
// });

// document.querySelector(".choice-annee").addEventListener("click", function(e) {
//     choiceAnneeClick = true;
// });
// var anneeOptionElts = document.querySelectorAll(".choice-annee input");
// for (var i = 0; i < anneeOptionElts.length; i++) {
//     anneeOptionElts[i].addEventListener("click", function(e) {
//         choiceAnneeClick = true;
//         document.querySelector(".choice-annee").style.display = "block";
//         e.stopPropagation();
//     });
// }

// document.querySelector("body").addEventListener("click", function(e) {
//     if (choiceAnneeClick === true) {
//         document.querySelector(".choice-annee").style.display = "none";
//         choiceAnneeClick = false
//     }
// });
//     // END CHOIX DE L'ANNNEE
// }