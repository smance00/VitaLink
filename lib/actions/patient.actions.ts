'use server';

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";
import React from 'react'


export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(
            ID.unique(), 
            user.email,
            undefined,
            user.name
        )
        console.log({newUser})

        return parseStringify(newUser);
    } catch (error: any) {
        if(error && error?.code === 409) {
            const existingUser = await users.list([
                Query.equal("email", [user.email])
            ])

            return existingUser.users[0];  // Corrected to access the users array properly
        } else {
            throw error;  // Re-throw the error if it's not a 409 conflict
        }
    }
};
export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);
      
        return parseStringify(user);
    }   catch(error) {
        console.log(error)
    }
}
