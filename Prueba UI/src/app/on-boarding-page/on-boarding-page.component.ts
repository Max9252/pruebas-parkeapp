
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-on-boarding-page',
  templateUrl: './on-boarding-page.component.html',
  styleUrls: ['./on-boarding-page.component.css']
})
export class OnBoardingPageComponent implements OnInit {

  slideEntrada : boolean;
  slideFreemium : boolean;
  slidePrivado : boolean;
  slidePremium : boolean;
  slideAdicional : boolean;
  slideFiltro : boolean;
  slideChoose: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.slideEntrada = true;
    this.slideFreemium = false;
    this.slidePrivado = false;
    this.slidePremium  = false;
    this.slideChoose = false;
    this.slideFiltro = false;
  }
  navigate() {
    this.router.navigate(['/finish']);
  }

}
