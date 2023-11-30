export const volunteersEng = [
  'Emily Johnson',
  'David Anderson',
  'Sarah Martinez',
  'John Smith',
  'Lisa Brown',
  'Michael Davis',
  'Jessica Wilson',
  'Robert Taylor',
  'Olivia Harris',
  'William Clark',
] as const

export const volunteers = [
  'Serhii Skrypal',
  'Olena Kovalenko',
  'Kateryna Yurchenko',
  'Volodymyr Shevchenko',
  'Natalia Hrytsenko',
  'Andrii Voznyi',
  'Anastasiia Koval',
  'Dmytro Ivanenko',
  'Mariya Sokolets',
] as const

export const spreadsheetOptions = {
  type: [
    'New Appeal',
    'In Verification',
    'Self Sufficient',
    'Aid Eligible',
    'Curated',
    'Blacklist',
  ],
  tag: ['Food', 'Medicine', 'Hygiene', 'Custom'],
  status: [
    'Not Started',
    'Verified',
    'In Progress',
    'Completed',
    'Partially Done',
    'No Answer',
    'Obsolete',
  ],
  managedBy: volunteers,
  volunteer: volunteers,
} as const
