import {match} from "../../lib/match.js";

export const determineCommitType = (isPre)=>(message) => {
    const type = match([
        [message.header.includes("BREAKING CHANGE"),"major"],
        [message.type === "feat","minor"],
        [message.type === "fix","patch"],
        [message.type === "perf","patch"],
        [message.type === "refactor","patch"],
        [message.type === "deps","patch"],
        [true, "none"]
    ]);

    return match([
        [isPre && type !== 'none', 'prerelease'],
        [type !== 'none', type],
        [true, "none"]
    ])
}