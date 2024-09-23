import { connect } from "mongoose";

const username = 'kashif_new'
const password = 'kashifkam'

export const connectToDb = async (): Promise<void> => {
    try
    {
        await connect(`mongodb+srv://${username}:${password}@cluster0.t9i2bmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Database connection established successfully!");
    } catch (error)
    {
        console.error("Database connection failed:", error);
        throw error;
    }
};