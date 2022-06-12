import { getRepository } from "typeorm";
import user from "../entity/user.js";

export class userModel{
    getUsers = async (acc) => {
        const users = await getRepository(user).find({account: acc});
        console.log("Model Name: " + this.NAMESPACE);
        const users_stringfied = JSON.stringify(users);
        console.log("Data:" + users_stringfied);
        return users;
    }
    findUserByAccount = async (acc) => {
        const users = await getRepository(user).findOne({where: {account: acc}});
        return users;
    }
    createUser = async (name, account, pwd, email, birthDay) => {
        let newUser = getRepository(user).create();
        newUser.name = name;
        newUser.account = account;
        newUser.pwd = pwd;
        newUser.email = email;
        newUser.birthday = birthDay;
        console.log(newUser);
        return await getRepository(user).save(newUser);
    };
}