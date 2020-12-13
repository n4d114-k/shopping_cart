import React from 'react';

function ProductsList() {
  return(
    <div className="products-container">
      <div className="product-card">
        <h3>Bananas</h3>
        <img src="https://avatars2.githubusercontent.com/u/63319208?s=460&u=cf6db0c70720ca1c82dcc1c8ef4bc5b726f8ab2c&v=4" alt="#"/>
        <form>
          <label htmlFor="kilograms">Amount(in kg)</label>
          <input type="number" id="kilograms" name="kilograms" min="1" />
          <p>{`Price: ${10}$`}</p>
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
      <div className="product-card">
        <h3>Apples</h3>
        <img src="https://avatars2.githubusercontent.com/u/63319208?s=460&u=cf6db0c70720ca1c82dcc1c8ef4bc5b726f8ab2c&v=4" alt="#"/>
        <form>
          <label htmlFor="kilograms">Amount(in kg)</label>
          <input type="number" id="kilograms" name="kilograms" min="1" />
          <p>{`Price: ${8}$`}</p>
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
      <div className="product-card">
        <h3>Papaya</h3>
        <img src="https://avatars2.githubusercontent.com/u/63319208?s=460&u=cf6db0c70720ca1c82dcc1c8ef4bc5b726f8ab2c&v=4" alt="#"/>
        <form>
          <label htmlFor="kilograms">Amount(in kg)</label>
          <input type="number" id="kilograms" name="kilograms" min="1" />
          <p>{`Price: ${10}$`}</p>
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
    </div>
  );
}

export default ProductsList;
