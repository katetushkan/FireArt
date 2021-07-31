import { Question } from "../models/Question";

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
