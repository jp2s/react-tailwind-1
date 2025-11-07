import { cyanBackgrounds } from '../constants/constants.ts'

export const cx = (classes: string[]) => classes.filter(Boolean).join(' ')

const getBackground = (index: number, backgrounds: string[]) => {
  const background = backgrounds[index]

  return background ?? 'bg-white'
}

export const { getCyanBackground } = {
  getCyanBackground: (index: number) => getBackground(index, cyanBackgrounds),
}
