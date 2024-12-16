import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faLeaf, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";
import { Link,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
        <HelmetProvider>
            <Helmet> <title>Đăng nhập</title> </Helmet>

            <div className="wrap-form-login">
                <div className="login-box">
                    <h1>
                        Đăng nhập
                        <FontAwesomeIcon icon={faCoffee} />
                    </h1>

                    <div className="input-box">
                        <label htmlFor="">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="email" placeholder="Email" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="">
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" placeholder="Mật khẩu"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <Link to={'/password_reset'}><p>Quên mật khẩu</p></Link>
                    </div>

                    <div className="login-box-btn">
                        <button className="login-btn">
                            Đăng nhập
                            <FontAwesomeIcon icon={faLeaf} style={{marginLeft: '5px'}}/>
                        </button>
                    </div>  

                    <div className="label-register">
                        <p>Chưa có tài khoản?</p>
                        <Link to={'/register'}><p>Đăng ký</p></Link>
                    </div>

                    <div className="bottom-box">
                        <div className="box-icons">
                            <FontAwesomeIcon className="fa-fb" icon={faFacebook} />
                            <FontAwesomeIcon className="fa-gg" icon={faGoogle} />
                            <FontAwesomeIcon className="fa-tt" icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </div>

        </HelmetProvider>
    </>
  );
}
