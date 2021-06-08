export default function Repo({name, description, language, tags, selectedTag, html_url, homepage}) {
  const formatName = name => name.replace(/_/g, " ");

  const activeState = tags.indexOf(selectedTag) > -1 ? "active" : "hidden";

  return <div className={`repo ${activeState}`}>
    <div className="repo-content">
      <h1>{formatName(name)}</h1>
      <img src={`${html_url}/blob/master/thumb.png?raw=true`} alt="Imagem representativa do repositório" />
      <p><span className="language">{language}</span> - {description.split('|')[0]}</p>
    </div>
    <div className="repo-buttons">
      
      {homepage && <a href={homepage} rel="noreferrer" target="_blank"><button className="page-button">Acessar página</button></a>}
      <a href={html_url} rel="noreferrer" target="_blank"><button className="repo-button">Acessar repositório</button></a>
    </div>
  </div>;
}