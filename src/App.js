import React from 'react';
import Postcard from './components/postcard.jsx';
import { loadapi } from './components/loadapi.jsx';

class App extends React.Component {
  state = {
    data: [],
    datatotal: [],
    minposts: 0,
    maxposts: 5,
    pagadd: 5,
    searchValue: '',
  };

  async componentDidMount() {
    this.loadposts();
  }

  loadposts = async () => {
    const dadosJSON = await loadapi();
    const { minposts, maxposts } = this.state;
    this.setState({
      data: dadosJSON.slice(minposts, maxposts),
      datatotal: dadosJSON,
    });
  };

  handleClick = () => {
    const { minposts, maxposts, data, datatotal } = this.state;
    const nextpage = minposts + maxposts;
    const nextpost = datatotal.slice(nextpage, nextpage + maxposts);
    data.push(...nextpost);
    this.setState({ data, minposts: nextpage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { data, searchValue, datatotal } = this.state;
    const filteredData = !!searchValue
      ? datatotal.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : data;
    return (
      <div className='bg-slate-300 h-full'>
        {!!searchValue && <h1>SearchValue é: {searchValue}</h1>}
        <input type='search' onChange={this.handleChange} value={searchValue} />
        <div className=' flex flex-wrap gap-14 p-6 justify-center'>
          {filteredData.map((data) => (
            <Postcard
              key={data.id}
              id={data.id}
              cover={data.cover}
              title={data.title}
              body={data.body}
            />
          ))}
        </div>
        <div className='flex justify-center'>
          {!searchValue && (
            <button
              className='bg-slate-700 hover:bg-slate-800 text-white font-bold p-1 m-6 w-3/4 transition-all'
              onClick={this.handleClick}
            >
              CARREGAR MAIS POSTS
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
