import { SectionData } from '../../../types/SectionData.ts'
import { getCyanBackground } from '../../../utils/utils.ts'

type SectionProps = SectionData & { index: number }

export const Section = ({ id, title, content, index }: SectionProps) => (
  <section
    key={id}
    id={id}
    className={`p-16 border-b-4 border-black ${getCyanBackground(index)}`}
  >
    <h3 className="text-4xl font-bold uppercase mb-6 border-b-4 border-black inline-block">
      {title}
    </h3>

    {content.map((item, index) => (
      <p key={index} className="text-xl max-w-3xl m-4">
        {item}
      </p>
    ))}
  </section>
)
