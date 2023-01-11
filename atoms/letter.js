//@ts-check
import { atom } from "jotai"

/**@typedef {{ type: "circle" | "star" | "heart", position: { x: number, y: number } }} Sticker */
/**@typedef {{ backgroundColor: string | null, from: string | null, to: string | null, letter: string | null, letterType: "torn" | "hole" | "overlap", stickers?: Sticker[], font: "cute" | "hand" | "sans", tags: string[] | null }} Letter */
/**@type {Letter} */
const letterInitialValue = {
    font: "hand",
    to: null,
    from: null,
    letter: null,
    tags: null,
    letterType: "torn",
    backgroundColor: null,
}

const letter = atom(letterInitialValue)

export { letter }