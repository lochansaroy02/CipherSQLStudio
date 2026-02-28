import { Link } from "react-router-dom";
import { useQuestionStore } from "../store/QuestionStore";
import '../styles/_home.scss';

const Home = () => {
    const { questions } = useQuestionStore()

    const getDifficultyClass = (difficulty: string) => {
        switch (difficulty) {
            case "EASY":
                return "easy";
            case "MEDIUM":
                return "medium";
            case "HARD":
                return "hard";
            default:
                return "";
        }
    };

    return (
        <div className="home-main">
            <h1>Questions</h1>

            <div className="question-container">
                {questions.map((item: any) => (
                    <Link className="question-item" to={`/question/${item.id}`}>
                        <div className="question-box">

                            <h2>{item.title}</h2>
                            <h3 className={getDifficultyClass(item.difficulty)}>
                                {item.difficulty.toLowerCase()}
                            </h3>
                        </div>

                        <p>{item.description}</p>

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;