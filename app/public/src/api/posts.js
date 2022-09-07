export const getPosts = async () => {
    return await fetch('http://localhost:5000/api/posts');
}