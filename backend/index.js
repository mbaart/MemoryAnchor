import cors from 'cors'
import express from 'express'

import { getIds, getRecords } from './src/memory-anchor-api.js';

const port = 3000;
const app = express();
app.use(cors());

/*
  Returns a json object like:
  {
    results: [
      {
        "Forename": "William",
        "Surname": "Smith",
        "ServiceNumber": "31064026",
        "ForceServiceBranch": "U.S. Army",
        "Rank": "Technician Fifth Grade",
        "Unit": "53rd Infantry Battalion, 4th Armored Division",
        "Photo": "https://memory-anchor-sam-bucket-1meqz3lj7g58t.s3.ca-central-1.amazonaws.com/cemetery/96515537b014e760b2ea6183bb1cffb5/burial/8913/05802791ac6814ce38c4f60dce928a0b.png",
        "Description": "William G. Smith served as a Technician Fifth Grade in the 53rd Infantry Battalion, 4th Armored Division of the U.S. Army. He entered service from Connecticut. On August 4th, 1944, during the course of World War II, Smith passed away. He was posthumously awarded the Purple Heart, a military decoration recognizing those wounded or killed while serving. Today, Smith rests at the Normandy American Cemetery, a solemn reminder of the global conflict that marked the mid-20th century.",
      }, ...
    ]
  }
*/
app.get('/search', (req, res) => {
  console.log(`backend search hit, req.query: ${JSON.stringify(req.query)}`);

  getIds(req.query.name)
    .then(ids => getRecords(ids))
    .then(records => res.send(JSON.stringify(records)))
    .catch(error => {
      if(error === 'api returned no ids'){
        res.status(204).send();
      } else {
        res.status(503).send();
      }
    });
})

app.listen(port, () => {
  console.log(`backend listening on port ${port}`);
})