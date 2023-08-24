import ITown from "../interfaces/ITown"

export default interface IProvince {
    id: number
    name: string
    img: string
    towns: Array<ITown>
}