
const path = require('path');

module.exports = {
    entry:'./ckplayer/ckplayer.js',
    output: {
        filename: 'ckplayer.min.js',
        path: path.resolve(__dirname, 'ckplayer')
    }
};
