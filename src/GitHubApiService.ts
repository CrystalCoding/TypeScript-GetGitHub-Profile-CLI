import { User } from "./User";
import * as request from "request";
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: {
        'user-agent': 'request'
    }
}

export class GitHubApiService {

    getUser( userName: string , cb : (user : User) => any) {

        request.get("https://api.github.com/users/" + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(JSON.parse(body));
            cb(user);
        })

    }

    getRepos(userName: string , cb : (repos : Repo[]) => any) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (error: any, response: any, body: any) => {
            let repos: Repo[] = (JSON.parse(body)).map((repo: any) => {return new Repo(repo)});
            cb(repos);
        });     
    }
}