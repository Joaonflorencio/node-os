const os = require('os');

function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const result = {};
    for (const name in interfaces) {
        result[name] = interfaces[name].map(iface => {
            return {
                Familia: iface.family,
                Dirección: iface.address,
                Interno: iface.internal
            };
        });
    }
    return result;
}

module.exports = getNetworkInfo;