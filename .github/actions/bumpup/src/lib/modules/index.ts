import basedir from "./basedir/basedir.js";
import git from "./git/git.js";
import commits from "./git/commits.js";
import currentversion from "./currentversion/currentversion.js";
import prerelease from "./prerelease/prerelease.js";

const modules = [
    basedir, git, currentversion, prerelease, commits
]

let result = {}
for(const module of modules){
    result = {
    ...result,
        // @ts-ignore
    ...(await module(result))
    }
}
console.log(result)

