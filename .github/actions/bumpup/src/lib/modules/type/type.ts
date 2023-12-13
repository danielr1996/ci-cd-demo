import {Output as Commitoutput} from "../git/commits.js";
import {Output as PreReleaseOutput} from "../prerelease/prerelease.js";
import {match} from "../../match.js";
import {sync, Commit} from 'conventional-commits-parser'

export type Input = Commitoutput & PreReleaseOutput

export type Output = {
    type: string
}

export default async(input: Input): Promise<Output>=>{
    const {relevantCommits, isPrerelease} = input
    const commitTypes = relevantCommits.map(parseCommitMessage).map(determineCommitType(isPrerelease))
    return {
        type: determineHighestCommitType(commitTypes)
    }
}

const parseCommitMessage = (message: string): any=> {
    try {
        return sync(message)
    } catch (_) {
        return {
            type: "",
            notes: [],
        };
    }
}

const determineCommitType = (isPre: boolean)=>(message: Commit): string => {
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

const determineHighestCommitType = (types: string[]) => types.reduce((acc, cur): string => match([
    [acc === "none", cur],
    [acc === "patch" && cur !== "none", cur],
    [acc === "minor" && cur === "major", cur],
    [acc === "major", acc],
    [true, acc],
]), "none");
