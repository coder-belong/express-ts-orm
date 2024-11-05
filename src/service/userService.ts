import { UserModel } from "@/model/userModel";

export default class UserService {
  static getUserList = async () => {
    return await UserModel.findAll();
  };
}
