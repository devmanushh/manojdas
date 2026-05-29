import Image from "next/image";

export default function LiteraryWorksPage() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <p className="intro-subheading">Literary Works</p>

        <h1 className="intro-heading">Stories, Essays, and Imagination</h1>

        <p className="intro-text">
          Explore the books, stories, essays, and literary worlds that made
          Manoj Das one of India&apos;s most beloved storytellers.
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
