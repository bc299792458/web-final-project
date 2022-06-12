import { Router} from "express";
import { shortUrlModel } from "../../models/shortUrlModel.js";

const route = Router();
export default (app) => {
    app.get("/history/:uid", async (req, res) => {
        console.log(req.params.uid);
        const urls = await new shortUrlModel().getHistoryByUid(req.params.uid);
        res.send(urls);
    });
}
