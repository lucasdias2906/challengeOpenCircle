import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "lucasds",
  password: "lucas123",
  database: "shippingCompany",
  synchronize: true,
  logging: true,
  entities: ["src/database/entities/*.ts"],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Connection in database OK")
    })
    .catch(() => console.log("Connection fail, check information for connection correct"))