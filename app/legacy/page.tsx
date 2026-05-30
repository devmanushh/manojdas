import Image from "next/image";
import LegacyContent from "@/components/legacyContent";

export default function LegacyPage() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-content">
          <p className="intro-subheading">Legacy</p>

          <h1 className="intro-heading">A Voice That Continues to Inspire</h1>

          <p className="intro-text">
            &ldquo;Some lives end with their final breath. Others continue
            through the generations they inspire. Manoj Das belongs to the
            latter.&rdquo;
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
      </section>
      <LegacyContent />
    </>
  );
}
