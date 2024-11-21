
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {

    const { setUser, createUser, notify } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleRegisterNewUser = (e) => {
        e.preventDefault();
        // createUser(email)
        // const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(displayName, email, password);

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate('/');
                notify('Account Registration Successfull');
                e.target.email.value = '';
                e.target.password.value = '';
            }).then(error => error);
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
                        <input type="text" name="PhotoURL" placeholder="Enter your photo Link" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <h4 className="p-4 text-center">{`Already have an account`}<Link className="underline text-blue-700 ml-2" to='/LogIn'>LogIn</Link></h4>
            </div>

        </div >
    );
};

export default Register;