import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Repository } from '../repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.sass'],
  providers: [RepositoryService]
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[];
  page = 2; // serves as page number for the infinit scrolling
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.clearRepos();
    this.repositories = this.repositoryService.getRepos(1); // getting the repositories from the repos service
  }
  onScroll() {
    this.repositories = this.repositoryService.getRepos(this.page++);
  }
}
