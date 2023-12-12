import {prerelease as isPrerelease} from "../outputs/prerelease/prerelease.js";
import {getType} from "../outputs/type/type.js";
import {nextversion as getNextVersion} from "../outputs/nextversion/nextversion.js";
import {changelog as getChangelog} from "../outputs/changelog/changelog.js";

export const bumpup = async (branchname: string, currentversion: string,messages: any[])=>{
    const prerelease = isPrerelease(branchname)
    const type = await getType(prerelease,messages)
    const nextversion = getNextVersion(currentversion, type, branchname)
    const changelog = await getChangelog(messages)

    return {prerelease, type, nextversion, changelog}
}