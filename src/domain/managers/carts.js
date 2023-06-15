import cartMongooseDao from "../../data/dao/cartMongooseDao.js";

class CartManager {
  constructor() {
    this.cartDao = new cartMongooseDao();
  }

  async addCart(cart) {
    return await this.cartDao.createCart(cart);
  }

  async getCartById(idCart) {
    return await this.cartDao.findCartById(idCart);
  }

  async updateCart(id, pid) {
    return await this.cartDao.updateCart(id, pid);
  }

  async deleteOneProduct(idCart, idProduct) {
    return await this.cartDao.deleteProduct(idCart, idProduct);
  }

  async deleteAllProducts(id) {
    return await this.cartDao.deleteAllProducts(id);
  }

  async changeAllProducts(cid, data) {
    return await this.cartDao.changeProducts(cid, data);
  }

  async changeQuantity(cid, pid, quantity) {
    return await this.cartDao.newQuantity(cid, pid, quantity);
  }
}

export default CartManager;
