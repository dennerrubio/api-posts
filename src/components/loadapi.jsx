export const loadapi = async () => {
  const postsAPI = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosAPI = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsAPI, photosAPI]);

  const postsJSON = await posts.json();
  const photosJSON = await photos.json();

  const dadosJSON = postsJSON.map((p, i) => {
    return { ...p, cover: photosJSON[i].url };
  });
  return dadosJSON;
};
