import * as core from '@actions/core'
import {getBranchname} from "./lib/git/getBranchname.js";
import {currentversion as getCurrentVersion} from "./outputs/currentversion/currentversion.js";
import {getCommitMessages} from "./lib/git/getCommitMessages.js";
import {parseCommitMessage} from "./outputs/type/parseCommitMesage.js";
import {bumpup} from "./lib/index.js";

const dobump = async (branchname, currentversion,messages)=>{
    const {prerelease,type,nextversion, changelog} = await bumpup(branchname,currentversion,messages)

    core.info("prerelease="+prerelease);
    core.setOutput("prerelease", prerelease);

    core.info("currentversion="+currentversion);
    core.setOutput("currentversion", currentversion);

    core.info("type="+type);
    core.setOutput("type", type);

    core.info("nextversion="+nextversion);
    core.setOutput("nextversion", nextversion);

    core.info("changelog="+changelog);
    core.setOutput("changelog", changelog);
}

const dir = '.'
const branchname = await getBranchname(dir)
const currentversion = await getCurrentVersion(dir, branchname)
const messages = (await getCommitMessages(currentversion, dir)).map(parseCommitMessage)
dobump(branchname, currentversion,messages).catch((error)=>core.setFailed(error.message))

