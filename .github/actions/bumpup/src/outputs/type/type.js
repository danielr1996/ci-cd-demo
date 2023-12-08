import {determineCommitType} from "./determineCommitType.js";
import {determineHighestCommitType} from "./determineHighestCommitType.js";

export const getType = async(currentversion,dir,prerelease, messages)=>{
    const commitTypes = messages.map(determineCommitType(prerelease))
    return determineHighestCommitType(commitTypes)
}