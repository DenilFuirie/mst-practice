import {types} from 'mobx-state-tree';

const data = {
    "name": 'Chronicles of Narnia Box Set - C.S. Lewis',
    "price": 28.73,
    "image": "https://kinofilmpro.ru/wp-content/uploads/2019/10/narniya-fon.jpg"
}

export const WishListItem = types
    .model('WishListItem', {
        name: types.string,
        price: types.number,
        image: ""
    }).actions(self => ({
        changeName(newName) {
            self.name = newName
        },
        changePrice(newPrice) {
            self.price = newPrice
        },
        changeImage(newImage) {
            self.image = newImage
        }
    }))


export const WishList = types
    .model({
        items: types.array(WishListItem)
    })
    .actions(self => ({
        add(item) {
            self.items.push(item)
        }
    }))

console.log(WishListItem.name)