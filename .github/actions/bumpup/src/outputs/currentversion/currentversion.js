import {git, fs, semver} from '../../deps.js'

export const currentversion = async(dir)=>{
    let tags = await git.listTags({ fs,dir})
    return tags.sort(semverComparator)[0] || '0.0.0';
}

const semverComparator = (a,b)=>{
    if(semver.lt(a,b)){
        return 1
    }
    if(semver.gt(a,b)){
        return -1
    }
    return 0
}