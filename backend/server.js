const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(cors());
app.use(jsonServer.defaults());

app.use(auth);

const rules = auth.rewriter({
  notes: 660,
});
app.use(rules);

app.use(router);

app.listen(5000, () => {
  console.log(`Backend Server running on 
    
        Resources
        http://localhost:5000/users
        http://localhost:5000/bookings
        http://localhost:5000/listings

        Home
        http://localhost:5000`);
});
