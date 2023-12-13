import {describe, expect, test} from '@jest/globals';
import {bumpup} from "./bumpup.js";
import relevantcommitsModule from "./modules/git/commits.js";
import prereleaseModule from "./modules/prerelease/prerelease.js";
import typeModule from "./modules/type/type.js";
import nextversionModule from "./modules/nextversion/nextversion.js";
describe('bumpup', () => {
    test('given an empty repository should return default values', async() => {
        const modules = [
            ()=>({branchname: 'main', currentversion: '0.0.0', commits: []}),
            prereleaseModule,
            relevantcommitsModule,
            typeModule,
            nextversionModule
        ]

        const {isPrerelease, type, nextversion} = await bumpup(modules)
        const actual = {isPrerelease, type, nextversion}
        expect(actual).toStrictEqual({isPrerelease: false, type: 'none', nextversion: null});
    });

    test('given a feat commit', async() => {
        const modules = [
            ()=>({branchname: 'main', currentversion: '1.0.0', relevantCommits: ["feat: do something"]}),
            prereleaseModule,
            typeModule,
            nextversionModule
        ]

        const {isPrerelease, type, nextversion} = await bumpup(modules)
        const actual = {isPrerelease, type, nextversion}
        expect(actual).toStrictEqual({isPrerelease: false, type: 'minor', nextversion: '1.1.0'});
    });

    // test when multiple prerelease versions exist, that the next prerelease version is based on the branch name
});