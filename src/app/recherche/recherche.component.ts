import { Component, OnInit } from '@angular/core';
import {RechercheService} from '../shared/services/recherche.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  constructor(private serviceRecherche: RechercheService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let search = this.route.snapshot.paramMap.get('id');
    this.serviceRecherche.recherche(search);
  }

}
