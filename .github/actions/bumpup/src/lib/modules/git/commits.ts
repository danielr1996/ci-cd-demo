import fs from 'fs'
import {resolveRef, readCommit} from 'isomorphic-git'
import {Output as GitOutput} from "../git/git.js";
import {Output as BaseDirOutput} from "../basedir/basedir.js";
import {Output as VersionOutput} from "../currentversion/currentversion.js";

export type Input = GitOutput & VersionOutput & BaseDirOutput

export type Output = {
    relevantCommits: any[]
}

export default async(input: Input): Promise<Output>=>{
    const {currentversion, basedir, commits} = input
    if(currentversion !== '0.0.0'){
        const tagOid = await resolveRef({ fs, dir: basedir, ref: currentversion });
        const tagCommit = await readCommit({ fs, dir: basedir, oid: tagOid });
        const position = commits.map((c) => c.oid).indexOf(tagCommit.oid);
        const relevantCommits = commits.slice(0, position).map((c) => c.commit)
        return {relevantCommits: relevantCommits.map((c) => c.message)}
    }
    return {
        relevantCommits: commits.map((c) => c.commit).map((c) => c.message)
    }
}
