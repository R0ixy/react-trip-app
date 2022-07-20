export interface iSignIn{
    email: string,
    password: string
}

export interface iSignUp extends iSignIn {
    fullName: string,
}