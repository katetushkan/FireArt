export function numericOnly(value: string): boolean {
  return value.match(/^[0-9]+$/) !== null;
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const htmlEntities: Record<string, string> = {
  '&#039;': "'",
  '&quot;': '"',
  '&ldquo;': '“',
  '&rdquo;': '”',
  '&deg;' : '°',
  '&Aring;': 'Å',
  '&ocirc;': 'ô'
};

export function decodeHTML(src: string): string {
  return src.replaceAll(/&#?\w+;/g, match => htmlEntities[match] ?? match);
}
