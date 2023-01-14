import React,{useState,useEffect} from 'react'
import styles from './Search.module.css'
const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/api/search?${searchText}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [searchText])

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const handleAdd = () => {
    //add the product to cart local storage
    alert("Added to cart")
  }
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={searchText}
      />
       <div className={styles.productContainer}>
      {products.map((product) => (
        <div className={styles.productCard}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div className="priceBox">
            <p>{product.price}</p>
            <button onClick={handleAdd}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}    
export default Search
      