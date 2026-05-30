import Image from "next/image";
import ChildhoodBiography from "@/components/childhoodBiography";
import AdulthoodBiography from "@/components/adulthoodBiography";

export default function BiographyPage() {
  return (
    <section>
    <div className="intro-section">
      <div className="intro-content">
        <p className="intro-subheading">Biography</p>

        <h1 className="intro-heading">
          A Child Born Between Sea, Storm, and Story
        </h1>

        <p className="intro-text">
          "On a quiet February morning in 1934, in the coastal village of Sankhari in Odisha, 
          a child opened his eyes to a world where the sea whispered ancient secrets and the winds carried forgotten tales."
        </p>
        <p className="intro-subheading">
            That child was Manoj Das.
        </p>
      </div>

      <div className="intro-image">
        <Image
          className="intro-content-image"
          src="/ManojDas.PNG"
          alt="Padma Shri Manoj Das"
          width={500}
          height={500}
          priority
        />
      </div>
      </div>

      <ChildhoodBiography/>
      <AdulthoodBiography/>
    </section>

  );
}
