import Image from "next/image"

export default function ChildhoodBiography() {
  return (
    <>
      <section className="chapter-section">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 01</p>

          <h2 className="chapter-heading">
            The Village That Raised a Storyteller || (1934 - 1948)
          </h2>

          <div className="chapter-text">
            <p>
              Born on 27 February 1934 in the quiet village of Sankhari near Balasore,
              Manoj Das entered a world where stories were not written, they were lived.
            </p>

            <p>
              The Odisha of the 1930s was a land of rivers, monsoon winds, temple bells, and oral traditions. Villagers
              gathered beneath banyan trees to share folklore, myths, and tales of courage and wonder. Young Manoj listened carefully,
              unknowingly collecting the fragments of a future literary universe.
            </p>

            <p>
              The restless sea, the devastating cyclones, the vast green fields, and the struggles of ordinary people all left permanent
              marks on his imagination. Long before he held a pen, he had already begun writing stories within himself.
            </p>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/sankharichool.jpg"
            alt="Sankhari village school"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="chapter-section chapter-section-reverse">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 02</p>

          <h2 className="chapter-heading">
            The Fire of Youth || (1948 - 1956)
          </h2>

          <div className="chapter-text">
            <p>
              As India stepped into independence, a young Manoj Das stepped into literature. At just fourteen years of age,
              he published Satabdira Artanada, a remarkable achievement for someone so young. Soon afterward, he launched the literary magazine Diganta, revealing a determination far beyond his years.
            </p>

            <p>
              But literature alone could not satisfy his restless spirit. The nation was changing, and so was he.
            </p>

            <p>
              Like many idealistic young Indians of his generation, Manoj became deeply involved in student movements and political activism. He dreamt of justice, equality, and a better future.
              His youthful passion eventually brought him face to face with authority, leading to periods of imprisonment. Yet even during moments of struggle, one thing remained constant:
            </p>

            <h3>&quot;his faith in words.&quot;</h3>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/satabdi ra artanada.jpg"
            alt="Satabdira Artanada"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="chapter-section">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 03</p>

          <h2 className="chapter-heading">
            The Scholar and the Seeker || (1950s - 1963)
          </h2>

          <div className="chapter-text">
            <p>
              Education opened new horizons. Studying at Samanta Chandra Sekhar College and later Ravenshaw College, Manoj Das immersed himself in literature, philosophy, history, and culture.
              Books became windows into civilizations. Ideas became companions. Questions became lifelong pursuits.
            </p>

            <p>
              As he explored the works of great thinkers and writers from around the world, a deeper curiosity began to emerge.
            </p>

            <ul className="chapter-list">
              <li>Beyond politics.</li>
              <li>Beyond success.</li>
              <li>Beyond literature itself.</li>
            </ul>

            <p>
              He began searching for answers to questions that could not be found in classrooms alone.
            </p>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/samanta college.jpg"
            alt="Samanta Chandra Sekhar College"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="chapter-section chapter-section-reverse">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 04</p>

          <h2 className="chapter-heading">The Turning Point || (1963)</h2>

          <div className="chapter-text">
            <p>
              Every great life contains a moment when the road changes direction.
              For Manoj Das, that moment arrived in 1963.
              Drawn by the philosophy of Sri Aurobindo and The Mother, he moved to Puducherry and joined the Sri Aurobindo Ashram.
              What appeared to be a geographical journey was, in truth, an inner pilgrimage.
              The activist slowly became a spiritual seeker.
              The storyteller became a philosopher.
              The writer discovered a deeper purpose behind his art.
              This transformation would shape every chapter that followed.
            </p>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/sri aurobinda.jpg"
            alt="Sri Aurobindo Ashram"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  )
}
