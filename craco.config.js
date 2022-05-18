const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@store": path.resolve(__dirname, "src/store"),
            "@theme": path.resolve(__dirname, "src/theme"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@validation": path.resolve(__dirname, "src/validation"),
        },
    },
};
