import {fs,git} from '../../deps.js'
export const getBranchname = async(dir)=>{
    return git.currentBranch({fs, dir})
}