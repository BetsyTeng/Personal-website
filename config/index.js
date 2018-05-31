// import path from 'path';
const path = require('path');
const config = {
    server:{
        port:process.env.PORT || 3001,
        host:'localhost'
    },
    api:{
        port:process.env.API_PORT || 8088,
    },
    client:path.resolve(__dirname,'../src'),
    assets:path.resolve(__dirname,'../src/application/assets'),
    dist:path.resolve(__dirname,'../dist'),
    serverURL:path.resolve(__dirname,'../src/server')
};
module.exports = config;
// export default config;