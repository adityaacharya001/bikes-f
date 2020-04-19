const baseConfig = {
    serviceHost : '/pxhost',
    port: '3000'
}

const config = {
    development:{
        ...baseConfig,
        serviceHost: 'http://localhost:1337',
    },
    production:{
        ...baseConfig,
    },
};

export default config[process.env.NODE_ENV || 'development'];