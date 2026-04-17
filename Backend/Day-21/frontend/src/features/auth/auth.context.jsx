            // STATE LAYER FOR AUTHENTICATION
            //state layer is responsible for managing the state of the application, such as user authentication status, user information, and loading states. It provides a way to share this state across different components in the application without having to pass props down through multiple levels of the component tree. The state layer can be implemented using React's Context API, Redux, or other state management libraries. It allows components to access and update the authentication state as needed, making it easier to manage user sessions and handle authentication-related logic throughout the application.
import {createContext, useState } from 'react';  // React gives you a way to share data globally across components without passing props manually at every level.

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

        const[ user, setUser] = useState(null);
        const [loading, setLoading ]  = useState(false);

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )

}