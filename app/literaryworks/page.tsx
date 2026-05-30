import Image from "next/image";
import LiteraryWorks from "@/components/literaryWorks";
import PreLiteraryWorks from "@/components/preLiteraryWorks";

export default function LiteraryWorksPage() {
  return (
    <section>

    <div className="intro-section">
      <div className="intro-content">
        <p className="intro-subheading">Literary Works</p>

        <h1 className="intro-heading">The Journey of a Pen Across Two Languages</h1>

        <p className="intro-text">
          &ldquo;From the villages of Odisha to readers across continents, Manoj Das transformed memory into literature, 
          folklore into philosophy, and stories into timeless reflections on life.&rdquo;
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
    <PreLiteraryWorks/>
    <LiteraryWorks/>
    </section>
  );
}
