import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({ path: "./data/config.env" });

//using middlewares
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//we use router to split our routes into different files
//const router = express.Router();

// mongoose
//   .connect("mongodb://127.0.0.1:27017", { dbName: "node_api" })
//   .then(() => console.log("Database connected"))
//   .catch((e) => console.log(e));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("user", userSchema);

// app.post("/users/new", async (req, res) => {
//   const { name, email, password } = req.body;
//   await User.create({
//     name,
//     email,
//     password,
//   });
//   res
//     .status(201)
//     .cookie("someCookie", "rofl")
//     .json({ succes: true, message: "registered successfully" });
// });

// app.get("/users/all", async (req, res) => {
//   const users = await User.find({});
//   //   console.log(req.query);

//   //   const keyword = req.query.keyword;
//   //   console.log(keyword);

//   res.json({
//     success: true,
//     users,
//   });
// });

// //keep the dyamic routes below because due to js interpretor it will take it as a dynamic route
// //now this below route will stay as specific route because it is above the dynamic route
// app.get("/userid/special", (req, res) => {
//   res.json({
//     success: true,
//     message: "Just Joking",
//   });
// });

// //dynamic url
// app.get("/userid/:id", async (req, res) => {
//   //const { id } = req.query;
//   const { id } = req.params;
//   const user = await User.findById(id);

//   console.log(req.params);
//   res.json({
//     success: true,
//     user,
//   });
// });
