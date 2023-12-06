const fs = require("fs");
const path = require("path");

const metadata = path.join(__dirname, "metadata");
if (!fs.existsSync(metadata)) {
  fs.mkdirSync(metadata);
}

console.log(__dirname);

for (let i = 1; i <= 5; i++) {
  const json = {
    name: `Liverpool Champions 2005 #${i}`,
    description: `Liverpool 2005 champions league victory#${i}`,
    image: `https://gateway.pinata.cloud/ipfs/Qmf8kvKCQrogKp9emA7FKfe9sy7RCtnhLcwwAqqy2ZorLa/${i}.jpg`,
  };

  fs.writeFileSync(path.join(metadata, String(i)), JSON.stringify(json));
}
console.log("metadata successfully generated");
