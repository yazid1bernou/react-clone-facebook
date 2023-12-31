import "./register.css";

export default function Register() {
  return (
        <div className='login'>
            <div className="loginWrapper">
                 <div className="loginLeft">
                     <h3 className="loginLogo">YazidSocial</h3>
                     <span className="loginDesc">
                        Connect with friends and the word around you on YazidSocial
                     </span>
                 </div>
                 <div className="loginRight">
                      <div className="loginBox">
                           <input type="text" className="loginInput" placeholder="Username" />
                           <input type="email" className="loginInput" placeholder="Email" />
                           <input type="password" className="loginInput" placeholder="Password" />
                           <input type="password" className="loginInput" placeholder="Password Again" />
                           <button className="loginButton">Sign Up</button>
                          
                           <button className="loginRegisterButton">Login Into Account</button>
                      </div>
                 </div>
            </div>  
        </div>
  )
}
