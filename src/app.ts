import express from 'express';
import bodyParser from 'body-parser';
import {markdownToBlocks, markdownToRichText} from '@tryfabric/martian';
import type {RichText, Block} from '@notion-stuff/v4-types';

const app = express().use(bodyParser.json()); // creates http server
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

app.listen(3000, () => console.log('[ChatBot] Webhook is listening'));


app.post('/', (req, res) => {

    // print request body
    console.log(req.body.string);

    res.json(markdownToRichText(req.body.string));
});
