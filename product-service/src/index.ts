import app from "./app"
import { connectToDb } from "./database/mongodb/connection";
connectToDb();
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
