import { Router} from "express";
import { shortUrlModel } from "../../models/shortUrlModel.js";
import config from "../../config/index.js";

const route = Router();
export default (app) => {
    app.use("/gen", route);

    route.post("/", async (req, res) => {
        // console.log('GEN', req.params.url, req.params.uid);
        const params = req.body;
        console.log(params);
        const shortUrl = await new shortUrlModel().insertUrl(params.url, params.uid);
        return res.send({
            ip: config.ip,
            shortUrl: shortUrl
        });
    });
}
