import {git, fs, semver} from '../../deps.js'

export const currentversion = async(dir, branch)=>{
    let tags = await git.listTags({ fs,dir})
    return tags
        .filter(f(branch))
        .sort(semverComparator)[0] || '0.0.0';
}

const f = (branch)=>(tag)=>{
    const version = new semver.SemVer((tag))
    const isPre = version.prerelease.length >0
    if(isPre){
        return version.prerelease[0] === branch.replace('/','-')
    }
    return true
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
