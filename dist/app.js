"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const martian_1 = require("@tryfabric/martian");
const app = (0, express_1.default)().use(body_parser_1.default.json()); // creates http server
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
    res.json((0, martian_1.markdownToRichText)(req.body.string));
});
