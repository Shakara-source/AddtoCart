
global.items = []



class shoppingCart{
    constructor({name, price, new_name, new_price}){
        this.name = name,
        this.price = price,
        this.new_name = new_name,
        this.new_price = new_price

    }
    findCart(name,price){
        let idx = this.global.items.findIndex(item => item.name == name || item.price == price)
        return items[idx]
    }
    addToCart(name,price){

        let add = items.append(obj)
        return add
    }
    editCart(name, price, new_name, new_price){

        let cartItem = this.findCart(name,price)
    
        
        cartItem['name'] = new_name
        cartItem['price'] = new_price
 
    
        let edit = items.append(json)
        return edit

    }
    
    delCart(arr,name){
        let idx = this.global.items.findIndex(element => element.name == name)
        let del = items.splice(arr.name);
        let message = '{message: “Deleted”}'
        return del, message
    }
}

module.exports = {items, shoppingCart}
