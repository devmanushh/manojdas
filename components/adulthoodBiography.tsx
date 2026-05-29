import Image from "next/image"

export default function AdulthoodBiography() {
  return (
    <>
      <section className="chapter-section">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 05</p>

          <h2 className="chapter-heading">
            The Master Storyteller || (1963 - 2000)
          </h2>

          <div className="chapter-text">
            <p>
              The decades that followed witnessed the flowering of one of India&apos;s most remarkable literary careers.
              Writing in both Odia and English, Manoj Das created stories that transcended language, geography, and time.
              His characters came from villages and cities. His plots blended reality with mystery. His narratives carried humor, compassion, philosophy, and wonder.
              Readers often entered his stories expecting entertainment and left with reflection. He possessed a rare gift:
              the ability to reveal the extraordinary hidden within ordinary life. By now, his name had become synonymous with storytelling itself.
            </p>

            <p>Notable Themes</p>

            <ul className="chapter-list">
              <li>Rural India</li>
              <li>Human nature</li>
              <li>Mysticism</li>
              <li>Folklore</li>
              <li>Spirituality</li>
              <li>Humor and satire</li>
            </ul>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/manojdashome.jpg"
            alt="Manoj Das"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="chapter-section chapter-section-reverse">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 06</p>

          <h2 className="chapter-heading">
            Honors Earned Through Humility || (1965 - 2020)
          </h2>

          <div className="chapter-text">
            <p>
              Awards came steadily, but recognition was never his destination. His true commitment remained to literature, education, and spiritual growth.
              Yet the nation could not ignore his contribution. Over the years, some of India&apos;s highest literary and civilian honors found their way to him.
              Each award celebrated not only a writer but also a thinker whose words had enriched generations.
            </p>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/manojdas honoured.jpg"
            alt="Manoj Das being honored"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="chapter-section">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 07</p>

          <h2 className="chapter-heading">The Elder Sage || (2000 - 2021)</h2>

          <div className="chapter-text">
            <p>
              In his later years, Manoj Das became a revered literary elder. Writers sought his guidance. Students sought his wisdom.
              Readers sought his insight. From Puducherry, he continued writing, teaching, reflecting, and inspiring.
              Age softened neither his curiosity nor his creativity. His words remained as thoughtful and luminous as ever.
              The storyteller had become a living institution.
            </p>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/MDendsage.webp"
            alt="Manoj Das in later years"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="chapter-section chapter-section-reverse">
        <div className="chapter-content">
          <p className="chapter-subheading">Chapter 08</p>

          <h2 className="chapter-heading">
            When the Story Became Eternal || (27 April 2021)
          </h2>

          <div className="chapter-text">
            <p>
              On 27 April 2021, Manoj Das passed away in Puducherry at the age of eighty-seven.
              Across Odisha and beyond, readers mourned the loss of a beloved literary giant.
              But some lives cannot be measured by years alone.
              They are measured by the worlds they create. The minds they influence. The hearts they touch.
              His physical journey came to an end. His literary journey did not.
            </p>
          </div>
        </div>

        <div className="chapter-image">
          <Image
            className="chapter-content-image"
            src="/manojdas death.jpg"
            alt="Memorial for Manoj Das"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  )
}
