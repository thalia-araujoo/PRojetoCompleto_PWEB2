import product from '../model/product.js';

class productRepository {
    constructor(){
        this.product = [
            new product(1, 'Laptop', 'Eletronics', 1200),
            new product(2, 'Headphones', 'Eletronics', 200),
            new product(3, 'Coffee Mug', 'Kitchen', 15),
            new product(4, 'Notebook', 'Stationery', 5),
        ];
    }

}
export default new productRepository;