import { Router} from "express";
import { shortUrlModel } from "../../models/shortUrlModel.js";

const route = Router();
export default (app) => {
    app.get("/:shortId", async (req, res) => {
        const url = await new shortUrlModel().getUrl(req.params.shortId);
        if(!url){
            return res.send('wrong short ID');
        }
        return res.redirect(url);
    });
    app.get('/redirect/:url', (req, res) => {
        return res.redirect(req.params.url);
    });
}
