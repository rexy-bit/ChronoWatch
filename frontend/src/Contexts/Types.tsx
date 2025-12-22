

export interface User{

    _id : string;
    name : string;
    email : string;
    role : string;
    createdAt : string;
    password? : string;
    cart : MongooseCartType;
}


export interface CartSchema{
    itemId : string;
    quantity : number;

}

export interface DeliveryOption{

    id : string;
    name : string;
    delayDays : number;
    price : number;

}

export interface MongooseCartType{
    items : CartSchema[];
    deliveryOption : DeliveryOption;
}


export interface Item{
    _id : string;
    name : string;
    description : string;
    stock : number;
    rate : number;
    category : string;
    type : string;
    price: number;
    images : string[];
    recommandationScore : number;
    keyWords : string[];
    brand: string;
}


export interface FilterData{
    category : string;
    brand : string;
    type : string;
}