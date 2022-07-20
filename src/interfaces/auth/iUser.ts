export interface iUser{
    id: string,
    fullName: string,
    email: string,
    createdAt: string
}

export interface iUserSignInUp{
    token: string,
    user: iUser,
}