const express = require('express');
const fs = require('fs');
const app = express();


app.get('*', (req, res) => {
    const prefixPathList = req.url.split('/');
    const fileName = prefixPathList.pop();
    const fileNameList = fileName.split('--');
    if (fileNameList.length > 1) {
        setTimeout(()=>{
            res.sendFile(`${__dirname}/${prefixPathList.join('/')}/${fileNameList[1]}`);
        }, Number(fileNameList[0]));
    } else {
        res.sendFile(`${__dirname}/${req.url}`);
    }
});

app.listen(8082, ()=>{
    console.log('start');
});