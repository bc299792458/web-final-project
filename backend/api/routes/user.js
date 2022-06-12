import { Router} from "express";
import {userModel} from "../../models/userModel.js";
import user from "../../entity/user.js";

const route = Router();
export default (app) => {
  	app.use("/account", route);

	route.post("/register", async (req, res) => {
		const params = req.body;
		console.log(params);
		const user = await new userModel().findUserByAccount(params.account);
		if(user) res.send({
			status: 1,
			msg: 'account already exist'
		});
		const info = await new userModel().createUser(params.name, params.account, params.password, params.email, params.birthday);
		// redirect to success or fail
		return res.status(200).json({
			status: 0,
			msg: 'success'
		});
	});
	route.post("/login", async (req, res) => {
		const params = req.body;
		console.log(params);
		const user = await new userModel().findUserByAccount(params.account);
		if(!user){
			// redirect account not found
			return res.send({
				status: 1,
				msg: 'account not found'
			});
		}
		if(user.pwd !== params.password){
			// redirect wrong password
			return res.send({
				status: 2,
				msg: 'Wrong password'
			});
		}
		// redirect to success
		return res.status(200).json({
			status:0,
			msg: 'login success by ' + user.account,
			data: user
		});
	});
}
