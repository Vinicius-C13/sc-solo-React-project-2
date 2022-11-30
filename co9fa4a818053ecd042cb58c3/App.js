import React from "react"
import data from "./data"
import Card from "./components/Card"
import Header from "./components/Header"

console.log(data)

const cards = data.map((item)=> {return <Card item={item}/>})

export default function App() {
    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}