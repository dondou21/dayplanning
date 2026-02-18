import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
    children: ReactNode;
}

export const ProtectedRoutes = ({ children }: Props) => {
    const { token } = useAuth();
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;
};