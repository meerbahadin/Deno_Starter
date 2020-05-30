import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  helloworld,
} from "./controllers/index.ts";

const router = new Router();

router.get("/", helloworld)

export default router;
