"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var request = __importStar(require("request"));
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'user-agent': 'request'
    }
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUser = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(JSON.parse(body));
            cb(user);
        });
    };
    GitHubApiService.prototype.getRepos = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, function (error, response, body) {
            var repos = (JSON.parse(body)).map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
