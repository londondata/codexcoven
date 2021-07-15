/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const homeRouter = require("./routes/index");

/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = 4000;
app.set("view engine", "ejs");

/* ====  Middleware  ==== */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));

/* ====  Routes  ==== */
app.use("/", homeRouter);

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`CodexCoven is live at http://localhost:${PORT}`);
});
