"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = createClient({
  projectId: "2ft3n435", // Ensure this is correct
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage?: number;
  imageUrl?: string;
  productImage?: {
    asset?: {
      url: string;
    };
  };
  tags?: string[];
  slug?: {
    current: string;
  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"] {
            _id,
            title,
            price,
            description,
            discountPercentage,
            "imageUrl": productImage.asset->url, 
            tags,
            slug
          }
        `;
        const data = await sanity.fetch(query);
        console.log("Fetched Products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error Fetching Products:", error);
      }
    };

    fetchProducts();
  }, []); // Runs only on mount

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const parsedCart = JSON.parse(storedCart);
          if (Array.isArray(parsedCart)) {
            setCart(parsedCart);
          }
        } catch (error) {
          console.error("Error parsing cart from localStorage", error);
        }
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart];
    const itemExists = updatedCart.some(item => item._id === product._id);
    if (!itemExists) {
      updatedCart.push(product);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.title.replace(/'/g, "’")} has been added to your cart!`);
    } else {
      alert(`${product.title.replace(/'/g, "’")} is already in your cart.`);
    }
  };

  const truncateDescription = (description: string, maxLength = 50) => {
    if (!description) return "";
    return description.length > maxLength
      ? description.substring(0, maxLength).replace(/'/g, "’") + "..."
      : description.replace(/'/g, "’");
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From API&apos;s Data
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
            {/* Image with link to open in new tab */}
            <a
              href={product.imageUrl || "https://via.placeholder.com/300"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={product.imageUrl || "/fallback.jpg"}
                alt={product.title || "Product Image"}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
              />
            </a>

            {/* Link to product detail page */}
            <Link href={`/product/${product.slug?.current || "#"}`}>
              <h2 className="text-lg font-semibold cursor-pointer hover:text-blue-600">
                {product.title?.replace(/'/g, "’")}
              </h2>
            </Link>

            <p className="text-slate-800 mt-2 text-sm">
              {truncateDescription(product.description || "")}
            </p>
            <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 w-full bg-blue-400 text-black py-2 rounded-md"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-pink-500">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.title?.replace(/'/g, "’")}</p>
                  <p className="text-sm">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl || "https://via.placeholder.com/150"}
                  alt={item.title || "Product Image"}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Your Cart is Empty. Please Add Some Products!</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
