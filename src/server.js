import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    });

    return res.writeHead(201).end("Criação de usuários");
  }

  return res.write(404).end("Not found");
});

server.listen(3333);
