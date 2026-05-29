import Image from "next/image";

export default function HomePage() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <p className="intro-subheading">A Documentary Tribute to</p>

        <h1 className="intro-heading">Padma Shri Manoj Das</h1>

        <p className="intro-text">
          A journey through the life, literature, imagination, and legacy of one
          of India&apos;s finest storytellers.
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
