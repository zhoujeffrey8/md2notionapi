import express from 'express';
import bodyParser from 'body-parser';
import {markdownToBlocks, markdownToRichText} from '@tryfabric/martian';
import type {RichText, Block} from '@notion-stuff/v4-types';

const app = express().use(bodyParser.json()); // creates http server
const allowUnsupportedObjectType = false;
//const richText: RichText[] = markdownToRichText(`**Hello _world_**`);

// [
//   {
//     "type": "text",
//     "annotations": {
//       "bold": true,
//     },
//     "text": {
//       "content": "Hello "
//     }
//   },
//   {
//     "type": "text",
//     "annotations": {
//       "bold": true,
//       "italic": true,
//     },
//     "text": {
//       "content": "world"
//     }
//   }
// ]

app.listen(process.env.PORT || 5000);


app.post('/', (req, res) => {

    // print request body
    console.log(req.body.string);

    res.json(markdownToBlocks(req.body.string));
});
