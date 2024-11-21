
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


const Register = () => {

    const { setUser, createUser, notify, passwordVerification, setPasswordVerification } = useContext(AuthContext);
    const [isTrue, setIstrue] = useState(true);

    const navigate = useNavigate();
    const passRef = useRef();


    const handleRegisterNewUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log(name, photo);
        

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate('/');
                notify('Account Registration Successfull');
                e.target.email.value = '';
                e.target.password.value = '';
                if (result.user) {
                    setPasswordVerification('Registration Successfull')
                } else {
                    setPasswordVerification(null)
                }
            }).then(error => error
        );      
    }

    const handleToggle = () => {
        
        if (isTrue) {
            passRef.current.type = 'text';
        } else {
            passRef.current.type = 'password';
        }     
    }

    return (

        < div className="hero bg-base-200 min-h-screen py-6">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegisterNewUser} className="card-body">
                    <h1 className="text-5xl font-bold my-6">Register now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo Link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input ref={passRef} type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <div onClick={() => handleToggle(setIstrue(!isTrue))} className="absolute bottom-[18%] right-[5%]">
                            {isTrue ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <h1 className="text-red-500 p-2">{ passwordVerification }</h1>
                    </div>
                </form>
                <h4 className="p-4 text-center">{`Already have an account`}<Link className="underline text-blue-700 ml-2" to='/LogIn'>LogIn</Link></h4>
            </div>

        </div >
    );
};

export default Register;