"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type LiteraryWork = {
  title: string;
  year: string;
  type: string;
  description: string;
};

const odiaWorks: LiteraryWork[] = [
  {
    title: "Aranyaka",
    year: "1961",
    type: "Short story collection",
    description:
      "A landmark Odia collection that helped establish Manoj Das's reputation for blending village realism, folklore, mystery, and philosophical wonder. Its forested imagination carries both the texture of Odisha and the larger moral questions that define his fiction.",
  },
  {
    title: "Sesha Basantara Chithi",
    year: "1966",
    type: "Short story collection",
    description:
      "An early major collection whose title suggests a letter from the fading edge of spring. The stories preserve the ache of transition: rural memory, fragile relationships, and the quiet emotional afterlife of change.",
  },
  {
    title: "Prabhanjana",
    year: "1987",
    type: "Novel",
    description:
      "Known in English as Cyclones, this novel uses the storm as both event and metaphor. It explores how social pressure, memory, desire, and destiny unsettle human lives with the force of weather.",
  },
  {
    title: "Kanaka Upatyakara Kahani",
    year: "1994",
    type: "Novel",
    description:
      "A tale of the Golden Valley that draws on Das's gift for fable, landscape, and cultural memory. The narrative turns a place into an imaginative archive of longing, myth, and human aspiration.",
  },
  {
    title: "Amrutaphala",
    year: "1996",
    type: "Novel",
    description:
      "A celebrated later novel, honored with the Saraswati Samman, that moves through questions of fulfillment, temptation, mortality, and inner awakening. The title's fruit becomes a symbol of the human search for something deathless.",
  },
  {
    title: "Samudra-kulara Eka Grama",
    year: "1996",
    type: "Childhood memoir",
    description:
      "A memoir of growing up in a coastal Odia village. Through sea, fields, festivals, elders, and childhood wonder, Das records the living world that nourished his lifelong literary imagination.",
  },
  {
    title: "Upakatha Sataka",
    year: "2002",
    type: "Fable collection",
    description:
      "A gathering of one hundred tale-like pieces that renew the Indian tradition of fables and moral storytelling. The work reflects Das's belief that wisdom can travel lightly through wonder, wit, and parable.",
  },
];

const englishWorks: LiteraryWork[] = [
  {
    title: "The Crocodile's Lady",
    year: "1975",
    type: "Short story collection",
    description:
      "A collection that brought Manoj Das's fable-like imagination to English readers with wit, mystery, and a distinctly Indian sense of wonder. Its stories move between village memory, satire, and the uncanny.",
  },
  {
    title: "The Submerged Valley",
    year: "1986",
    type: "Short story collection",
    description:
      "A major English collection where buried histories, altered landscapes, and inner lives rise to the surface. Das uses the valley as an image for memory: hidden, resonant, and never entirely lost.",
  },
  {
    title: "Cyclones",
    year: "1987",
    type: "Novel",
    description:
      "A novel of turbulence in both nature and society. Set against the force of storm and historical transition, it follows lives shaken by ambition, idealism, fear, and the search for moral direction.",
  },
  {
    title: "A Tiger at Twilight",
    year: "1991",
    type: "Novel",
    description:
      "A suspenseful and philosophical novel set around a princely world in decline. The hunt for a tiger becomes a journey through power, loneliness, loyalty, and the mysterious border between fear and revelation.",
  },
  {
    title: "Farewell to a Ghost",
    year: "1994",
    type: "Short stories and a novelette",
    description:
      "A collection where ghosts are not merely supernatural presences but echoes of memory, guilt, longing, and social change. The stories balance humor, tenderness, irony, and quiet metaphysical depth.",
  },
  {
    title: "The Escapist",
    year: "2001",
    type: "Novel",
    description:
      "A later novel concerned with flight from ordinary reality and the consequences of that inward escape. Das explores illusion, self-discovery, and the human desire to step beyond the given world.",
  },
  {
    title: "Chasing the Rainbow",
    year: "2004",
    type: "Memoir",
    description:
      "A memoir of childhood village life, published in English as Chasing the Rainbow: Growing up in an Indian Village. It preserves the rhythms, rituals, people, and wonder of a vanishing rural world.",
  },
];

