import ServicesInfo from "@/components/services/ServicesInfo";
import ServicesMore from "@/components/services/ServicesMore";
import Hero from "@/components/universal/Hero";

export default function Services() {
  return (
    <main>
      <Hero
        src="/assets/otherPictures/hero5.webp"
        alt=""
        h1="SERVICES"
        heroClass="hero2"
      />
      <div className="container flex flex-col">
        <ServicesInfo
          direction="flex-row-reverse"
          alt=""
          src="/assets/services/services1.webp"
          title="Custom Kitchen Design"
          content="Our team of experienced designers will work with you to create a custom kitchen design that perfectly fits your style and needs. We use the finest and highest quality materials to bring your dream kitchen to life."
        />
        <ServicesInfo
          direction="flex-row"
          alt=""
          src="/assets/services/services2.webp"
          title="Wall Unit Design"
          content="Our team of interior designers can help you create a space that reflects your personal style and meets your functional needs. We offer a wide range of wall unit design services to bring your vision to life."
        />
        <ServicesInfo
          direction="flex-row-reverse"
          alt=""
          src="/assets/services/services3.webp"
          title="Custom Closets"
          content="At MTC Millwork, we provide premium custom closet design services, along with beautiful custom cabinetry and architectural millwork. We love what we do, and we do it with passion. We work closely with our clients to capture their dream space in details, bringing their visions to life."
        />
        <ServicesInfo
          direction="flex-row"
          alt=""
          src="/assets/services/services4.webp"
          title="Vanity design"
          content="We offer custom bathroom design services that bring luxury and functionality to your space. Our team will work with you to create a design that meets your needs and exceeds your expectations."
        />
        <ServicesInfo
          direction="flex-row-reverse"
          alt=""
          src="/assets/services/services5.webp"
          title="Custom Millwork"
          content="At MTC Millwork, we specialize in custom millwork for residential and commercial projects. From kitchens and vanities to wall units and closets, we take care of all your custom millwork needs with the finest materials and highest quality workmanship."
        />
      </div>
      <ServicesMore />
    </main>
  );
}
