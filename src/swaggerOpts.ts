import swaggerJsDoc from 'swagger-jsdoc';

export const uiOpts = {
    customfavIcon: '/assets/favicon.ico',
    customCss: '.swagger-ui .topbar { display: none }'
};

export const docOpts = {
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
        `${__dirname}/routes/index.ts`
        ]
}

export const spec = swaggerJsDoc(docOpts);