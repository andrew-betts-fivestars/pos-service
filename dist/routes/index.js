"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var api_1 = require("../api");
var router = express_1.Router();
/**
 * @openapi
 * paths:
 *  /login:
 *   post:
 *      description: Login to server
 *      requestBody:
 *        description: Simple input parameters for the job
 *        content:
 *          application/json:
 *            examples:
 *              default:
 *                summary: Default values from the workflow
 *                value: |
 *                  {
 *                    "string-input-1": "string value",
 *                    "int-input-7": 42,
 *                    "json-input-2": {
 *                      "a": "b",
 *                      "x": 42
 *                    }
 *                  }
 *      responses:
 *        '200':
 *          description: Returns a mysterious string.
 */
router.post('/login', api_1.login);
/**
 * @openapi
 * paths:
 *  /devices:
 *      get:
 *          description: list known devices
 *          responses:
 *              200:
 *              description: Returns a mysterious string.
 */
router.get('/devices', api_1.devices);
/**
 * @openapi
 * paths:
 *  /connect:
 *      get:
 *          description: pair with other device
 *          responses:
 *              200:
 *              description: Returns a mysterious string.
 */
router.get('/connect', api_1.connect);
/**
 * @openapi
 * paths:
 *  /disconnect:
 *      post:
 *          description: unpair with paired device
 *          responses:
 *              200:
 *              description: Returns a mysterious string.
 */
router.get('/disconnect', api_1.disconnect);
/**
 * @openapi
 * paths:
 *  /pay:
 *      post:
 *          description: start payment
 *          responses:
 *              200:
 *              description: Returns a mysterious string.
 */
router.post('/pay', api_1.pay);
/**
 * @openapi
 * paths:
 *  /refund:
 *      post:
 *          description: Start refund
 *          responses:
 *              200:
 *              description: Returns a mysterious string.
 */
router.get('/refund', api_1.refund);
exports.default = router;
