import { Router } from "express";

const authrouter = Router();


authrouter.post("/register", registerValidator, register)

export default authrouter