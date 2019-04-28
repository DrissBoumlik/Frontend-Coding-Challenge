import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Repository } from '../Repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.sass'],
  providers: [RepositoryService]
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[];
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {

  }
  onLoad() {
    this.repositories = this.repositoryService.getRepos();
    // this.repositoryChanged.next(this.repositories)
  }
}
