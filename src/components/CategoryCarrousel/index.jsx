import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import Category from "../../assets/CATEGORIAS.png";
import api from "../../services/api";
import { ButtonDefault } from "../Button";
import { SectionContainer, TitleImage } from "./styles";
import { Image, ContainerItems } from "./styles";

export function CategoryCarrousel() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function LoadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }

    LoadCategories();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];
  return (
    <SectionContainer>
      <TitleImage src={Category} alt="image categorias" />

      <Carousel itemsToShow={4} breakPoints={breakPoints}>
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt={category.name} />
              <Link
                to={{
                  pathname: "/produtos",
                  state: { categoryId: category.id },
                }}
              >
                <ButtonDefault>{category.name}</ButtonDefault>
              </Link>
            </ContainerItems>
          ))}
      </Carousel>
    </SectionContainer>
  );
}
