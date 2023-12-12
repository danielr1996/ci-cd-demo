import {Output as GitOutput} from "../git/git.js";

export type Input = GitOutput

export type Output = {
    isPrerelease: boolean
}

export default async(input: Input): Promise<Output>=>{
    return {
        isPrerelease: input.branchname !== "main"
    }
}
