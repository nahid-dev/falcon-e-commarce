"use client";
import APIKit from "@/common/helpers/APIKit";
import { ProductsContext } from "@/context";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const ProductsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // GET PRODUCTS
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery({
    queryKey: ["/shop/products"],
    queryFn: () => APIKit.public.getProducts().then(({ data }) => data),
  });
  // GET CATEGORIES
  const { data: categories } = useQuery({
    queryKey: ["/categories"],
    queryFn: () => APIKit.public.getCategories().then(({ data }) => data),
  });
  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(items);
    }
  }, []);

  // Listen for cart changes in localStorage (for multi-tab support)
  useEffect(() => {
    const handler = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(items);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  // Helper to update cart and localStorage
  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  return (
    <ProductsContext.Provider
      value={{
        products: products?.data || [],
        productsLoading,
        productsError,
        categories: categories?.data || [],
        cartItems,
        setCartItems: updateCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
