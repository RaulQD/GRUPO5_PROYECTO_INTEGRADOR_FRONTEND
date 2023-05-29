import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Oportunidades } from '../interface/oportunidades.interface';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
export class OportunidadesService{
    private http = inject(HttpClient);
    private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    url: string = 'http://localhost:8091/api';


    

    postOportunidad(oportunidades : Oportunidades):Observable<any>{
        return this.http.post<any>(`${this.url}/insertaOportunidadInversion`,oportunidades,{headers:this.httpHeaders}).pipe(
            catchError(error =>{
                Swal.fire('Error', error.error.mensaje, 'error');
                return throwError(error);
              })
        );
    }

}