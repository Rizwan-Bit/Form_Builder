const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const formRoute = require('./routes/form');

const app = express();
const PORT = process.env.PORT || 5000;
const DB = "mongodb://localhost/formsDB";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(DB, 
                    {
                        useCreateIndex: true,
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useFindAndModify: false
                    },
                    (err) => {
                        if (err) {
                            console.log("DB connection Faild!");
                        }

                        console.log("DB Connected Successfully!");
                    }
)

app.use(formRoute);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}!`)
})