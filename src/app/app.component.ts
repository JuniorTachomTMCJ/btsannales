import { Component, OnInit } from '@angular/core';
import {SESSIONS, SPECIALITES, EPREUVES } from '../bd';
// import { startJS } from '../assets/js/custom';

// function start(){

// // CHOIX DE L'ANNNEE
// let choiceAnneeClick = false;

// document.querySelector(".choice-annee").addEventListener("click", function(e) {
//     choiceAnneeClick = true;
// });
// var anneeOptionElts = document.querySelectorAll(".choice-annee input");
// for (var i = 0; i < anneeOptionElts.length; i++) {
//     anneeOptionElts[i].addEventListener("click", function(e) {
//         choiceAnneeClick = true;
//         document.querySelector(".choice-annee").setAttribute("display", "block");
//         e.stopPropagation();
//     });
// }

// document.querySelector("body").addEventListener("click", function(e) {
//     if (choiceAnneeClick === true) {
//       document.querySelector(".choice-annee").setAttribute("display", "none");
//         choiceAnneeClick = false
//     }
// });
// // END CHOIX DE L'ANNNEE
// }
let choiceAnneeClick = false;
function showMenu(){
  document.getElementById("menu-content").classList.add("show-menu");
  document.querySelector(".container").classList.add("blur-container");
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BTS Annales';
  showChoiceAnne = false;

  //Info des données
  epreuves = EPREUVES;
  specialites : object[] = SPECIALITES;
  sessions : object[] = SESSIONS;

  selectedSession = SESSIONS[0];
  selectedSpecialite = SPECIALITES[0];
 

  display:Boolean = true;
  showSpecialite : Boolean = true;
  // constructor(private js: startJS) {}
  ngOnInit(){
    
  }

  onShowMenu()
  {
    showMenu();
  }

  onHideMenu(){
    var animationId;
    document.getElementById("menu-content").classList.remove("show-menu");
    document.querySelector(".container").classList.remove("blur-container");
    function hideMenu() {
      
      var menu = document.querySelector(".show-menu");
      
      // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
      var left = parseFloat(getComputedStyle(document.querySelector(".show-menu")).left);
    
      // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    
      if (left >= -500) { // Si le bloc n'est pas encore au bout du cadre
          // Déplacement du bloc
         
          menu.setAttribute("left", (left - 40) + "px");
          //menu.style.left = (left - 40) + "px";
    
          // Demande au navigateur d'appeler deplacerBloc dès que possible
          animationId = requestAnimationFrame(hideMenu);
          // setInterval(hideMenu,100); 
      } else {
          // Annulation de l'animation
          //menu.style.left = 0 + "px";
          menu.setAttribute("left", "0");
          document.getElementById("menu-content").classList.remove("show-menu");
          document.querySelector(".container").classList.remove("blur-container");
          cancelAnimationFrame(animationId);
      }
    }
    animationId = requestAnimationFrame(hideMenu); // Début de l'animation
  }

  onChangeAnnee(){
    this.showChoiceAnne = !this.showChoiceAnne;
  }
  onChoiceAnnee(){
    this.showChoiceAnne = true;
  }

  onBody(){
    
  }

  onSelectSpecialite(specialite):void{
    this.selectedSpecialite = specialite;
    this.onSelectSession(this.selectedSession);
    this.onHideMenu();
  }
  onSelectSession(session):void{
    this.selectedSession = session;
  }

  showEpreuve(epreuve, semestre, type):Boolean{
    let result : Boolean = false;
    // Vérification de la correspondance des Spécialités
    for (let i = 0; i < epreuve.specialites.length; i++) {
      const specialite = epreuve.specialites[i];
      if(specialite.code == this.selectedSpecialite.code){
        result = true;
        break;
      }
    }

    if(!result) return result;
    // Vérification de la correspondance des semestre

    if((epreuve.semestre == semestre)){
      result = true;
    }else{
      result = false;
      return result;
    }
  //   // Vérification de la correspondance de l'annee
    if(epreuve.annee.code == this.selectedSession.code){
      result = true;
    }else{
      result = false;
      return result;
    }

  //   // Vérification de la correspondance du type
    if(epreuve.type == type){
      result = true;
    }else{
      result = false;
      return result;
    }
    this.display = result;
  //   // if(result) this.display = "block";
  //   // else this.display="none";
    return result;
  }
  noEpreuve(semestre, type):Boolean{
    // Vérification de la correspondance des Spécialités
    for (let i = 0; i < this.epreuves.length; i++) {
      const epreuve =this. epreuves[i];
      if(this.showEpreuve(epreuve, semestre, type) == true){
        return true;
      }
    }
    return false;
  }
}
