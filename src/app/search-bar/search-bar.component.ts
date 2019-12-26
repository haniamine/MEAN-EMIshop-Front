import { Component, OnInit } from "@angular/core";
import { FormGroup,ReactiveFormsModule, FormControl } from "@angular/forms";
import {RechercheService} from '../shared/services/recherche.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private rechercheService: RechercheService) {}

  ngOnInit() {}

  onSearch() {
    this.rechercheService.recherche(this.searchForm.value.search);
  }
}
