
import axios from 'axios';
import { create } from 'zustand';


interface Question {
    id: string
    title: string,
    description: string,
    schemaInfo: string,
    difficulty: string

}
interface QuestionProps {
    questions: Question[],
    setQuestionsData: (personData: any) => void
    getQuestions: () => Promise<any>
}

export const useQuestionStore = create<QuestionProps>((set) => ({
    questions: [],
    setQuestionsData: (data: any) => {
        set({
            questions: data
        })
    },
    getQuestions: async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/question/get`)
            set({
                questions: response.data.data
            })
        } catch (error) {
            console.error(error);
            return null

        }
    }
}));

