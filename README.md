# 🛒 Steadfast E-Commerce Frontend Task

This project is a technical task submission for the **Mid-Level Front-End Developer** position at **Steadfast Courier Ltd.**. It showcases the implementation of the **Product Details Page** and **Cart Page** based on the provided Figma design and REST APIs.

---

## 🔗 Live Demo

**Deployed Link:** [https://falcon-e-commarce.vercel.app/](https://falcon-e-commarce.vercel.app/)  
_(Replace this with your actual deployed site URL)_

---

## 🧩 Features Implemented

### ✅ Product Details Page

- ✅ Product image gallery with main image and thumbnails.
- ✅ Variation-based **Add to Cart** (color, size, quantity).
- ✅ Quantity selector.
- ✅ Local storage-based cart persistence.
- ✅ “Description” and “Specification” sections with **Show More** toggle.
- ✅ Display of product category using Category API.
- ✅ Display of relevant products based on the current product.

### ✅ Cart Page

- ✅ Grouped cart items by category.
- ✅ Display of image, name, color, size, quantity, and individual prices.
- ✅ Quantity update buttons (+ / -).
- ✅ Remove item from cart.
- ✅ Order Summary: Subtotal, Coupon input, and Total.
- ✅ "Select All" and "Clear All" functionality.
- ✅ Terms and Conditions checkbox required for checkout.
- ✅ "Proceed to Checkout" button, storing checkout data to localStorage.

---

## ⚙️ Tech Stack

| Tool                | Description                          |
| ------------------- | ------------------------------------ |
| **Next.js**         | React framework for SSR & routing    |
| **Tailwind CSS**    | Utility-first CSS for styling        |
| **Context API**     | Global state management (Cart state) |
| **Lucide Icons**    | Icons used throughout the UI         |
| **React Hot Toast** | Toast notifications for interactions |
| **Local Storage**   | Cart and checkout persistence        |

---

## 📡 API Endpoints Used

| Resource       | URL                                                                       |
| -------------- | ------------------------------------------------------------------------- |
| Categories     | `http://157.230.240.97:9999/api/v1/categories`                            |
| All Products   | `http://157.230.240.97:9999/api/v1/shop/products`                         |
| Single Product | `http://157.230.240.97:9999/api/v1/product/:slug` (e.g. `iphone-15-plus`) |

---

## 📁 Folder Structure

```bash
📦project-root
 ┣ 📂components
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📄CartItem.jsx
 ┃ ┃ ┣ 📄CartCategoryGroup.jsx
 ┃ ┃ ┣ 📄CartSummary.jsx
 ┃ ┃ ┗ 📄AgreementCheckbox.jsx
 ┃ ┣ 📂input
 ┃ ┃ ┗ 📄TextInputField.jsx
 ┃ ┗ 📄Breadcrumb.jsx
 ┣ 📂context
 ┃ ┗ 📄ProductsContext.jsx
 ┣ 📂pages or app (Next.js structure)
 ┃ ┣ 📄product/[slug].jsx
 ┃ ┗ 📄my-cart.jsx
 ┣ 📄README.md
 ┗ 📄tailwind.config.js
```
