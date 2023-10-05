import Postcard from './postcard.jsx';

export const Posts = ({ posts }) => {
  <div className=' flex flex-wrap gap-14 p-6 bg-zinc-500 justify-center'>
    {posts.map((data) => (
      <Postcard
        key={data.id}
        id={data.id}
        cover={data.cover}
        title={data.title}
        body={data.body}
      />
    ))}
  </div>;
};