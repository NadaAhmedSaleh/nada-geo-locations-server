import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import locationsRoutes from "./routes/location.route.ts";
import { swaggerSpecs } from "./utils/swagger.ts";

const app = express();

app.use(cors());
app.use(express.json());

// swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use("/locations", locationsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
