const getJSON = function (src) {
    return fetch(src)
        .then(request => {
            if (request.status === 200) {
                return request.json()
            }
        })
}


export { getJSON }