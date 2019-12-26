import { Component, OnInit } from "@angular/core";
import { FormGroup,ReactiveFormsModule, FormControl } from "@angular/forms";
import {RechercheService} from '../shared/services/recherche.service';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  token:string;
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private rechercheService: RechercheService,private userService: UserService, private router: Router) {}

  ngOnInit() {}

 /* onSearch(search) {
    this.router.navigate(['/catalogue',search]);
  }*/
}
