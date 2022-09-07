
const request = async (url, options) => {
    const req = await fetch(url, ...options);
}


export default request;