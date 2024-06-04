import Icons from "./Icons";
import kitchen from "@/public/assets/icons/kitchen-set.png";
import closet from "@/public/assets/icons/closet.png";
import wallUnit from "@/public/assets/icons/interior.png";
import vanity from "@/public/assets/icons/vanity.png";
import custom from "@/public/assets/icons/blueprint.png";

export default function IconsContainer() {
  return (
    <div className="container flex flex-col max-md:gap-4 md:flex-row items-center justify-center">
      <Icons content="KITCHEN" img={kitchen} />
      <Icons content="CLOSET" img={closet} />
      <Icons content="WALL UNIT" img={wallUnit} />
      <Icons content="VANITY" img={vanity} />
      <Icons content="CUSTOM" img={custom} />
    </div>
  );
}
