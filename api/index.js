import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://ngumartin:ngumartin@xillowestate.f5jq7i1.mongodb.net/xillow-estate?retryWrites=true&w=majority")

const app = express();

app.listen(3000, () => {
    console.log('Server is running on PORT 3000');
    }
)