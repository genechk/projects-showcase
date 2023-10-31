export type ProjectDates = {
  startDate: Date
  endDate: Date
}

export const getProjectTimespan = ({ startDate, endDate }: ProjectDates) => {
  const projectStart = new Date(startDate)
  const projectEnd = new Date(endDate)

  return projectStart.getFullYear() === projectEnd.getFullYear()
    ? projectEnd.getFullYear()
    : `${projectStart.getFullYear()}–${projectEnd.getFullYear()}`
}
