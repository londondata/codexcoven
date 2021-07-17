/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */ 

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
// logger
app.use((req, res, next) => {
	console.log(req.url, res.method);
	next();
});

/* ====  Routes & Controllers  ==== */
// Home Route
app.get("/", (req, res) => {
	res.render("home");
});

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`CodexCoven is live at http://localhost:${PORT}`);
});
