import { BrowserRouter, Routes, Route } from 'react-router';
import Login from "./features/auth/pages/Login";
import RegistrationForm from './features/auth/pages/Register';
import { Heading1 } from 'lucide-react';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Welcome to the App</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegistrationForm />} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes;