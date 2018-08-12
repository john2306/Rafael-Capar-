const express = require('express');


module.exports=function(app){
    app.get('/econometria', (req, res, next)=>{
        res.render('pages/econometria2');
    });

    app.get('/general/john', (req, res, next)=>{
        res.render('pages/general', {title: 'John Mendoza '});
    });
};

