import {fs,git} from '../../deps.js'
export const getBranchname = async(dir): Promise<string>=>{
    const branchname = await git.currentBranch({fs, dir})
    if(!branchname){
        throw new Error()
    }
    return branchname
}