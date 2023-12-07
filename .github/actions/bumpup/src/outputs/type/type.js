import {determineCommitType} from "./determineCommitType.js";
import {determineHighestCommitType} from "./determineHighestCommitType.js";
import {parseCommitMessage} from "./parseCommitMesage.js";
import {getCommitMessages} from "../../lib/git/getCommitMessages.js";

export const getType = async(currentversion,dir,prerelease, messages)=>{
    if(currentversion === '0.0.0'){
        return 'patch'
    }
    const commitTypes = messages.map(determineCommitType(prerelease))
    return determineHighestCommitType(commitTypes)
}