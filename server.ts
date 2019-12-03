import http, { RequestListener } from "http";

let requests = 0;
const podname = process.env.HOSTNAME;
let startTime: Date;
let host: string;

export const handleRequest: RequestListener = (request, response) => {
  response.setHeader("Content-Type", "text/plain");
  response.writeHead(200);
  response.write("Hello World! | Running on: ");
  response.write(host);
  response.end(" | v=1\n");
  console.log("Running On:", host, "| Total Requests:", ++requests, "| App Uptime:", (+new Date() - +startTime) / 1000, "seconds", "| Log Time:", new Date());
};

const www = http.createServer(handleRequest);

www.listen(8080, () => {
  startTime = new Date();
  host = process.env.HOSTNAME;
  console.log("Hello World Started At:", startTime.toLocaleString(), "| Running On: ", host, "\n");
});
