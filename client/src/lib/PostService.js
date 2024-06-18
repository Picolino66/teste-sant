class PostService {
    static getPosts(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'key-api': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
                    }
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                const data = await res.json();
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }

    static async insertPost(url, params) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'key-api': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf'
                },
                body: JSON.stringify(params)
            });
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return await res.json();
        } catch (err) {
            throw new Error('Failed to insert post: ' + err.message);
        }
    }
}

export default PostService;
