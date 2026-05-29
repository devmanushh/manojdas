import Image from "next/image";

export default function LegacyPage() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <p className="intro-subheading">Legacy</p>

        <h1 className="intro-heading">A Voice That Continues to Inspire</h1>

        <p className="intro-text">
          Manoj Das&apos;s legacy lives through his readers, his students, and
          the enduring tenderness of his literary vision.
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
  );
}
