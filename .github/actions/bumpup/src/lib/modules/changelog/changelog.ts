import {Output as Commitoutput} from "../git/commits.js";

export type Input = Commitoutput

export type Output = {
    changelog: string
}

export default async(input: Input): Promise<Output>=>{
    return {
        changelog: input.relevantCommits.map(({subject})=>subject).join('\n')
    }
}