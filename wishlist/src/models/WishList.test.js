import { WishListItem, WishList } from "./WishList";

it("can create a instance of a model", () => {
    const item = WishListItem.create({
        "name": 'Chronicles of Narnia Box Set - C.S. Lewis',
        "price": 28.73,
        "image": "https://kinofilmpro.ru/wp-content/uploads/2019/10/narniya-fon.jpg"
    })

    expect(item.price).toBe(28.73)
    item.changeName('Daniel')
    expect(item.name).toBe("Daniel")
})

it("can create a wishlist", () => {
    const list = WishList.create({
        items: [
            {
                name: 'Chronical of Narnia Box Set',
                price: 28.73
            }
        ]
    })

    expect(list.items.length).toBe(1)
})

it("can add new items", () => {
    const list = WishList.create()
    list.add(
        WishListItem.create({
            name: "Chesterton",
            price: 10
        })
    )

    expect(list.items.length).toBe(1)
    expect(list.items[0].name).toBe("Chesterton")
    list.items[0].changeName("Book of G.K. Chesterton")
    expect(list.items[0].name).toBe("Book of G.K. Chesterton")
})