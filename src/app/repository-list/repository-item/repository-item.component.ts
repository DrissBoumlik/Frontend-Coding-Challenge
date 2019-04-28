import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/Repository.model';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.sass']
})
export class RepositoryItemComponent implements OnInit {
  @Input() repository: Repository;
  constructor() { }

  ngOnInit() {
  }

}
