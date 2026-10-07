import { useState } from "react";

export default function Counter({ price }) {
    const [count, setCount] = useState(0)
    const finalPrice = price - (price * count) / 100 

    return (
        <div style={{ 
    borderRadius: 10,
    color: 'black',
    transition: '0.2s linear',
    textAlign: 'center' }}>
            <p>Скидка {count}%</p>
            <p>Цена: {Math.round(finalPrice)} ₽</p>
            <button onClick={() => setCount(c => Math.min(c + 1, 90))}>Хочу скидку</button>
        </div>
    )
}
