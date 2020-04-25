const baseConfig = {
    serviceHost : '/pxhost'
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
