const { client } = require("./HTTPKit");

const APIKit = {
  public: {
    getProducts: () => {
      const url = "/api/v1/shop/products";
      return client.get(url);
    },
    getProductDetails: (slug) => {
      const url = `/api/v1/product/${slug}`;
      return client.get(url);
    },
    getCategories: () => {
      const url = "/api/v1/categories";
      return client.get(url);
    },
  },
};

export default APIKit;
