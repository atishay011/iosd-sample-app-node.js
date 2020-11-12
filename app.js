const Express = require("express");
const mongoose = require("mongoose");
const app = Express();
require('dotenv/config');
const CommentsRoutes = require('./routes/comments');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use('/comments', CommentsRoutes);
//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        console.error(err);
    });

app.listen(process.env.PORT || 3000);

