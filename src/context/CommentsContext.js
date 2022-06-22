import { createContext, useState } from "react";
import data from '../data.json';


const CommentsContext = createContext()

export const CommentsProvider = ({children}) => {

    const [comments, setComments] = useState(data);


    return (
        <CommentsContext.Provider value={{
            comments, setComments
        }}>
            {children}
        </CommentsContext.Provider>
    )
}


export default CommentsContext;