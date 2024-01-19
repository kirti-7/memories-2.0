import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'


const app = express();
dotenv.config();


app.use(bodyparser.json({limit: "30mb", extended: true}))
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://kirtivalechha27:mei2CgPCpOw0D9cv@memories.jqa92se.mongodb.net/?retryWrites=true&w=majority'
// dbUsername kirtivalechha27
// dbPassword mei2CgPCpOw0D9cv
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);