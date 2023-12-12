// const conventionalChangelog = require('conventional-changelog')
//
// const git = require("isomorphic-git");
// const fs = require('fs')
// const conventionalCommitsParser = require('conventional-commits-parser');
// const semver = require('semver')
// const core = require("@actions/core");
// var toString = require('stream-to-string'),
//     through2 = require('through2'),
//     stream   = through2()
//
// const match = (tests)=> tests.filter(([test])=>test).map(([_,value])=>value)[0];
// const determineHighestCommitType = (types) => types.reduce((acc, cur) => match([
//     [acc === "none", cur],
//     [acc === "patch" && cur !== "none", cur],
//     [acc === "minor" && cur === "major", cur],
//     [acc === "major", acc],
//     [true, acc],
// ]), "none");
//
// const getCommitType = (isPre, currentversion)=>(message) => match([
//     [isPre, 'commits.ts'],
//     [message.header.includes("BREAKING CHANGE"),"major",],
//     [message.type === "feat","minor"],
//     [message.type === "fix","patch"],
//     [message.type === "perf","patch"],
//     [message.type === "refactor","patch"],
//     [message.type === "deps","patch"],
//     [true, "none"]
// ]);
//
//
// const parseCommitMessage = (message)=> {
//     try {
//         return conventionalCommitsParser.sync(message)
//     } catch (_) {
//         return {
//             type: "",
//             notes: [],
//         };
//     }
// }
//
// const isPrerelease = (branchname)=>{
//     return branchname !== "main"
// }
//
// const getInstance = (branchname)=>{
//     return branchname === "main" ? 'vprd' : 'latest'
// }
//
// const getCommitMessages = async (currentversion, dir)=>{
//     const tagOid = await git.resolveRef({ fs, dir, ref: currentversion });
//     const tagCommit = await git.readCommit({ fs, dir, oid: tagOid });
//     const commits = await git.log({ fs, dir });
//     const position = commits.map((c) => c.oid).indexOf(tagCommit.oid);
//     const relevantCommits = commits.slice(0, position).map((c) => c.commit)
//     return relevantCommits.map((c) => c.message).map(parseCommitMessage);
//
// }
//
// const getCurrentVersion = async()=>{
//     let tags = await git.listTags({ fs,dir: ''})
//     return tags.sort((a,b)=>{
//         if(semver.lt(a,b)){
//             return 1
//         }
//         if(semver.gt(a,b)){
//             return -1
//         }
//         return 0
//     })[0];
// }
//
// const getType = async(currentversion,dir,commits.ts)=>{
//     const messages = await getCommitMessages(currentversion, dir)
//     const commitTypes = messages.map(getCommitType(commits.ts, currentversion))
//     const type = determineHighestCommitType(commitTypes)
//     return type
// }
//
// const getNextVersion = (currentversion, type, branchname) => {
//     return semver.inc(currentversion,type,{},branchname.replace('/','-'))
// }
//
// const getChangelog = async()=>{
//
//     conventionalChangelog({preset: 'angular'})
//         .pipe(stream);
//     return toString(stream)
// }
//
// const bumpup = async ()=>{
//     const dir = '.'
//     const branchname = await git.currentBranch({fs, dir})
//
//     const commits.ts = isPrerelease(branchname)
//     core.info("commits.ts="+commits.ts);
//     core.setOutput("commits.ts", commits.ts);
//
//     const currentversion = await getCurrentVersion()
//     core.info("currentversion="+currentversion);
//     core.setOutput("currentversion", currentversion);
//
//
//     const type = await getType(currentversion, dir, commits.ts)
//     core.info("type="+type);
//     core.setOutput("type", type);
//
//     const nextversion = getNextVersion(currentversion, type, branchname)
//     core.info("nextversion="+nextversion);
//     core.setOutput("nextversion", nextversion);
//
//     const changelog = await getChangelog()
//     // core.info("changelog="+changelog);
//     core.setOutput("changelog", changelog);
//
//     const instance = await getInstance(branchname)
//     core.info("instance="+instance);
//     core.setOutput("instance", instance);
// }
