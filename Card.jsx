import Counter from './Counter.jsx'

export default function Card({ card }) {

    return (
    <div style={{
  width: 220,
  margin: 10,
  border: '2px solid #000000ff',
  borderRadius: 15,
  padding: 10,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}}>
        <h3>{card.name}</h3>
        <img src={card.img} alt={card.name} style={{
    width: '60%',
    height: 'auto',
    borderRadius: 10,
    border: '2px solid #131212ff',
    objectFit: 'cover', 
    display: 'block'
}} />
    <p style={{textAlign: 'justify'}}>{card.description}</p>
        <Counter price={card.price} />
    </div>
    )
}