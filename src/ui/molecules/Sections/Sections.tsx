import { Section } from '../../atoms/Section/Section.tsx'
import { sections } from '../../../constants/constants.ts'

export const Sections = () =>
  sections.map(({ id, title, content }, index) => (
    <Section key={id} id={id} title={title} content={content} index={index} />
  ))
