import { Component, OnInit } from "@angular/core";
import { FormGroup,ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  onSearch() {
    let form = this.searchForm.value
    alert(form.search);
  }
}
