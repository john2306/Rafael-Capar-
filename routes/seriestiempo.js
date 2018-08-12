const express = require('express');


module.exports=function(app){
    app.get('/seriestiempo', (req, res, next)=>{
        var datos ={
            sesionesleft:[
                {sesion:1, titulo:'Sesion 1: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1NNjgd0abvOr6ddWVOkn6i8_z2nqhLm5C'},
                {sesion:2, titulo:'Sesion 2: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1hG_mr3MZPmcs_9Rsgc88ZdAsCoNAEUCe'},
                {sesion:3, titulo:'Sesion 3: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1hznjA6M2x4-T6dP6lTW6WP7nrvMCAeQH'},
                {sesion:4, titulo:'Sesion 4: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1-nxSkaTRW114sMqg-HV67ZXewAxRag0n'},
                {sesion:5, titulo:'Sesion 5: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1SClO0Wegb8_cVLTl-qn5pcZMi1Pdde8K'},
                {sesion:6, titulo:'Sesion 6: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1GhZplZ6EZ5hsKEpTzBnaLTs3qUIBfpHQ'}            
            ],
            sesionesright:[
                {sesion:7, titulo:'Sesion 7: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1s2ylW73huPb9AGsdCNvXxIzz2YW8h8Ry'},
                {sesion:8, titulo:'Sesion 8: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1zpRrxyW1SOanQOzZkqgFukLr9oX9Way0'},
                {sesion:9, titulo:'Sesion 9: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1K8ftacRfvQrzxnLa7sJ-O0IYZvHwT8TI'},
                {sesion:10, titulo:'Sesion 10: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1GAIO_Bq0UhvK5N95vYUKWnACPSVPH70W'},
                {sesion:11, titulo:'Sesion 11: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=1A6IiyI3sKcRT6MlZct-1T16uylXTS0e1'},
                {sesion:12, titulo:'Sesion 12: Título de la sesión', parrafo:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim INTRODUCCIÓN A LA SESIÓN 1 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', enlace:'https://drive.google.com/open?id=16-TbIeeG52EsYF1UtUUKevmn7J075jhW'}
            ],
            sesiones:[
                {titulo:'Sesiones', bienvenida:'BIENVENIDA AL CURSO Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.'}
             ], 
             practica:[
                {titulo:'Práctica y Exámenes', bienvenida:'EXPLICANDO LA IMPORTANCIA DE LAS PRÁCTICAS Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.'}
             ],            
            practicas:[
                {practica:1, titulo:'Primera Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=164CdDsLdBKu7cxUmoReluUjtFvJu5YBC'},
                {practica:2, titulo:'Segunda Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1tzunCGDgMhLDtLrPNDDYjtXLpdZXzD2Q'},
                {practica:3, titulo:'Tercera Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1PSfVxZ6NEYzoRT-R278vi0wXboRREqmz'},
                {practica:4, titulo:'Cuarta Práctica', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1veY22w-PugvW6sDjReimEKGExOubA3EU'}
            ],
            examenes:[
                {examen:1, titulo:'Exámenes Parciales', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1fTRW0rGzd_DrDSPv_yL3NO0FJfiTsrlb'},
                {examen:2, titulo:'Exámenes Finales', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1yTQDsNVrmtRudBqfxra6KkJoS1BgLoTd'},                
                {examen:3, titulo:'Exámenes Sustitutorios', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1yaAoSQtfyDKarQthg1piWPuVzzlA-tFU'},
                {libros:3, titulo:'Libros y notas', temas:'Tema1, Tema2, Tema3, etc.', enlace:'https://drive.google.com/open?id=1qpF_H66xVEjZkb7T1FttiHkOguiqPpEd'}
            ]
        };
        res.render('pages/seriestiempo', datos);
    });

    app.get('/general/john', (req, res, next)=>{
        res.render('pages/general', {title: 'John Mendoza '});
    });
};

