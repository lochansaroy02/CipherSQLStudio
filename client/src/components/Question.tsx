import axios from "axios"
import { LoaderCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import JsonTable from "ts-react-json-table"
import SQLEditor from "../components/Editor"
import { useQueryStore } from "../store/queryStore"
import { useQuestionStore } from "../store/QuestionStore"
import "../styles/_question.scss"



interface QuestionProps {
    id: string
    title: string,
    description: string,
    schemaInfo: string,
    difficulty: string

}
const QuestionPage = () => {
    const { id } = useParams()
    const [question, setQuestion] = useState<any>(null)
    const { questions } = useQuestionStore()
    const { queryData, runQuery, setQueryData } = useQueryStore()
    const [query, setQuery] = useState<string | undefined>("");
    const [hint, setHint] = useState<string | undefined>("")
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    useEffect(() => {
        const data = questions.filter((item) => item.id == id)
        setQuestion(data[0])
    }, [id, questions])


    const onRun = (query: string | undefined) => {
        if (!query) return
        runQuery(query, id)
    }

    useEffect(() => {
        setHint("")
        setQueryData([])
    }, [question])
    const getHint = async () => {
        setIsLoading(true)
        try {
            let response: any;
            if (question.description) {
                response = await axios.post(`${import.meta.env.VITE_API_URL}/ai/hint`, {
                    question: question.description
                })
            }

            setHint(response.data.data)

        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }



    if (!question) return <h2>Loading...</h2>

    return (
        <div >
            {/* left side */}

            <div className="question-layout" >
                <div className="question-left">
                    <div className="left-div">
                        <h1>{question.title}</h1>
                        <p>{question.description}</p>
                        <p>Difficulty: {question.difficulty}</p>
                    </div>
                    <div className="table">
                        <div className="output-heading-div">
                            <h1>Output</h1>
                            <button onClick={() => {
                                setQueryData([])
                            }}>clear Output</button>
                        </div>
                        {queryData && <JsonTable rows={queryData || []} />}
                    </div>

                </div>
                <div className="question-right">
                    <div className="hint-box">
                        <div className={"hint"}>
                            {hint ? hint : "hint will be show here"}
                        </div >
                        <button onClick={getHint} className="hint-button">
                            {isLoading ? <LoaderCircle className="loader" /> :
                                <h1> get hint</h1>
                            }
                        </button>
                    </div>
                    <div >

                        <SQLEditor onRun={onRun} query={query} setQuery={setQuery} />

                    </div>

                </div>
            </div>




        </div>
    )
}

export default QuestionPage