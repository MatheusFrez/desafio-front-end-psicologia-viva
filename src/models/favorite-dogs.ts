export class FavoriteDog {
    breed: string
    _id: string
    image_url: string
    constructor(props: Omit<FavoriteDog, '_id'>) {
        this._id = props.breed + props.image_url
        this.breed = props.breed
        this.image_url = props.image_url
    }
}