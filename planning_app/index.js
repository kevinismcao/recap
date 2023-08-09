import express from 'express';
const app = express();

app.get('/firstwordsaidonline', (req, res)=> res.json('lo'));
app.listen(5001,()=>console.log('Planning App is running on port 5001!'))

