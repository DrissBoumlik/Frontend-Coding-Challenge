

export class Repository {
  public username: string;
  public avatar: string;
  public name: string;
  public description: string;
  public stars: number;
  public issues: number;
  public submission_date: string;

  constructor(username: string, avatar: string, name: string, description: string, stars: number, issues: number, submission_date : string) {
    this.username = username;
    this.avatar = avatar;
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.issues = issues;
    this.submission_date =  submission_date;
  }
}
