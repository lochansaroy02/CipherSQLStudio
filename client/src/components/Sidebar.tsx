import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuestionStore } from "../store/QuestionStore";
import "../styles/_sidebar.scss";

const Sidebar = () => {
    const { questions, getQuestions } = useQuestionStore();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getQuestions();
    }, [getQuestions]);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button className="mobile-toggle" onClick={toggleSidebar}>
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Overlay for mobile */}
            <div
                className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                onClick={toggleSidebar}
            />

            <div className={`sidebar-main ${isOpen ? "is-open" : ""}`}>
                <div className="home-div">
                    <Link className="home-button" to={"/"} onClick={() => setIsOpen(false)}>
                        <h2>SQL </h2>
                    </Link>

                    <div className="question-container">
                        {questions.map((q: any) => (
                            <div key={q.id} className="question-item">
                                <Link
                                    className="question-text"
                                    to={`/question/${q.id}`}
                                    onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
                                >
                                    {q.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;