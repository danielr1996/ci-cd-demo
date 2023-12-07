
import * as semver from 'semver'
export const nextversion = (currentversion, type, branchname) => {
    return semver.inc(currentversion,type,{},branchname.replace('/','-'))
}