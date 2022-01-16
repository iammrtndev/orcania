export type Clan = 'wolf' | 'sylgarden'
export type Attribut = 'mercenary' | 'adventurer' | 'sorcerer' | 'forest'

export const ColorByClan: { [n in Clan]: string } = {
  wolf: '#472727',
  sylgarden: '#BDE68E',
}
