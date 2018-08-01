import { Repo }  from './Repo';

export class User {
    login : string;
    fullName : string;
    repoCount : number;
    followerCount : number;
    repos: Repo[];
    
    constructor(user : any) {
        this.login = user.login;
        this.fullName = user.name;
        this.repoCount = user.public_repos;
        this.followerCount = user.followers;
        this.repos = user.repos;
    }
}