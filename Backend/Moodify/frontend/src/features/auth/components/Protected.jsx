import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export const Protected = ({ children }) => {
  const { user, loading } = useAuth();

  const Navigate = useNavigate();

  if (!loading || !user) {
    Navigate("/login");
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
};
