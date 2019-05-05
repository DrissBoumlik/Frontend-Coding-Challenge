import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../repository.model';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.sass']
})
export class RepositoryItemComponent implements OnInit {
  @Input() repository: Repository;
  interval_time = '';
  constructor() { }

  ngOnInit() {
    this.interval_time = parseInt(this.repository.submission_date) > 1 ? "days" : "day";
  }
}
