const express = require("express");
const app = express();
const cors = require("cors");
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/companies", companyRoutes);
app.use("/users", userRoutes);
app.use("/jobs", jobRoutes);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
