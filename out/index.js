"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var _ = __importStar(require("lodash"));
var svc = new GitHubApiService_1.GitHubApiService();
if (process.argv.length < 3) {
    console.log("Please enter GitHub user-name as an argument");
}
else {
    var userName_1 = process.argv[2];
    svc.getUser(userName_1, function (user) {
        svc.getRepos(userName_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]);
            var filteredRepos = _.take(sortedRepos, 5);
            user.repos = filteredRepos;
            console.log(user);
        });
    });
}
;
