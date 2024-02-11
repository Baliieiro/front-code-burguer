import { useEffect, useState } from "react";

import ImgLogo from "../../assets/product-logo.svg";
import { CardProduct } from "../../components";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import {
  ContainerProduct,
  Banner,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from "./styles";

export function Product() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    async function LoadCategories() {
      const { data } = await api.get("categories");

      const newCategory = [{ id: 0, name: "Todos" }, ...data];

      setCategories(newCategory);
    }
    async function LoadProducts() {
      const { data } = await api.get("products");
      const formattedProductsPrice = data
        .filter((product) => product.price)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setProducts(formattedProductsPrice);
    }

    LoadCategories();
    LoadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter((product) => {
        return product.category_id === activeCategory;
      });
      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

  return (
    <ContainerProduct>
      <Banner src={ImgLogo} alt="image home logo" />

      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              key={category.id}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </ProductsContainer>
    </ContainerProduct>
  );
}
