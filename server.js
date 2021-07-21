/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 4000;
require("dotenv").config();
require("./auth/passport");
app.set("view engine", "ejs");

/* ====  Middleware  ==== */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// session middleware
const session = require("express-session");
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
// session middleware
app.use(
	session({
		secret: "hail satan",
		resave: false,
		saveUninitialized: true,
	})
);

// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
});

/* ====  Routes & Controllers  ==== */
// Home Route
app.get("/", (req, res) => {
	res.render("index", {
		user: req.user,
	});
});


// 404 route
app.get((req, res) => {
	res.send("404! Error! Page not found :(");
});
// Internal Routes
app.use("/users", routes.users);
app.use("/entries", routes.entries);
app.use("/comments", routes.comments);
app.use("/auth", routes.auth);

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`CodexCoven is live at http://localhost:${PORT}`);
});
