export interface Pokemon {
    id: number,
    name: string,
    height: number,
    weight: number,
    types: [{type: {name: string}}],
    stats: number[],
    img: string
}