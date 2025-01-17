const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send({
        message : `Server is running on PORT ${PORT}`
    })
})

app.listen(PORT,()=>{
    console.log(`Server is started on new server new branch ${PORT}`);
})