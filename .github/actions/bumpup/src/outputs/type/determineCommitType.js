import {match} from "../../lib/match.js";

export const determineCommitType = (isPre)=>(message) => match([
    [isPre, 'prerelease'],
    [message.header.includes("BREAKING CHANGE"),"major"],
    [message.type === "feat","minor"],
    [message.type === "fix","patch"],
    [message.type === "perf","patch"],
    [message.type === "refactor","patch"],
    [message.type === "deps","patch"],
    [true, "none"]
]);