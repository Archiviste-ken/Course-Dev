import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat";
import { useEffect } from "react";

const Dashboard = () => {
  const chat = useChat();
  const { user } = useSelector((state) => state.auth);

  const { initialzeSocket } = useChat();

  useEffect(() => {
    chat.initialzeSocket();
  }, []);

  console.log(user);

  return <main className="h-screen w-full flex bg-gray-800"></main>;
};

export default Dashboard;
