import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'InicioPage';
  tab2Root = 'Inicio2Page';
  myIndex: number;
  constructor() {

  }
}
