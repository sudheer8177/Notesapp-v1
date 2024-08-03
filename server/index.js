const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));


mongoose.connect("mongodb://localhost:27017/noteApp", { useNewUrlParser: true, useUnifiedTopology: true });

// Define the note schema
const noteSchema = new mongoose.Schema({
  Heading: String,
  Desc: String,
});

const Note = mongoose.model("Note", noteSchema);


app.post('/create', (req, res) => {
  const { Heading, Desc } = req.body;

 
  const newNote = new Note({
    Heading,
    Desc,
  });

  
  newNote.save()
    .then(savedNote => {
      res.status(201).json(savedNote);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.get('/', (req, res) => {

  Note.find({})
    .then(contents => {
      res.status(200).json(contents);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
