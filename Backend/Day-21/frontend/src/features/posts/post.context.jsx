import {createContext, useState} from 'react';



export const PostContext = createContext()



export const postContextProvider = ({children}) => {

    const [ loading, setLoading ] = useState(false)
    const [Post, setPost] = useState(null)
    const [feed, setfeed] = useState(null);

    return(
        <PostContext.Provider value= {{loading, setLoading, post, setPost, feed, setFeed}}>

        {children}

        </PostContext.Provider >
    )

}