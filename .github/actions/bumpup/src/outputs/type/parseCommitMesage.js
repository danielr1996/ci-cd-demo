
import * as conventionalCommitsParser from 'conventional-commits-parser'

export const parseCommitMessage = (message)=> {
    try {
        return conventionalCommitsParser.sync(message)
    } catch (_) {
        return {
            type: "",
            notes: [],
        };
    }
}