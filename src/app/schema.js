const schema = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule) => 
        Rule.required().max(100).error("Product name is required and cannot exceed 100 characters."),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL-friendly identifier for the product.",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required().error("Slug is required for product identification."),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => 
        Rule.required().min(20).max(500).error("Description must be between 20 and 500 characters."),
    },
    {
      name: "price",
      type: "number",
      title: "Product Price",
      validation: (Rule) => 
        Rule.required().min(0).precision(2).error("Product price must be a positive value with two decimal places."),
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
      validation: (Rule) =>
        Rule.min(0).max(100).error("Discount percentage must be between 0% and 100%."),
    },
    {
      name: "priceWithoutDiscount",
      type: "number",
      title: "Price Without Discount",
      readOnly: true,
      initialValue: (doc) => {
        if (doc.discountPercentage && doc.discountPercentage > 0) {
          return doc.price / (1 - doc.discountPercentage / 100);
        }
        return doc.price; // Prevent division by zero
      },
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (Rule) =>
        Rule.min(0).max(5).precision(1).error("Rating must be between 0 and 5."),
    },
    {
      name: "ratingCount",
      type: "number",
      title: "Rating Count",
      validation: (Rule) => Rule.min(0).error("Rating count must be a non-negative number."),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.min(1).error("At least one tag is required."),
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.min(1).error("At least one size is required."),
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Product image is required."),
    },
    {
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
      validation: (Rule) => Rule.max(60).error("SEO title cannot exceed 60 characters."),
    },
    {
      name: "seoDescription",
      type: "text",
      title: "SEO Description",
      validation: (Rule) => Rule.max(160).error("SEO description cannot exceed 160 characters."),
    },
  ],
};

export default schema;
