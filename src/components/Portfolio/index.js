import { useState, useEffect } from 'react';
import Repo from './Repo';
//import j from './data.json';
import './style.scss';
import loader from '../../img/loader.svg';

const Loader = () => <img className="loader" src={loader} alt="Loader"/>;

export default function Portfolio() {

  const [ selectedTag, setSelectedTag ] = useState("Todos");
  const [ data, setData ] = useState(null);

   useEffect(()=>{
    fetch('https://api.github.com/users/shuantsu/repos')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setData(json);
    });
    document.title = "Filipe Teixeira";
  }, []);  

  const getAllTags = json => {
    const tagsSoup = json.map(item => item.description.split('|')[1].split(','));
    let tags = ["Todos"];
    tagsSoup.map(ts => tags = [...tags, ...ts]);
    tags = [...new Set(tags)].filter(item => item !== 'hidden');
    return tags;
  }

  const getCurrentTags = description => ["Todos", ...description.split('|')[1].split(',')];

  return <div className="container portfolio">
    <h1 className="title">Projetos open-source hospedados no <a rel="noreferrer" target="_blank" href="https://github.com/shuantsu">GitHub</a></h1>
    <div className="tags" >
    {data === null ? <Loader /> : getAllTags(data).map((tag, key) => <button key={key} className="tag-button" onClick={()=>setSelectedTag(tag)}>{tag}</button>)}
    </div>
    <div className={data === null ? "loader-wrapper" : "grid"}>
    {data === null ? <Loader /> : data.filter(item => !item.description.match(/hidden/)).map((repo, key) => <Repo {...repo} selectedTag={selectedTag} tags={getCurrentTags(repo.description)} key={key} />)}
    </div>
  </div>;
}