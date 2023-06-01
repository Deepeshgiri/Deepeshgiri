import bcrypt, { hash } from 'bcrypt'

export const hashpassword = async (password)=>{
    try{
        const saltRound =10;
        const hashedpass = await bcrypt.hash(password , saltRound)
        return hashedpass
    }catch (error){
        console.log(error)
    }
}

export const comparePassword = async(password,hashedpass)=>{
    return bcrypt.compare(password,hashedpass)
}