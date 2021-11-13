import { createServer, Model, Server } from "miragejs";
import { User } from "../../models/user";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = "api";

      this.get("/users");
      this.post("users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}