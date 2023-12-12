import {findUp} from 'find-up';

export const findBaseDir = async ()=>{
    const gitDir = await findUp('.git',{type: 'directory'})
    return gitDir.replace(/(\/.git$)/,'')
}