const APIKit = {
  public: {
    getProducts: () => {
      const url =
        process.env.NODE_ENV === "development"
          ? "/shop/products"
          : "?endpoint=shop/products";
      return client.get(url);
    },
    getProductDetails: (slug) => {
      const url =
        process.env.NODE_ENV === "development"
          ? `/product/${slug}`
          : `?endpoint=product/${slug}`;
      return client.get(url);
    },
    getCategories: () => {
      const url =
        process.env.NODE_ENV === "development"
          ? "/categories"
          : "?endpoint=categories";
      return client.get(url);
    },
  },
};
