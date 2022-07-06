const KEY = '26961598-247f7f1db2c0a33756781ca89';
const BASE_URL = `https://pixabay.com/api/?&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const fetchImages = (query, page = 1) => {
    return fetch(`${BASE_URL}&q=${query}&page=${page}`).then(response => {
        if (!response.ok) {
            throw new Error('Nothing found to match your query');
        }

        return response.json();
    });
};
