import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import conn from "./config/db.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";

const app = express();

// Path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/admin", adminRoutes);
app.use("/", userRoutes);

// DB check
// conn.connect((err) => {
//   if (err) throw err;
//   console.log("✅ Database connected!");
// });

// Start server
app.listen(2000, () => {
  console.log("🚀 Server running on 2000");
});

