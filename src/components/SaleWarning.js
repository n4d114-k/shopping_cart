import React from 'react';

function SaleWarning() {

  const styles = {
    display: 'inline-block',
    float: 'right',
    color: 'var(--salmon-red)',
    border: '1px solid var(--salmon-red)',
    borderRadius: 3,
    padding: 10,
    margin: '0 25px'
  }

  return (
    <div className="sale-warning" style={{ width: '100%' }}>
      <p style={styles}><b>SALE! </b> Now you can get a 50% discount for every third kilogram of <b>papayas</b></p>
    </div>
  );
}

export default SaleWarning;
