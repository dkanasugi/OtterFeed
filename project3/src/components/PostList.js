import React, { useEffect } from 'react';
import getPosts from "./getPosts"

export default () => {

    useEffect(() => {
        const getAllThePosts =() => {
            const result = getPosts();

        }
    }, [])

    return (
        <div>
            Hello world!
        </div>
    )
}