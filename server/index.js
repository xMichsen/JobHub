const express = require("express");
const app = express();
const cors = require("cors");
const companyRoutes = require("./routes/companyRoutes");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/company", companyRoutes);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
