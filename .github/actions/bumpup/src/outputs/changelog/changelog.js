export const changelog = async(commitMessage)=>{
    return commitMessage.map(({subject})=>subject).join('\n')
}