export default function postcard({id,cover,title,body}) {
  return (
    <div
      className='w-72 bg-white  hover:scale-105 shadow-lg rounded-lg min-h-[300px] transition-all'
      key={id}
    >
      <img className='rounded-t-lg' src={cover} alt={title} />
      <h1 className='font-bold text-lg p-2'>{title}</h1>
      <p className='p-2'>{body}</p>
    </div>
  );
}
