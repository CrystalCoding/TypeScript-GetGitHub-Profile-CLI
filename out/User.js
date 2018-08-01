"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(user) {
        this.login = user.login;
        this.fullName = user.name;
        this.repoCount = user.public_repos;
        this.followerCount = user.followers;
        this.repos = user.repos;
    }
    return User;
}());
exports.User = User;
