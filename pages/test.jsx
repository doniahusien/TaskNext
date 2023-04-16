import React from 'react'

const test = () => {
    return (
        <>
         <div className="grid-container">
  <div className="grid-item item-1">1</div>
  <div className="grid-item item-2">2</div>
  <div className="grid-item item-3">3</div>
</div>

<style jsx>{`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* set 3 columns with equal width */
    gap: 1rem;
  }

  .grid-item {
    background-color: #ccc;
    text-align: center;
  }
 

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr 1fr; /* set 1 column for small screens */
      grid-template-rows: auto;
    }
    
    .item-2 {
        grid-column: 1 / span 3;
      grid-row: auto;
      order:-2;
    }
  }
`}</style>

        </>
    )
}

export default test