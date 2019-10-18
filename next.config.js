// next.config.js is not transformed by Babel. So you can only use
// javascript features supported by your version of Node.js.
module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.md$/,
            loader: 'raw-loader',
        });
        return config
    },
};