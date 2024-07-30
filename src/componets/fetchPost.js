export const fetchData = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await request.json()
    return  data.map(({id, title, body}) => ({
            id, title, body
    }))
}