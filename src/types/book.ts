export type Rating = {
  source?: string
  value: number
}

export type Book = {
  name: string
  author: string
  category: string
  ratings: Array<Rating>
  publishYear: number
}
