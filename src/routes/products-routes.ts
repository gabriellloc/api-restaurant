import { Router } from "express";

// Controllers
import { ProductsController } from "@/controllers/products-controller";

const productsRouts = Router();
const productsController = new ProductsController();

// Rotas dos produtos
productsRouts.get("/", productsController.index);
productsRouts.post("/", productsController.create);
productsRouts.put("/:id", productsController.update);
productsRouts.delete("/:id", productsController.remove);

export { productsRouts };
