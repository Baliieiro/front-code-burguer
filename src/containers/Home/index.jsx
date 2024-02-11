import ImgLogo from "../../assets/home-logo.svg";
import { CategoryCarrousel, OffersCarrousel } from "../../components";
import { ContainerHome, Banner } from "./styles";
export function Home() {
  return (
    <ContainerHome>
      <Banner src={ImgLogo} alt="image home logo" />

      <CategoryCarrousel />
      <OffersCarrousel />
    </ContainerHome>
  );
}
