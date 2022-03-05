export const truncateFileName = (name: string): string =>
  name.length > 5 ? `${name.slice(0, 5)}... .${name.split('.').pop()}` : name
