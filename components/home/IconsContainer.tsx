import Icons from "./Icons";
import kitchen from "@/assets/icons/kitchen-set.png";
import closet from "@/assets/icons/closet.png"
import wallUnit from "@/assets/icons/interior.png"
import vanity from "@/assets/icons/vanity.png"
import custom from "@/assets/icons/blueprint.png"

export default function IconsContainer() {
  return (
    <div className="container flex">
      <Icons content="KITCHEN" img={kitchen} />
      <Icons content="CLOSET" img={closet} />
      <Icons content="WALL UNIT" img={wallUnit} />
      <Icons content="VANITY" img={vanity} />
      <Icons content="CUSTOM" img={custom} />
    </div>
  );
}
