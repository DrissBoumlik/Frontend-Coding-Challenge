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
  btn_load_active = true; // preventing user from clicking multiple times on the button
  page = 2; // serves as page number for the infinit scrolling
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {

  }
  onLoad() {
    this.btn_load_active = false; // disabling the load button after the first click
    this.repositoryService.clearRepos();
    this.repositories = this.repositoryService.getRepos(1); // getting the repositories from the repos service
    setTimeout(() => {
      this.btn_load_active = true; // enabling the load button after 3 seconds
    }, 2000);
  }

  onScroll() {
    this.repositories = this.repositoryService.getRepos(this.page++);
  }
}
