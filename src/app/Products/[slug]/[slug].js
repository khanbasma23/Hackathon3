"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "2ft3n435",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = `*[_type == "product" && slug.current == $slug][0] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }`;

        const data = await sanity.fetch(query, { slug });
        if (!data) {
          setError("Product not found");
        }
        setProduct(data);
      } catch (error) {
        console.error("Error Fetching Product:", error);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, setProduct]);  // Add setProduct as a dependency

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {product?.title?.replace(/'/g, "’")}
      </h1>
      <Image
        src={product?.imageUrl || "/fallback.jpg"}
        alt={product?.title}
        width={500}
        height={500}
        className="rounded-md object-cover"
        priority
      />
      <p className="mt-4 text-lg">
        {product?.description?.replace(/'/g, "’")}
      </p>
      <p className="text-xl font-bold mt-2">${product?.price}</p>
    </div>
  );
};

export default ProductDetails;
