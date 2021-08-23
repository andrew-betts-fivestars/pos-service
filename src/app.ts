import express from 'express';
import { login, devices, connect, disconnect, pay, refund } from './api';
import swaggerUi from 'swagger-ui-express';
import * as docs from './swaggerOpts'; // to do put in config file
import routes from "./routes";

const port = 5000; // to do put in config file
const app = express();

app.use(routes);
app.use('/assets', express.static('assets'));
app.use('/', swaggerUi.serve, swaggerUi.setup(docs.spec, docs.uiOpts));
app.listen(port, () => console.log(`Server listening on port ${port}`));