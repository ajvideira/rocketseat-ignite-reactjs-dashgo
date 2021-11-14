import { createServer, Factory, Model, Server } from "miragejs";
import { User } from "../../models/user";
import { internet, date } from "faker";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name: (index: number) => `User ${index + 1}`,
        email: (index: number) => internet.email().toLowerCase(),
        created_at: () => date.recent(2),
      }),
    },
    seeds(server: Server) {
      server.createList("user", 10);
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
