import Card from './Card.jsx'
import data from './data.js'

export default function Catalog() {
      return( <>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.products.map((i) => (
            <Card
              key={i.id}
              card={i}
              />
          ))}
        </div>
        </>
      )
    
}
