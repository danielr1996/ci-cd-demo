import {Output as GitOutput} from "../git/git.js";
import {Output as TypeOutput} from "../type/type.js";
import {Output as CurrentVersionOutput} from "../currentversion/currentversion.js";
import {inc, ReleaseType} from 'semver'

export type Input = GitOutput & TypeOutput & CurrentVersionOutput

export type Output = {
    nextversion: string
}

export default async(input: Input): Promise<Output>=>{
    const {currentversion, type, branchname} = input
    return {
        nextversion: inc(currentversion,type as ReleaseType,{},branchname.replace('/','-'))
    }
}