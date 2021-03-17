import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman','Ironan','Hulk','Thor'];
  heroeBorrado:string='';

  borrarHeroe(){
    this.heroeBorrado= this.heroes.shift()||'';
  }

}


