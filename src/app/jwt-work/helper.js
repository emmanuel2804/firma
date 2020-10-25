const fs = require("fs");
// var RSA = fs.readFileSync("../../assets/Au10tixBosClient2Datamart.pem");
// export function key() {
//   return RSA;
// }
export var privateKey = fs.readFileSync(
  "../../assets/Au10tixBosClient2Datamart.pem"
);
