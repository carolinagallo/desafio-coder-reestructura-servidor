import { userModel } from "../model/user.model.js";

class UserMongooseDao {
  async paginate(criteria) {
    const { limit, page } = criteria;
    const userDocuments = await userModel.paginate({}, { limit, page });

    userDocuments.docs = userDocuments.docs.map((document) => ({
      id: document?._id,
      firstName: document?.firstName,
      lastName: document?.lastName,
      email: document?.email,
      age: document?.age,
      role: document?.role,
      isAdmin: document?.isAdmin,
      password: document?.password,
      cart: document?.cart,
    }));

    return userDocuments;
  }

  async create(data) {
    const document = await userModel.create(data);
    return {
      id: document?._id,
      firstName: document?.firstName,
      lastName: document?.lastName,
      email: document?.email,
      age: document?.age,
      role: document?.role,
      isAdmin: document?.isAdmin,
      password: document?.password,
      cart: document?.cart,
    };
  }

  async getOne(id) {
    const document = await userModel.findOne({ _id: id });

    if (!document) {
      throw new error("user no exist");
    }
    return {
      id: document?._id,
      firstName: document?.firstName,
      lastName: document?.lastName,
      email: document?.email,
      age: document?.age,
      role: document?.role,
      isAdmin: document?.isAdmin,
      password: document?.password,
      cart: document?.cart,
    };
  }

  async updateOne(id, data) {
    const document = await userModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    console.log(document);
    if (!document) {
      throw new Error("User dont exist");
    }
    return {
      id: document?._id,
      firstName: document?.firstName,
      lastName: document?.lastName,
      email: document?.email,
      age: document?.age,
      role: document?.role,
      isAdmin: document?.isAdmin,
      password: document?.password,
      cart: document?.cart,
    };
  }

  async getOneByEmail(email) {
    const document = await userModel.findOne({ email });

    if (!document) throw new Error("usuario no existe");

    return {
      id: document?._id,
      firstName: document?.firstName,
      lastName: document?.lastName,
      email: document?.email,
      age: document?.age,
      role: document?.role,
      isAdmin: document?.isAdmin,
      password: document?.password,
      cart: document?.cart,
    };
  }

  async deleteOne(id) {
    return userModel.deleteOne({ _id: id });
  }
}
export default UserMongooseDao;
