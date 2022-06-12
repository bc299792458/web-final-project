import { Router, urlencoded } from "express";
import generate from "./routes/generate.js";
import redirect from "./routes/redirect.js";
import user from "./routes/user.js";
import history from "./routes/history.js";

export default () => {
    const app = Router();
    app.use(urlencoded({ extended: true }));
    app.get('/', (req, res) => {
      res.redirect('index.html');
    });

    user(app);
    generate(app);
    redirect(app);
    history(app);
  
    return app;
  };
  