import { Component, OnInit } from '@angular/core';
import { Recette } from './Recette';
import { RECETTES } from './RecetteList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>welcome</h1>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mamietoone';
  recetteList: Recette[] = RECETTES;
  recetteSelected?: Recette;
  // ngOnChange(){/* Applelé à chaque changement de notre composant */}
  //ngOnInit(){/* Appelé à la création du composant */}
  // ngDOCheck(){/*Permet d'étendre les détections par défaut de ngOnChange */}
  // ngAfterViewInit(){/* Applé juste aprés que le template soit initialisé */}
  // ngOnDestroy(){/* Appelé juste avant de supprimer le composant  */}
  ngOnInit(): void {
    console.table(this.recetteList);
    // this.selectRecette(this.recetteList[2]);
  }
  selectRecette(recetteId: string): void {
    const index: number = parseInt(recetteId);

    const recette: Recette|undefined = this.recetteList.find(rec=> rec.id === index);

    if (recette) {
    
      console.log(`Vou avez selectionné ${recette.name}`);
    } else{
      this.recetteSelected = recette;
      console.log("Aucune recette trouvé");
    }
    this.recetteSelected = recette;
  }
  /**
   * 1. Importer la liste des recettes dans notre composant
   * 2. Donner cette liste à notre propriété "recetteListe" (et la typer)
   * 3. Modifier la méthode "selectRecette" pour indiquer que le type de notre
   * argument sera une "Recette"
   * 4. Corriger les erreurs que typesccript aura créé
   * 5. Changer le template pour afficher le nom d'une recettes
   */
}
