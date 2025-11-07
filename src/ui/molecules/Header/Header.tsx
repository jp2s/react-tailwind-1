import { Button } from '../../atoms/Button/Button.tsx'
import { sections } from '../../../constants/constants.ts'

export const Header = () => (
  <header className="border-b-4 border-black p-6 flex justify-between items-center bg-rose-100 sticky top-0 z-50">
    <h1 className="text-3xl font-bold uppercase tracking-tight">
      My Brutalist Portfolio
    </h1>

    <nav className="space-x-6 m-4">
      {sections.map(({ id, title }) => (
        <Button key={title} isNav href={id} label={title} />
      ))}
    </nav>
  </header>
)
