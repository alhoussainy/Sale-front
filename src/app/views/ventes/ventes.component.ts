import {Component, OnInit} from '@angular/core';
import {VentesService} from '../../shared/service/ventes.service';
import {Ventes} from '../../shared/model/ventes';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {
 ventes: Ventes[] = [];

  constructor( private  service: VentesService, private router: Router) {
    this.ventes = this.service.ventes;
    console.log(this.ventes);
  }

  ngOnInit(): void {

    this.service.getapi();
  }
  btnClick () {
    this.router.navigateByUrl('/new');
  }
  ondeletevente(vente: Ventes): any
  {
  return   this.service.deleteByid(vente);
  }

}
