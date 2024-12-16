/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faHeart, faPhone, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { RegisterAPI } from '../app/api/auth';
import { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePasswordC] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = () => {
        RegisterAPI(name, email, password, rePassword, phone);
    }

    return (
        <div className="wrap-form-register ">
            <div className="register-box">
                <h1>Đăng ký
                    <FontAwesomeIcon icon={faLeaf} />
                </h1>

                <div className="input-box-register">
                    <label htmlFor="">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" placeholder='Họ và tên' 
                            value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>

                    <label htmlFor="">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" placeholder="Email" 
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>

                    <label htmlFor="">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Mật khẩu" 
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>

                    <label htmlFor="">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Nhập lại mật khẩu" 
                            value={rePassword} onChange={(e) => setRePasswordC(e.target.value)}/>
                    </label>

                    <label htmlFor="">
                        <FontAwesomeIcon icon={faPhone} />
                        <input type="phone" placeholder="Số điện thoại" 
                            value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                </div>
                
                <div className='hr-box'>
                    <hr />
                    <FontAwesomeIcon icon={faHeart} />
                    <hr />
                </div>

                <button className='login-box-btn' onClick={handleRegister}>Đăng ký tài khoản</button>

                <div className="label-login">
                    <p>Đã có tài khoản!!...</p>
                    <Link to={'/login'}><p>Đăng nhập</p></Link>
                </div>

                <div className='bottom-box'>
                    <div className='box-icons'>
                        <FontAwesomeIcon className='fa-fb' icon={faFacebook} />
                        <FontAwesomeIcon className='fa-gg' icon={faGoogle} />
                        <FontAwesomeIcon className='fa-tt' icon={faTwitter} />
                    </div>
                </div>
            </div>
        </div>
    );
}