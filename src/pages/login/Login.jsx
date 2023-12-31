import "./login.css";

export default function Login() {
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
                           <input type="email" className="loginInput" placeholder="Email" />
                           <input type="password" className="loginInput" placeholder="Password" />
                           <button className="loginButton">Login</button>
                           <span className="loginforgot">Forgot password ?</span>
                           <button className="loginRegisterButton">Create a new account</button>
                      </div>
                 </div>
            </div>  
        </div>
  )
}
