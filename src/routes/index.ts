// Imports
import { Router } from "express";

// Importando as rotas
import { tableRoutes } from "./tables-routes";
import { ordersRoutes } from "./orders-routes";
import { productsRouts } from "./products-routes";
import { tablesSessionsRoutes } from "./tables-sessions-routes";

const routes = Router();

// Definindo as rotas
routes.use("/products", productsRouts);
routes.use("/tables", tableRoutes);
routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/orders", ordersRoutes);

export { routes };
