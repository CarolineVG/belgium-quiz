import ITown from "../interfaces/ITown"

export interface IProvince {
    id: number
    name: string
    img: string
    towns: Array<ITown>
}