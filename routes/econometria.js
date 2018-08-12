const express = require('express');


module.exports=function(app){
    app.get('/econometria', (req, res, next)=>{
        var datos ={
            sesionesleft:[
                {sesion:1, titulo:'Sesion 1: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1G9_tRxjHaobiNmoyTbqpPZLTk0vTYNws'},
                {sesion:2, titulo:'Sesion 2: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1WHQaSXwRfF8TR4n1dq2pUcAUSeiftcam'},
                {sesion:3, titulo:'Sesion 3: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1V_blkNL9iuUGfTBnE-mKZY2cVI_UzzTK'},
                {sesion:4, titulo:'Sesion 4: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1qrs-CTj3aD8WYjtXqJy9UEAmO6Fx1xFV'}
            ],
            sesionesright:[
                {sesion:5, titulo:'Sesion 5: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1mjV3Wtg5FEljr_AxKcStFcCQ3lI6EXGH'},
                {sesion:6, titulo:'Sesion 6: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1QnTd0fmD_60iprGpbiPAaetafJtyRhCc'},
                {sesion:7, titulo:'Sesion 7: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1_zThZDAwCvh9fQFzTMAb2X9UVPJhGUP5'},
                {sesion:8, titulo:'Sesion 8: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'#'}
            ],
            sesiones:[
                {titulo:'Sesiones', bienvenida:'BIENVENIDA AL CURSO Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.'}
             ],  
             practica:[
                {titulo:'Práctica y Exámenes', bienvenida:'EXPLICANDO LA IMPORTANCIA DE LAS PRÁCTICAS Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.'}
             ],           
            practicas:[
                {practica:1, titulo:'Primera Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'},
                {practica:2, titulo:'Segunda Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'},
                {practica:3, titulo:'Tercera Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'},
                {practica:4, titulo:'Cuarta Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'}
            ],
            examenes:[
                {examen:1, titulo:'Exámenes Parciales', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'},
                {examen:2, titulo:'Exámenes Finales', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'},                
                {examen:3, titulo:'Exámenes Sustitutorios', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1l4jQ1fQrMCPG2WA_d1GyiHV4AagnBTUN'}
            ]
        };
        res.render('pages/econometria2', datos);
    });


    app.get('/general/john', (req, res, next)=>{
        res.render('pages/general', {title: 'John Mendoza '});
    });
};

