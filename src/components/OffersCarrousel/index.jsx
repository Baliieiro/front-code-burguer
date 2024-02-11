import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Offers from "../../assets/OFERTAS.png";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import { ButtonDefault } from "../Button";
import { SectionContainer, TitleImage } from "./styles";
import { Image, ContainerItems } from "./styles";

export function OffersCarrousel() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("products");

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setOffers(onlyOffers);
    }

    loadOffers();
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
      <TitleImage src={Offers} alt="image ofertas" />

      <Carousel itemsToShow={4} breakPoints={breakPoints}>
        {offers &&
          offers.map((offer) => (
            <ContainerItems key={offer.id}>
              <Image src={offer.url} alt={offer.name} />
              <p>{offer.name}</p>
              <p>{offer.formatedPrice}</p>
              <ButtonDefault borderRadius={true}>Peça agora</ButtonDefault>
            </ContainerItems>
          ))}
      </Carousel>
    </SectionContainer>
  );
}
