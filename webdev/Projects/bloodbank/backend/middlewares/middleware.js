import jwt from 'jsonwebtoken'

export const requireSignIn = async (req,res,next)=>{
    try {
        const token = req.headers.authorization
        console.log(token)
        jwt.verify(token, process.env.JWT_SECRET, (err,decode)=>{
            if(err){
                return res.status(401).send({
                    success:false,
                    message:"unauth access"
                })
            }else{
                req.body.userId= decode.userId
                next()
            }
        })
    } catch (error) {
        return res.status(401).send({
            success:false,
            error,
            message:"unauthorized access"
        })
        
    }
}