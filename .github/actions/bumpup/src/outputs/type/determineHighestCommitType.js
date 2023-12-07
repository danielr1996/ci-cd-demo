import {match} from "../../lib/match.js";

export const determineHighestCommitType = (types) => types.reduce((acc, cur) => match([
    [acc === "none", cur],
    [acc === "patch" && cur !== "none", cur],
    [acc === "minor" && cur === "major", cur],
    [acc === "major", acc],
    [true, acc],
]), "none");