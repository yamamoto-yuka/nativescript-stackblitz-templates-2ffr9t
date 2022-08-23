export interface User {
    jwt: string;
    user: {
        id: number;
        username: string;
        emai: string;
        confirmed: boolean;
        blocked: boolean;
    }
}


export interface Product {
    id: number;
    attributes: {
        product_name: string;
        product_desc: string;
        product_price: number;
        product_quantity: number;
        product_display: boolean;
        product_image: {
            data: [
                {
                    id: number;
                    attributes: {
                        url: string;
                    }
                }
            ]
        }
    }
}



export interface Products {
    data: Product[];
}