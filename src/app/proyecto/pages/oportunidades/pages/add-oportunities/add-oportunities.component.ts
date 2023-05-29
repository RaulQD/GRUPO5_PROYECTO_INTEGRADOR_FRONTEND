import { Component } from '@angular/core';
import { Empresas } from 'src/app/interface/empresas.interface';
import { Factura } from 'src/app/interface/factura.interface';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-add-oportunities',
  templateUrl: './add-oportunities.component.html',
  styleUrls: ['./add-oportunities.component.css']
})
export class AddOportunitiesComponent {


  public empresas:Empresas[] = [];
  public facturaList:Factura[] = [];
  public mostrarAlerta: boolean = false;
  public seEncontraronResultados: boolean = false;
  public isLoading: boolean = false;

  constructor( private empresasServices:EmpresasService,private facturaService:FacturaService) { }

  filterEmpresas(keyword: String): void{
    this.isLoading = true;
    this.empresasServices.filterEmpresas(keyword).subscribe(empresas =>{
     this.empresas = empresas;
     this.isLoading = false;
     this.seEncontraronResultados = this.empresas.length > 0;
    },err =>{
      console.log(err);
      this.mostrarAlerta = true;
    })
  }
  //RECUPERA LAS FACTURAS DE LA EMPRESA SELECCIONADA
  //NO ITERA LAS FACTURAS DE LA EMPRESA SELECCIONADA EN EL HTML
  addEmpresas(empresa:Empresas){
    if(empresa.idEmpresa === undefined){
      return;
    }
    this.facturaService.getFacturasXEmpresa(empresa.idEmpresa).subscribe((factura:Factura[]) =>{
      console.log( factura);
      this.facturaList = factura;
  })
  }
}