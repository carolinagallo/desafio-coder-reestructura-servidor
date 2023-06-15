import productMongooseDao from "../../data/dao/productMongooseDao.js";

class ProductManager {
  constructor() {
    this.productDao = new productMongooseDao();
  }

  async loadData() {}

  async getProducts(type, sortOrder, limit, stock) {
    const products = await this.productDao.find(type, sortOrder, limit, stock);
    return products;
  }

  async addProduct(newProduct) {
    const codeExist = await this.productDao.getByCode(newProduct.code);

    if (codeExist) throw Error("This code exist");

    if (!newProduct.title || newProduct.title.trim().length === 0)
      throw Error("Empty title field");

    if (!newProduct.description || newProduct.description.trim().length === 0)
      throw Error("Empty description field");

    if (!newProduct.price) throw Error("Empty price field");

    if (!newProduct.thumbnail || newProduct.thumbnail.trim().length === 0)
      throw Error("Empty thumbnail field");

    if (!newProduct.code || newProduct.code.trim().length === 0)
      throw Error("Empty code field");

    if (!newProduct.category || newProduct.category.trim().length === 0)
      throw Error("Empty category field");

    if (!newProduct.stock) throw Error("Empty stock field");

    return await this.productDao.create({
      ...newProduct,
      status: true,
    });
  }

  async getProductById(idProduct) {
    return this.productDao.getProductById(idProduct);
  }

  async updateProduct(id, productChange) {
    return await this.productDao.updateProduct(id, productChange);
  }

  async deleteProduct(id) {
    return await this.productDao.deleteProduct(id);
  }
}

export default ProductManager;
