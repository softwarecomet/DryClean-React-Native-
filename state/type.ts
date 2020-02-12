
export interface User {
    user_id : number,
    email : string,
    password : string
}

export interface Cart {

}

export interface SystemState {
    user : User,
    cart : Cart,
    loading : boolean
}
