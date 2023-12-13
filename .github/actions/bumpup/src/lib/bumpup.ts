import {Output as BaseDirOutput} from "./modules/basedir/basedir.js";
import {Output as GitOutput} from "./modules/git/git.js";
import {Output as VersionOutput} from "./modules/currentversion/currentversion.js";
import {Output as Commitoutput} from "./modules/git/commits.js";
import {Output as PreReleaseOutput} from "./modules/prerelease/prerelease.js";
import {Output as NextVersionOutput} from "./modules/nextversion/nextversion.js";
import {Output as TypeOutput} from "./modules/type/type.js";
import {Output as ChangelogOutput} from "./modules/changelog/changelog.js";


export type Output = BaseDirOutput & GitOutput & VersionOutput & Commitoutput & PreReleaseOutput & NextVersionOutput & TypeOutput & ChangelogOutput
export const bumpup = async (modules: any[]): Promise<Output> =>{
    let result= {}
    for(const module of modules){
        result = {
            ...result,
            ...(await module(result))
        }
    }

    return result as Output
}


