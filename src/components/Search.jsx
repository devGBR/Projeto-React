const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        
        <div>
            <input type="text" className="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <label className="label2" htmlFor="">
                    Pesquisar
                </label>
        </div>
       

    </div>
  )
}

export default Search