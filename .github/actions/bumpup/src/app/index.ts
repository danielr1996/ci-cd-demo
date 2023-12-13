import * as core from '@actions/core'
import prereleaseModule from "../lib/modules/prerelease/prerelease.js";
import relevantcommitsModule from "../lib/modules/git/commits.js";
import typeModule from "../lib/modules/type/type.js";
import nextversionModule from "../lib/modules/nextversion/nextversion.js";
import {bumpup} from "../lib/bumpup.js";

try{

    const modules = [
        ()=>({branchname: 'main', currentversion: '0.0.0', commits: []}),
        prereleaseModule,
        relevantcommitsModule,
        typeModule,
        nextversionModule
    ]

    const {isPrerelease, type, nextversion, currentversion, changelog,} = await bumpup(modules)
    core.info("prerelease="+isPrerelease);
    core.setOutput("prerelease", isPrerelease);

    core.info("currentversion="+currentversion);
    core.setOutput("currentversion", currentversion);

    core.info("type="+type);
    core.setOutput("type", type);

    core.info("nextversion="+nextversion);
    core.setOutput("nextversion", nextversion);

    core.info("changelog="+changelog);
    core.setOutput("changelog", changelog);
}catch (error: any){
    core.setFailed(error.message)
}

