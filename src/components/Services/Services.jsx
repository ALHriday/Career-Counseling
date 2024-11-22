import { useRef, useState } from "react";
import Cards from "../Cards/Cards";

const Services = () => {
    const [comments, setComments] = useState([]);

    const textRef = useRef();

    const handleComment = () => {
        const comment = [...comments, textRef.current.value]
        setComments(comment);
    }

    return (
        <div className="min-h-screen p-6 flex flex-col">
            <div className="py-6">
                <Cards></Cards>
            </div>

            <div className="">
                <div className="grid grid-cols-1 gap-6 ml-auto px-4 py-8">
                    <h1 className="text-2xl font-bold py-2 border-b">Share Your Comments Here....</h1>
                    <div className="mt-4">
                        {comments && comments.map((c, idx) => <p key={idx}>{c}</p>)}
                    </div>
                    <div>
                        <h1 className="text-xl mb-2">Share Your Opinion...</h1>
                        <textarea ref={textRef} className="bg-slate-200 rounded-md text-black w-full p-2 min-h-32 h-[160px] max-h-[200px]"></textarea>
                        <div className="text-right">
                            <button onClick={handleComment} className="btn btn-accent btn-md">Comment</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;