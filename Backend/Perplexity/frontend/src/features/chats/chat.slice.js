import { createSlice } from "@reduxjs/toolkit"; 

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: {},
    currentChatId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setChats, setCurrentChatId, setLoading, setError } =
  chatSlice.actions;

export default chatSlice.reducer;

// chats = {
//   "docker and aws": [{
//     messages: [
//         {
//             role: "user",
//             content: "What is docker?"
//         },
//         {
//             role: "ai",
//             content: "Docker is a platform that allows developers to easily create, deploy, and run applications in containers. Containers are lightweight, portable, and self-sufficient units that can run consistently across different environments. Docker provides tools and services to manage containerized applications, making it easier to develop, test, and deploy software."
//         }
//     ],
//     id: "docker and aws",
//     lastUpdated:"2024-06-01T12:00:00Z"
//   }

//   ],
// };
