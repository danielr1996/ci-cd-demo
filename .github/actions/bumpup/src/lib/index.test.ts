import {bumpup} from "./index.js";

import {describe, expect, test} from '@jest/globals';

describe('bumpup', () => {
    test('given an empty repository should return default values', async() => {
        const res = await bumpup('main','0.0.0',[])
        expect(res).toStrictEqual({prerelease: false, type: 'none', nextversion: null, changelog: ''});
    });

    test('given a feat commit', async() => {
        const res = await bumpup('main','1.0.0',[
            {header: '',type: 'feat'}
        ])
        expect(res).toStrictEqual({prerelease: false, type: 'minor', nextversion: '1.1.0', changelog: ''});
    });

    // test when multiple prerelease versions exist, that the next prerelease version is based on the branch name
});