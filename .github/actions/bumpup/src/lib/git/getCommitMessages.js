import {git, fs} from "../../deps.js";

export const getCommitMessages = async (currentversion, dir)=>{
    try{
        const tagOid = await git.resolveRef({ fs, dir, ref: currentversion });
        const tagCommit = await git.readCommit({ fs, dir, oid: tagOid });
        const commits = await git.log({ fs, dir });
        const position = commits.map((c) => c.oid).indexOf(tagCommit.oid);
        const relevantCommits = commits.slice(0, position).map((c) => c.commit)
        return relevantCommits.map((c) => c.message);
    }catch (_){
        return []
    }
}