import Image from "next/image";

export default function GalleryPage() {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <p className="intro-subheading">Gallery</p>

        <h1 className="intro-heading">Moments From a Literary Life</h1>

        <p className="intro-text">
          A visual space for photographs, memories, and archival glimpses from
          the life and work of Manoj Das.
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
