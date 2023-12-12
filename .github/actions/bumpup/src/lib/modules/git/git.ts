import fs from 'fs'
import {currentBranch, listTags, log, ReadCommitResult} from 'isomorphic-git'
import {Output as BaseDirOutput} from "../basedir/basedir.js";

export type Input = BaseDirOutput

export type Output = {
    branchname: string
    tags: string[]
    commits: ReadCommitResult[]
}

export default async(input: Input): Promise<Output>=>{
    return {
        branchname: await getBranchName(input.basedir),
        tags: await getTags(input.basedir),
        commits: await getCommits(input.basedir),
    }
}

const getBranchName = async (baseDir: string): Promise<string>=>{
    const branchname = await currentBranch({fs, dir: baseDir})
    if(!branchname){
        throw new Error("cannot determine branchname")
    }
    return branchname
}


const getTags = async (baseDir: string): Promise<string[]>=>{
    return listTags({ fs,dir: baseDir})
}
const getCommits = async (baseDir: string, depth: number = 0): Promise<ReadCommitResult[]>=>{
    return log({ fs, dir: baseDir, depth })
}

