import React from 'react'
import "./registration.css"


function registration() {
  return (
    <div className="container">
      {/* registration form */}
      <div className="a_box">
      <div class="form-box" id="register">
      <h2>Register/Login</h2>
      <form>
          <input type="text" placeholder="Full Name" required/>
          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="contact.no" required/>
          <input type="text" placeholder="current Address" required/>
          <input type="password" placeholder="Password" required/>
          <button type="submit">Register</button>
          <p>Already have an account?<a href="#" onclick="showLogin()">Login</a> </p>
      </form>
      </div>


      {/* login from */}
      <div class="form-box" id="login" style={{display:"none"}}>
      <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Login</button>
                <p>Don't have an account<a href="#" onclick="showRegister()">Register</a></p>
            </form>
      </div>
      </div>
    </div>
    
  )
  
}

export default registration
