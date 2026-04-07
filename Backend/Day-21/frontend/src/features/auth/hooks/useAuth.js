import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login } from "../../services/auth.api";
import { register } from "../../services/auth.api";
import { getMe } from "../../services/auth.api"; 

export const useAuth = () => {

    const context = useContext(AuthContext);
    
    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async (username, password) => {

        setLoading(true);

        const response = await login(username, password);

}

}