const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Default Message";

const data = fs.readFileSync("./data.txt", "utf-8");

const server = http.createServer((req, res) => {
    res.write(`Message: ${MESSAGE}\n`);
    res.write(`File Data: ${data}`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
