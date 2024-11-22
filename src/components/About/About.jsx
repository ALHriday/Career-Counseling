import { FaQuestionCircle } from "react-icons/fa";

const About = () => {

    return (
        <div className="min-h-screen">
            <div className="text-slate-200 mt-6 p-6 border">
                <p className="font-bold mb-1">CEO, Career Counceling.</p>
                At Career Counseling, we believe that everyone deserves a fulfilling career. Founded by a team of passionate career coaches and industry experts, we are here to provide the tools, resources, and guidance needed to help you unlock your professional potential. Whether you are starting out, transitioning careers, or aiming for your next promotion, we are here to guide you every step of the way.
                Our Mission
                To empower individuals to thrive in their careers with personalized advice, professional resources, and actionable insights.
            </div>

            <div className="inline-flex text-3xl font-bold p-4 mt-12">
                <h1>FAQ About Career Counseling... </h1>
                <FaQuestionCircle />
            </div>

            <div className="join join-vertical w-full px-4 pb-12">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">1. What is career counseling?</div>
                    <div className="collapse-content">
                        <p>Career counseling is a process that helps individuals understand their skills, interests, and values to make informed career decisions. A counselor provides guidance on choosing a career path, preparing for job interviews, or transitioning to a new field.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">2. Who can benefit from career counseling?</div>
                    <div className="collapse-content">
                        <p>Career counseling is beneficial for students exploring career options, professionals seeking a career change, or anyone looking to align their work with their passions and skills.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">3. What services do career counselors provide?</div>
                    <div className="collapse-content">
                        <p>Career counselors offer services such as:
                        <br /> * Resume and cover letter writing
                        <br /> * Career assessments and personality tests
                        <br /> * Job search strategies
                        <br /> * Interview preparation
                        <br /> * Career development planning
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">4. Is career counseling only for students?</div>
                    <div className="collapse-content">
                        <p>No. Career counseling is for people at any stage of their career, whether you are a student, a recent graduate, a mid-career professional, or someone considering retirement.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">5. How long does career counseling take?</div>
                    <div className="collapse-content">
                        <p>
                        The duration varies depending on your goals and challenges. Some clients may need a single session, while others benefit from ongoing support over weeks or months.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;