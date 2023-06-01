import React, { useState } from "react";
import { Container } from "reactstrap";
export function Form1(){

const [data,setdata]=useState({
    name:"",
    email:""
})



    const handleInput = (e) =>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(data)
    }
    return(
        <div>
       {/* <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={data.name} name="name" onChange={handleInput} ></input><br></br>
        <label>Email</label>
        <input type="email" value={data.email} name="email" onChange={handleInput} ></input><br></br>
        <button >Submit</button>
       </form> */}
<Container style={{width:"40%"}}>
<form  onSubmit={handleSubmit}>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form1Example1" class="form-control" onChange={handleInput} />
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form1Example2" class="form-control" />
    <label class="form-label" for="form1Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
</Container>

        </div>
    )
}

// import React, { useState } from "react";
// export function Form1(){

// const [name,setname]=useState("")
// const [email,setemail]=useState("")



    
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         console.log(name,email)
//     }
//     return(
//         <div>
//        <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input type="text"  name="name" onChange={(e)=>setname(e.target.value)} ></input><br></br>
//         <label>Email</label>
//         <input type="email"  name="email" onChange={(e)=>setemail(e.target.value)} ></input><br></br>
//         <button >Submit</button>
//        </form>
//         </div>
//     )
// }