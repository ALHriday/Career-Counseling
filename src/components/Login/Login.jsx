import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const { logInUser, handleRegister, setUser } = useContext(AuthContext);

    const handleRegisterUser = () => {
        handleRegister()
        .then(result => {
            setUser(result.user);
            navigate('/');
            console.log('LogIn Successfull');
        })
        .catch(error => error)
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
                navigate('/')
                console.log('LogIn Successfull');
            }
            ).catch(error => error.message)
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
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
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