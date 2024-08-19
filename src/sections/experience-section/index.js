import InfoCard from "@/components/info-card";
import styles from "./index.module.css";
import InfoLine from "@/components/icons/infoLine";

export default function Experience() {
  return (
    <div className={styles.infocardcont}>
      <span>The Deja Brew experience</span>
      <InfoCard title="Exceptional Beans">
        Our journey starts at the source. We meticulously select beans from the
        world's finest coffee-growing regions, ensuring that each batch meets
        our exacting standards for flavor, quality, and sustainability.
      </InfoCard>
      <InfoLine />
      <InfoCard title="Crafted with Care">
        From roasting to brewing, every step in our process is an act of
        devotion. Our skilled roasters carefully coax out the unique flavors of
        each bean, while our baristas expertly prepare your cup with precision
        and flair.
      </InfoCard>
      <InfoLine />
      <InfoCard title="A Taste of Tradition">
        We pay homage to coffee's rich history by incorporating traditional
        brewing techniques with a modern twist. Whether you prefer a classic
        pour-over or a velvety latte, our menu is a celebration of coffee's
        timeless appeal.
      </InfoCard>
    </div>
  );
}
