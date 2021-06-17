const { Router } = require('express');
const express = require('express');
const loginService = require('../../service/login/loginService');
const router = express();

router.get('/login', async function(req, res) {
    const user = req.body;
    const userConnected = await loginService.auth(user);

    if (userConnected != "") {
       res.json(userConnected)
       res.status(200).end();
    } else {
       console.log("Não conectou")
       res.status(401).end();
    }
    
 });

module.exports = router;