import React, { useState } from 'react'
import "./Firebase"
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const App = () => {
  const [isAuth,setIsAuth] = useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const LoginWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result)=>{
     localStorage.setItem("isAuth",true)
     const Photo = result.user.photoURL;
     const Name = result.user.displayName;
     localStorage.setItem("Photo",Photo);
     localStorage.setItem("Name",Name)
     setIsAuth(true)
    })
  }
  return (
    <>
<div className="nav">
  <div className="logo">
 <img src="https://cdn-icons-png.flaticon.com/512/4015/4015248.png" height={40}/> <h2>Sarthak Aahir</h2>
  </div>
  <div className="login">
    {
      ! isAuth ?  (<button onClick={LoginWithGoogle}>
        Login
      </button>) : (<img src={localStorage.getItem("Photo")} height={65} />)}
  </div>
</div>
<div className="home">
<center>
{ ! isAuth ? (<h1>Welcome To User 👋 <br /> I' am Sarthak Yadav 🚀</h1>):
(<h1>Welcome To {localStorage.getItem("Name")}👋 <br /> I' am Sarthak Yadav 🚀</h1>)
} 
<img src="https://cdn.dribbble.com/users/515705/avatars/normal/4db04c2ad83943cb72646acdd600f960.jpg?1611954253"
 height={300} />
<br />
 <button> <a href="https://www.instagram.com/abhishek__yadav_2006/" target={'_blank'}>Follow me</a> </button>
</center>
</div>
    </>
  )
}

export default App