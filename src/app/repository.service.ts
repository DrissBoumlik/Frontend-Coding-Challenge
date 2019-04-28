
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './Repository.model';

@Injectable()
export class RepositoryService  {

  private repositories : Repository[] = [];

      constructor(private http: HttpClient) {}
      getRepos() {
        var date = new Date();
        let last_30_days = new Date(new Date(date.setDate(date.getDate() - 30)).toLocaleDateString().replace(/\//g,'-'));
        last_30_days = this.formatDate(last_30_days);
        this.http.get('https://api.github.com/search/repositories?q=created:>' + last_30_days + '&sort=stars&order=desc')
        .subscribe(data => {
          for(let repo of data.items){
            this.repositories.push(new Repository(
              repo.owner.login, repo.owner.avatar_url,
              repo.name, repo.description,
              repo.stargazers_count, repo.open_issues_count,
              Math.ceil(Math.abs((new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 3600 * 24))) + ""));
            }
          });
          return this.repositories;
        }

        formatDate(date) {
          let year = date.getFullYear();
          let month = date.getMonth() + 1
          month = month < 10 ? '0' + month : month;
          let day = date.getDate();
          date = year + '-' + month + '-' + day;
          return date;
        }
      }
