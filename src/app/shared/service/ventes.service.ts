import { Injectable } from '@angular/core';

import {map, tap} from 'rxjs/operators';
import {Ventes} from '../model/ventes';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {getLocaleFirstDayOfWeek} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VentesService {

  public ventes: Ventes[] = [];

  constructor(private http: HttpClient) {}

  getapi(): any {
    return this.http.get('http://localhost:8080/api/vente')
      .subscribe(
        (res: any) => {
          const data = res.docs.map((item: any) => Ventes.formJson(item));
          data.forEach((elem: any) => {
            this.ventes.push(elem);
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }


  deleteByid(vente: Ventes): any {
    this.http.delete('http://localhost:8080/api/vente/' + vente.id)

      .subscribe(
        (r) => {
          const index = this.ventes.indexOf(vente);
          this.ventes.splice(index, 1);
          console.log('success');
        }

          );
        }
}

