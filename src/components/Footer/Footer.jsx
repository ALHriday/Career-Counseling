import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
            <div className="flex flex-col justify-center items-start p-4 border-b-2 gap-1 col-span-1 md:col-span-3">
                <h2 className="text-xl font-bold">Career Counseling</h2>
                <p className="text-sm">Your Partner in Career Development.</p>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h2 className="text-xl">Stay Connected with us</h2>
                <div className="flex flex-col gap-1">
                    <p className="inline-flex gap-2 items-center"><FaFacebookSquare /> Facebook</p>
                    <p className="inline-flex gap-2 items-center"><FaSquareTwitter /> Twitter</p>
                    <p className="inline-flex gap-2 items-center"><BsFillThreadsFill /> Threads</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 p-4">
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
            </div>

            <div className="p-4">
                <h1 className="mb-2 text-xl">Share your Goal...</h1>
                <div className="flex flex-col gap-1">
                    <input className="p-2 rounded-md" type="text" />
                    <button className="btn btn-accent">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;