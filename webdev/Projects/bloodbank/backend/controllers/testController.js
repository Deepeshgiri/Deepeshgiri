export const testController = (req,res)=>{
   res.status(200).send(
    {
        message:"test route working",
        success:true
    }
   );
};