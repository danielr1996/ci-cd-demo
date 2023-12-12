
import * as semver from 'semver'
export const nextversion = (currentversion: string, type: string, branchname: string) => {
    return semver.inc(currentversion,type,{},branchname.replace('/','-'))
}