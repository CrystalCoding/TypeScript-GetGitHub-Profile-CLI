import { GitHubApiService } from './GitHubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GitHubApiService();
if (process.argv.length < 3) {
    console.log("Please enter GitHub user-name as an argument");
}
else {
    let userName = process.argv[2];
    svc.getUser(userName, (user: User) => {
        svc.getRepos(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        })
    })
};