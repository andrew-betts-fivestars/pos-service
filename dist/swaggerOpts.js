"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spec = exports.docOpts = exports.uiOpts = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
exports.uiOpts = {
    customfavIcon: '/assets/favicon.ico',
    customCss: '.swagger-ui .topbar { display: none }'
};
exports.docOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'POS Service API',
            description: 'POS API Information',
            contact: {
                name: 'fivestars'
            },
            servers: ['http://localhost:5000'],
            version: '0.0.1'
        }
    },
    apis: [
        __dirname + "/routes/index.ts"
    ]
};
exports.spec = swagger_jsdoc_1.default(exports.docOpts);
