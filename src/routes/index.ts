import { Router } from "express";
import { login, devices, connect, disconnect, pay, refund } from '../api';

const router = Router();

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
router.post('/login', login);

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
router.get('/devices', devices);

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
router.get('/connect', connect);

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
router.get('/disconnect', disconnect);

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
router.post('/pay', pay);

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
router.get('/refund', refund);

export default router;
