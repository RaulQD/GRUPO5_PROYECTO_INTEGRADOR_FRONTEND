import { Component } from '@angular/core';

@Component({
  selector: 'app-acount-status',
  templateUrl: './acount-status.component.html',
  styleUrls: ['./acount-status.component.css']
})
export class AcountStatusComponent {

activeTabs:string = 'Movimientos';

  onTabClick(tab:string):void{
    this.activeTabs = tab;
  }
}
