import Image from "next/image";

const legacySections = [
  {
    section: "Section 01",
    title: "Guardian of Odisha's Cultural Memory",
    image: "/sankharichool.jpg",
    content: [
      "Throughout his literary journey, Manoj Das preserved the living spirit of Odisha.",
      "At a time when rapid modernization threatened to distance society from its roots, he captured the landscapes, folklore, customs, beliefs, and values that defined generations of Odias.",
      "His stories became more than literature. They became cultural archives.",
      "Through his writings, future generations can still encounter the villages, traditions, and human experiences that shaped Odisha's identity.",
    ],
    highlights: [
      "Preserved rural Odisha in literature",
      "Documented folklore and oral traditions",
      "Celebrated Odia cultural identity",
      "Introduced regional narratives to national audiences",
    ],
  },
  {
    section: "Section 02",
    title: "A Bridge Between Languages",
    image: "/manojdashome.jpg",
    content: [
      "Few writers have successfully represented a regional culture to a global audience.",
      "Writing with equal mastery in Odia and English, Manoj Das became a bridge connecting local traditions with international readers.",
      "His English works carried the fragrance of Odisha far beyond its borders, while his Odia writings enriched one of India's most vibrant literary traditions.",
      "Through this rare bilingual achievement, he demonstrated that great stories transcend language.",
    ],
    highlights: [
      "Renowned bilingual author",
      "Connected Odia literature with global readers",
      "Expanded the reach of Indian storytelling",
      "Inspired future bilingual writers",
    ],
  },
  {
    section: "Section 03",
    title: "The Teacher Beyond the Classroom",
    image: "/sri aurobinda.jpg",
    content: [
      "For decades, Manoj Das served as an educator at the Sri Aurobindo International Centre of Education in Puducherry.",
      "Yet his influence extended far beyond formal teaching.",
      "Students remember him not merely as a professor but as a mentor whose words encouraged curiosity, reflection, and self-discovery.",
      "His essays, lectures, and conversations became lessons in literature, culture, and life itself.",
      "Even today, readers continue to learn from him through the pages he left behind.",
    ],
    highlights: [
      "Respected educator",
      "Mentor to generations of students",
      "Promoter of intellectual and spiritual growth",
      "Lifelong advocate of learning",
    ],
  },
  {
    section: "Section 04",
    title: "Literature as a Path to Wisdom",
    image: "/satabdi ra artanada.jpg",
    content: [
      "Many writers entertain. Some educate. A few illuminate.",
      "Manoj Das belonged to the rare category of authors whose stories encouraged readers to look beyond appearances and explore deeper truths.",
      "For countless readers, his stories became journeys of self-discovery.",
    ],
    discussion: [
      "Human nature",
      "Destiny",
      "Compassion",
      "Spiritual growth",
      "The mysteries of existence",
    ],
    highlights: [
      "Combined storytelling with philosophy",
      "Introduced spirituality through literature",
      "Encouraged deeper reflection on life",
      "Influenced readers across generations",
    ],
  },
  {
    section: "Section 05",
    title: "The Scholar's Legacy",
    image: "/samanta college.jpg",
    content: [
      "Today, the writings of Manoj Das continue to be studied in universities, research institutions, and literary circles.",
      "Scholars continue to explore the depth of his storytelling, his treatment of folklore, and his unique blend of realism and mysticism.",
      "His literature remains a subject of intellectual inquiry and appreciation.",
    ],
    discussion: [
      "Academic research",
      "Doctoral studies",
      "Literary criticism",
      "Cultural scholarship",
    ],
    highlights: [
      "Studied in universities",
      "Subject of literary research",
      "Continues to inspire scholarship",
      "Recognized in academic discourse",
    ],
  },
  {
    section: "Section 07",
    title: "Influence Across Generations",
    image: "/MDendsage.webp",
    content: [
      "The true measure of a legacy lies not in awards or recognition but in continued relevance.",
      "Years after his passing, Manoj Das remains a source of inspiration for writers, readers, teachers, students, scholars, and spiritual seekers.",
      "His stories continue to be reprinted, translated, discussed, and rediscovered.",
      "New generations encounter his work and find within it the same wonder, wisdom, and humanity that captivated earlier readers.",
    ],
    highlights: [
      "Inspires contemporary writers",
      "Continues to attract new readers",
      "Remains culturally relevant",
      "Enduring literary influence",
    ],
  },
];

const honors = [
  ["1965", "Odisha Sahitya Akademi Award"],
  ["1972", "Sahitya Akademi Award"],
  ["1981", "Sarala Award"],
  ["2000", "Saraswati Samman"],
  ["2001", "Padma Shri"],
  ["2020", "Padma Bhushan"],
];

export default function LegacyContent() {
  return (
    <>
      <section className="legacy-overview">
        <div className="legacy-overview-inner">
          {legacySections.map((item) => (
            <article className="legacy-story" key={item.title}>
              <div className="legacy-story-heading">
                <p className="chapter-subheading">{item.section}</p>
                <h2>{item.title}</h2>
                <div className="legacy-story-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={420}
                    height={300}
                  />
                </div>
              </div>

              <div className="legacy-story-body">
                {item.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {item.discussion ? (
                  <div className="legacy-discussion">
                    {item.discussion.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                ) : null}

                <div className="legacy-highlights">
                  <h3>Legacy Highlights</h3>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-honors-section">
        <div className="legacy-honors-inner">
          <div className="legacy-honors-copy">
            <p className="chapter-subheading">Section 06</p>
            <h2>Honors That Became History</h2>
            <p>
              Recognition followed naturally from a lifetime devoted to
              literature and education. The honors bestowed upon Manoj Das
              represent not only personal achievement but also national
              appreciation for his contribution to Indian culture.
            </p>
            <p>
              Each award reflects a milestone in a journey dedicated to
              enriching the intellectual and cultural life of the nation.
            </p>
            <div className="legacy-honors-image">
              <Image
                src="/manojdas honoured.jpg"
                alt="Manoj Das being honored"
                width={420}
                height={300}
              />
            </div>
          </div>

          <div className="legacy-honors-list">
            {honors.map(([year, award]) => (
              <article key={award}>
                <span>{year}</span>
                <div>
                  <p>{award}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-final-section">
        <div className="legacy-final-inner">
          <p className="chapter-subheading">Final Section</p>
          <h2>The Immortal Storyteller</h2>
          <div className="legacy-final-copy">
            <p>
              On 27 April 2021, the physical journey of Manoj Das came to an
              end. But storytellers of his stature do not disappear.
            </p>
            <p>
              They remain present in every page they have written, in every
              reader who finds comfort, inspiration, or understanding through
              their words, and in every generation that rediscovers their
              vision.
            </p>
            <p>
              Today, Manoj Das lives on through his literature, his ideas, his
              teachings, and the cultural heritage he helped preserve. His books
              continue to travel where he no longer can. His voice continues to
              speak where silence might otherwise prevail.
            </p>
            <p>
              And his stories continue to remind us that imagination, wisdom,
              and compassion are among humanity&apos;s greatest treasures.
            </p>
          </div>
          <blockquote>
            &ldquo;The measure of a life is not how long it lasts, but how long
            its light continues to guide others. In the story of Manoj Das,
            that light still shines.&rdquo;
          </blockquote>
        </div>
      </section>
    </>
  );
}
