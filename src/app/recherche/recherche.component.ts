import { Component, OnInit } from '@angular/core';
import {RechercheService} from '../shared/services/recherche.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  constructor(private serviceRecherche: RechercheService) { }

  ngOnInit() {}

}