function LiteraryArchive({
  archiveName,
  intro,
  sectionLabel,
  title,
  works,
}: {
  archiveName: string;
  intro: string;
  sectionLabel: string;
  title: string;
  works: LiteraryWork[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = works[activeIndex];

  const shiftWork = (direction: number) => {
    setActiveIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0) {
        return works.length - 1;
      }

      if (nextIndex >= works.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  return (
    <section className="odia-literary-section">
      <div className="odia-literary-inner">
        <div className="odia-literary-intro">
          <p className="chapter-subheading">{sectionLabel}</p>
          <h2 className="odia-literary-heading">{title}</h2>
          <p>{intro}</p>
        </div>

        <div className="odia-archive" aria-label={`${title} timeline`}>
          <div className="book-cover-stack" aria-hidden="true">
            <div className="book-cover book-cover-left">
              <span>{archiveName}</span>
              <strong>{activeWork.title}</strong>
            </div>
            <div className="book-cover book-cover-right">
              <span>{activeWork.year}</span>
              <strong>Manoj Das</strong>
            </div>
          </div>

          <div className="odia-timeline">
            <div className="odia-timeline-line" />
            {works.map((work, index) => (
              <button
                className={`odia-timeline-point ${
                  index === activeIndex ? "is-active" : ""
                }`}
                key={work.title}
                onClick={() => setActiveIndex(index)}
                style={
                  {
                    "--point-position": `${50 + (index - activeIndex) * 14}%`,
                  } as CSSProperties
                }
                type="button"
              >
                <span>{work.year}</span>
              </button>
            ))}
          </div>

          <div className="odia-archive-controls">
            <button
              aria-label={`Go back two ${archiveName} works`}
              onClick={() => shiftWork(-2)}
              type="button"
            >
              &lt;&lt;
            </button>
            <button
              aria-label={`Go to previous ${archiveName} work`}
              onClick={() => shiftWork(-1)}
              type="button"
            >
              &lt;
            </button>
            <div className="active-work-pill">{activeWork.title}</div>
            <button
              aria-label={`Go to next ${archiveName} work`}
              onClick={() => shiftWork(1)}
              type="button"
            >
              &gt;
            </button>
            <button
              aria-label={`Go forward two ${archiveName} works`}
              onClick={() => shiftWork(2)}
              type="button"
            >
              &gt;&gt;
            </button>
          </div>

          <article className="odia-work-description">
            <div>
              <span>{activeWork.year}</span>
              <p>{activeWork.type}</p>
            </div>
            <p>{activeWork.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function LiteraryWorks() {
  return (
    <>
      <LiteraryArchive
        archiveName="Odia Archive"
        intro="The Odia writings of Manoj Das preserve the cultural memory of Odisha. Through villages, myths, landscapes, and human relationships, he captured the essence of a changing society while preserving its timeless spirit."
        sectionLabel="Section 03"
        title="The Odia Literary Universe"
        works={odiaWorks}
      />
      <LiteraryArchive
        archiveName="English Archive"
        intro="Writing in English allowed Manoj Das to carry the spirit of Indian storytelling beyond regional boundaries. His English works introduced global readers to the rich imagination, philosophy, and cultural depth that defined his literary world."
        sectionLabel="Section 04"
        title="The English Literary Universe"
        works={englishWorks}
      />
      <section className="reflection-section">
        <div className="reflection-inner">
          <div className="reflection-heading-block">
            <p className="chapter-subheading">Section 05</p>
            <h2 className="reflection-heading">Poetry, Essays & Reflections</h2>
            <p>
              Beyond fiction, Manoj Das built a quieter body of work through
              poems, essays, memoirs, and meditative reflections. These writings
              reveal the thinker behind the storyteller.
            </p>
          </div>

          <div className="reflection-grid">
            <article className="reflection-panel reflection-panel-large">
              <span>Poetry</span>
              <h3>His earliest literary love</h3>
              <p>
                Satabdira Artanada marked one of the earliest signs of Manoj
                Das&apos;s literary calling. His early poetic works carried the
                urgency of youth, social feeling, and a lyrical sensitivity that
                later deepened into fiction and reflective prose.
              </p>
            </article>

            <article className="reflection-panel">
              <span>Essays</span>
              <h3>Culture, civilization, and identity</h3>
              <p>
                His essays often moved through questions of culture,
                civilization, spirituality, and national identity. They show his
                concern for India&apos;s inner life: not only its history and
                institutions, but its values, myths, symbols, and moral
                imagination.
              </p>
            </article>

            <article className="reflection-panel">
              <span>Memoirs</span>
              <h3>Memory as living literature</h3>
              <p>
                Chasing the Rainbow and his personal reflections preserve the
                emotional landscape of childhood, village life, and the slow
                shaping of a writer&apos;s consciousness. In these works,
                remembrance becomes a way of understanding civilization itself.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="living-words-section">
        <div className="living-words-inner">
          <div className="living-words-title">
            <p className="chapter-subheading">Section 06</p>
            <h2 className="reflection-heading">Where His Words Live Today</h2>
          </div>

          <div className="living-words-list">
            <article>
              <span>01</span>
              <div>
                <h3>Schools & Universities</h3>
                <p>
                  His writings continue to be included in academic curricula
                  and literary studies, keeping his stories present for students
                  of Odia, Indian English, and comparative literature.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Research & Scholarship</h3>
                <p>
                  Numerous scholars have produced research papers, theses, and
                  critical studies on his works, examining his narrative craft,
                  mysticism, humor, social vision, and bilingual achievement.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Translation</h3>
                <p>
                  His works have been translated into several Indian and foreign
                  languages, allowing readers beyond Odisha and India to enter
                  his imaginative world.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Literary Discussions</h3>
                <p>
                  His stories continue to be discussed in literary festivals,
                  academic seminars, reading circles, and cultural institutions,
                  where new readers keep discovering fresh meanings in them.
                </p>
              </div>
            </article>

            <article>
              <span>05</span>
              <div>
                <h3>Digital Archives</h3>
                <p>
                  Today, new generations discover Manoj Das through digital
                  publications, online archives, documentaries, and educational
                  resources.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
