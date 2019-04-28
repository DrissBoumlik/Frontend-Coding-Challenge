
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './Repository.model';

@Injectable()
export class RepositoryService  {

  private repositories : Repository[] = [];

  constructor(private http: HttpClient) {}

  getRepos(page) {
    let last_30_days = this.formatDate(); // formatting the date to get yyyy-mm-dd format
    this.http.get('https://api.github.com/search/repositories?q=created:>' + last_30_days + '&sort=stars&order=desc&page=' + page)
    .subscribe((data : any) => {
      for(let repo of data.items){
        // pushing the repositories the the repositories[] array
        this.repositories.push(new Repository(
          repo.owner.login, repo.owner.avatar_url,
          repo.name, repo.description,
          repo.stargazers_count, repo.open_issues_count,
          // calculating the difference between now and the repository submission date to get the total in days
          Math.ceil(Math.abs((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 3600 * 24))) + ""));
        }
      });
      return this.repositories;
    }

    clearRepos() {
      this.repositories = []; // empty the repositories each time the request is sent
    }

    formatDate() { //
      let date = new Date();
      date = new Date(new Date(date.setDate(date.getDate() - 30)).toLocaleDateString().replace(/\//g,'-'));
      var year = date.getFullYear();
      var _month = date.getMonth() + 1;
      var month = _month < 10 ? '0' + _month : _month;
      var day = date.getDate();
      var last_30_days = year + '-' + month + '-' + day;
      return last_30_days;
    }
  }
