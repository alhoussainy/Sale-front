import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VentesService} from '../../shared/service/ventes.service';
import { Router} from '@angular/router';
import {Ventes} from '../../shared/model/ventes';
import {Vendeur} from '../../shared/model/vendeur';

@Component({
  selector: 'app-ventes-creator',
  templateUrl: './ventes-creator.component.html',
  styleUrls: ['./ventes-creator.component.css']
})
export class VentesCreatorComponent implements OnInit {
  sale: Ventes;
  submitted = false;
  newSaleForm: FormGroup | undefined;

  constructor(private  service: VentesService , private  formbuilder: FormBuilder , private  router: Router) {
    this.getelement();
    this.sale = new Ventes(undefined, [], undefined, new Vendeur(undefined, undefined, undefined, undefined), false, undefined);
  }

  ngOnInit(): void {
this.iniform();

  }

 iniform(): any{
  this.newSaleForm = this.formbuilder.group({
      saleDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/)]],
      storeLocation: ['', Validators.required],
      customer: this.formbuilder.group(
        {
          gender:  ['', Validators.required],
          age:  ['', Validators.required],
          email:  ['', [Validators.required , Validators.email]],
          satisfaction:  ['', Validators.required]
        }
      ),
      couponUsed: [''],
      purchaseMethod:  ['', Validators.required],
    }
  );
}


  /**
   * Method called when the user submit a new sale
   */
  onSubmitNewSaleForm() {

    this.sale.saleDate = new Date(this.sale.saleDate);

    this.service.addSale(this.sale.toJSON())
      .then(() => {
        this.router.navigate(['/']);
      })

  }


}
