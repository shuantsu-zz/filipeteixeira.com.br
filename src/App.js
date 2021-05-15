import { useState, useEffect } from 'react';
import Repo from './Repo';

export default function App() {

  const [ selectedTag, setSelectedTag ] = useState("Todos");
  const [ data, setData ] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/shuantsu/repos')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setData(json);
    });
  }, []);

  const getAllTags = json => {
    const tagsSoup = json.map(item => item.description.split('|')[1].split(','));
    let tags = ["Todos"];
    tagsSoup.map(ts => tags = [...tags, ...ts]);
    tags = [... new Set(tags)].filter(item => item !== 'hidden');
    return tags;
  }

  const getCurrentTags = description => ["Todos", ...description.split('|')[1].split(',')];

  return <div className="container">
    <div className="tags" >
    {getAllTags(data).map(tag => <button className="tag-button" onClick={()=>setSelectedTag(tag)}>{tag}</button>)}
    </div>
    <div className="grid">
    {data.filter(item => !item.description.match(/hidden/)).map((repo, key) => <Repo {...repo} selectedTag={selectedTag} tags={getCurrentTags(repo.description)} key={key} />)}
    </div>
  </div>;
}