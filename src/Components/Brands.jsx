import React from 'react'
import Cards from './Cards'
import H1 from "../assets/1.jpg"
import { Link } from 'react-router-dom'

export default function Brands() {
    return (
        <div>
            <div className='flex flex-row'>
                <Link to={"/Maruti"}>
                <Cards image={H1} title={"Maruti Suzuki"} />
                </Link>
                <Cards image={H1} title={"Hyundai"} />
                <Cards image={H1} title={"Mahindra"} />
                    <Cards image={H1} title={"Toyota"} />
            </div>
            <div className='flex flex-row'>
                <Cards image={H1} title={"Honda"} />
                <Link to={"/bmw"}>
                <Cards image={H1} title={"BMW"}  />
                </Link>
                <Cards image={H1} title={"Tata"} />
                <Cards image={H1} title={"Honda"} />
            </div>
            <div className='flex flex-row'>
                <Cards image={H1} title={"Jaguar"} />
                <Cards image={H1} title={"Audi"} />
                <Cards image={H1} title={"Tesla"} />
                <Cards image={H1} title={"Mercedes"} />
            </div>
            <div className='flex flex-row'>
                <Cards image={H1} title={"Land Rover"} />
                <Cards image={H1} title={"Porsche"} />

                <Cards image={H1} title={"Ford"} />
                <Cards image={H1} title={"Jeep"} />
            </div>
        </div>
    )
}
