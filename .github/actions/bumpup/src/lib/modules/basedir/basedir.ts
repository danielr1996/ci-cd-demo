import {findUp} from 'find-up';

export type Input = {}

export type Output = {
 basedir: string
}

export default async (input: Input): Promise<Output>=>{
    const gitDir = await findUp('.git',{type: 'directory'})
    const basedir = gitDir.replace(/(\/.git$)/,'')
    return {basedir}
}