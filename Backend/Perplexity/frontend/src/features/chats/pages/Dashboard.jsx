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

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
};

export default Dashboard;
