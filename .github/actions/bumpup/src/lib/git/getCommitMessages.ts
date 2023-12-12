import {git, fs} from "../../deps.js";

export const getCommitMessages = async (currentversion, dir)=>{
        const commits = await git.log({ fs, dir });
        if(currentversion !== '0.0.0'){
                const tagOid = await git.resolveRef({ fs, dir, ref: currentversion });
                const tagCommit = await git.readCommit({ fs, dir, oid: tagOid });
                const position = commits.map((c) => c.oid).indexOf(tagCommit.oid);
                const relevantCommits = commits.slice(0, position).map((c) => c.commit)
                return relevantCommits.map((c) => c.message);
        }
        return commits.map((c) => c.commit).map((c) => c.message)
}