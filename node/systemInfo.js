const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');

console.log("Información del Sistema Operativo:", getOSInfo());

const networkInfo = getNetworkInfo();
console.log("Información de Red:");
for (const interface in networkInfo) {
    console.log(`Interfaz ${interface}:`);
    networkInfo[interface].forEach(iface => {
        console.log(`  Familia: ${iface.Familia}`);
        console.log(`  Dirección: ${iface.Dirección}`);
        console.log(`  Interno: ${iface.Interno}`);
    });
}