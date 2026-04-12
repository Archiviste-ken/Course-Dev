import mongoose from "mongoose"
import {config} from "./config.js"


export const connectToDatabase = async () => {
    try {