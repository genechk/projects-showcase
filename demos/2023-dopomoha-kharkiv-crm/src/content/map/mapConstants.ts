export const districtLabels = {
  kharkiv: 'All Kharkiv',
  holodnohirskyi: 'Kholodnohirskyi',
  industrialnyi: 'Industrialnyi',
  kyivskyi: 'Kyivskyi',
  niemyshlia: 'Nemyshlyanskyi',
  novobavarskyi: 'Novobavarskyi',
  osnovianskyi: 'Osnovianskyi',
  saltivskiy: 'Saltivskyi',
  shevchenkivskyi: 'Shevchenkivskyi',
  slobidskyi: 'Slobidskyi',
} as const

export type District = keyof typeof districtLabels
export const currentDistrict: District = 'kharkiv'
