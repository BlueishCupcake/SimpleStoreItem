//components
import SimpleCard from "components/SimpleCard";

const CardsList = () => {
  const cards = [
    {
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2813.99,
      currentPrice: 2599.0,
      displayInstallmentPrice: 259.9,
      img: "/first-screen.png",
    },
    {
      name: "Monitor Gamer LG 25UM58G 25” LED IPS",
      price: 1599.0,
      currentPrice: 899.0,
      displayInstallmentPrice: 109.9,
      img: "/second-screen.jpg",
    },
  ];

  return (
    <>
      {cards.map((item) => {
        return <SimpleCard item={item} />;
      })}
    </>
  );
};

export default CardsList;
