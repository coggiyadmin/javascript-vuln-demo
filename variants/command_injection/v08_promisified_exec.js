// Cmdi variant: promisified exec from util — still exec under the hood.
const express = require('express'); const { exec } = require('child_process'); const util = require('util');
const execP = util.promisify(exec); const app = express();
app.get('/r', async (req, res) => { const { stdout } = await execP('cat ' + req.query.file); res.send(stdout); }); // SINK CWE-78
