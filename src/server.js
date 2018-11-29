// src/server.js
const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const firebaseAdmin = require('firebase-admin');
const path = require('path');

const app = express();
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://jdr-cmpe172.auth0.com/.well-known/jwks.json`
  }),
  audience: process.env.pgWo0DcxvaUb3X2va29yIEVWIQuidmkG,
  issuer: `jdr-cmpe172.auth0.com`,
  algorithm: 'RS256'
});

const serviceAccount = require('./firebase/firebase-key');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `https://cmpe172-jdr.firebaseio.com`
});

app.get('/firebase', jwtCheck, async (req, res) => {
  const {sub: uid} = req.user;

  try {
    const firebaseToken = await firebaseAdmin.auth().createCustomToken(uid);
    res.json({firebaseToken});
  } catch (err) {
    res.status(500).send({
      message: 'Something went wrong acquiring a Firebase token.',
      error: err
    });
  }
});

app.listen(3001, () => console.log('Server running on localhost:3001'));