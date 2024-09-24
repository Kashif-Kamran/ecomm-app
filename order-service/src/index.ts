import app from "./app"
import { connectToDb } from "./databases/mongodb/connection";
connectToDb();
app.listen(3001, () => {
    console.log("Listening on port 3001");
});
