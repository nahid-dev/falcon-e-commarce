const { client } = require("./HTTPKit");

const APIKit = {
    public: {
        getProducts: () => {
            const url = "/shop/products";
            return client.get(url);
        },
        getProductDetails: (slug) => {
            const url = `/product/${slug}`;
            return client.get(url);
        },
        getCategories: () => {
            const url = "/categories";
            return client.get(url);
        },
    }
}

export default APIKit;