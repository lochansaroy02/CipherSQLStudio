
import axios from 'axios';
import { create } from 'zustand';

interface QueryProps {
    queryData: any[]
    setQueryData: (data: any) => void
    runQuery: (query: string | undefined, questionId: string | undefined) => Promise<any>
}

export const useQueryStore = create<QueryProps>((set, get) => ({
    queryData: [],
    setQueryData: (data: any) => {
        set({ queryData: data });
    },
    runQuery: async (query: string | undefined, questionId: string | undefined) => {
        try {

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/query/execute`, {
                query, questionId
            })

            set({
                queryData: response.data
            })
        } catch (error) {
            console.error(error);
            return null

        }
    }
}));

