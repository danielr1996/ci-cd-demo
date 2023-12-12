import {Output as GitOutput} from "../git/git.js";
import {SemVer, lt, gt} from 'semver'

export type Input = GitOutput

export type Output = {
    currentversion: string
}

export default async(input: Input): Promise<Output>=>{
    const currentversion = input.tags
        .filter(filterBranchTags(input.branchname))
        .sort(semverComparator)[0] || '0.0.0';

    return {
        currentversion: currentversion
    }
}

const filterBranchTags = (branch: string)=>(tag: string)=>{
    const version = new SemVer((tag))
    const isPre = version.prerelease.length >0
    if(isPre){
        return version.prerelease[0] === branch.replace('/','-')
    }
    return true
}

const semverComparator = (a: string,b: string)=>{
    if(lt(a,b)){
        return 1
    }
    if(gt(a,b)){
        return -1
    }
    return 0
}

