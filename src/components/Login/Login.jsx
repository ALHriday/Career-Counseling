import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/firebase.init";

import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
    const { logInUser, handleRegister, setUser, notify, setEmailVerification, emailVerification } = useContext(AuthContext);

    const emailRef = useRef();
    const [isTrue, setIstrue] = useState(true);
    const passRef = useRef();

    const handleRegisterUser = () => {
        handleRegister()
            .then(result => {
                setUser(result.user);
                navigate('/');
                notify('LogIn Successfull');
            })
            .catch(error => setEmailVerification(error.code))
    }

    const navigate = useNavigate();

    const logInNewUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
            .then(() => {
                e.target.email.value = '';
                e.target.password.value = '';
                navigate('/');
                notify('LogIn Successfull');
            }
            ).catch(error => setEmailVerification(error.code))
    }

    const handleForgotPassword = () => {

        const email = emailRef.current.value;
        if (!email) {
            setEmailVerification('Please verify your email address');
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setEmailVerification('Reset email password has been sent to your Email.');
                }).catch(error => setEmailVerification(error.code));
        }
    }
    const handleToggle = () => {
        if (isTrue) {
            passRef.current.type = 'text';
        } else {
            passRef.current.type = 'password';
        }    
    }

    return (
        <div className="flex flex-col gap-4 ">
            <div className="hero bg-base-200 min-h-screen py-6">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={logInNewUser} className="card-body">
                        <h1 className="text-5xl font-bold my-6">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passRef} type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <div onClick={() => handleToggle(setIstrue(!isTrue))} className="absolute top-[46%] right-[5%] cursor-pointer">
                            {isTrue ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                            <label onClick={handleForgotPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <h1 className="text-red-500 p-2">{ emailVerification }</h1>
                        </div>
                    </form>
                    
                    <div className="flex justify-center items-center">
                        <button onClick={handleRegisterUser} className="btn btn-sm btn-accent">SignIn With Google</button>
                    </div>
                    
                    <h4 className="p-4 text-center">{`Don't have an account`}<Link className="underline text-blue-700 ml-2" to='/Register'>Register</Link></h4>

                </div>
            </div>

        </div>
    );
};

export default Login;