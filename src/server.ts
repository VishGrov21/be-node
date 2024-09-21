import { app } from "./app";
import { APP_PORT } from "./constants/app.constants";

app.listen(APP_PORT, async () => {
  console.log(`Listening on port: ${APP_PORT}`);
});
