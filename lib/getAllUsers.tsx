import React from 'react'

export default async function getAllUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
}
