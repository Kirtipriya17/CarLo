
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

const option = [
    { value: "Brands", label: "All Brands" },
    { value: "AstonMartin", label: "Aston Martin" },
    { value: "DB12", label: "Aston Martin DB12" },
    { value: "DBX", label: "Aston Martin DBX" },
    { value: "Vantage", label: "Aston Martin Vantage" },
    { value: "Audi", label: "Audi" },
    { value: "ETron", label: "Audi E-Tron-GT" },
    { value: "Q8", label: "Audi Q8" },
    { value: "RS5", label: "Audi RS5" },
    { value: "BMW", label: "BMW" },
    { value: "Series7", label: "BMW 7 Series" },
    { value: "IX", label: "BMW IX" },
    { value: "M4", label: "BMW M4 Competition" },
    { value: "Z4", label: "BMW Z4" },
    { value: "Ferrari", label: "Ferrari" },
    { value: "F296GTB", label: "Ferrari 296 GTB" },
    { value: "F8Tributo", label: "Ferrari F8 Tributo" },
    { value: "Roma", label: "Ferrari Roma" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Creta", label: "Hyundai Creta" },
    { value: "I20NLine", label: "Hyundai i20 N-Line" },
    { value: "Verna", label: "Hyundai Verna" },
    { value: "Jaguar", label: "Jaguar" },
    { value: "FPace", label: "Jaguar F-Pace" },
    { value: "FType", label: "Jaguar F-Type" },
    { value: "IPace", label: "Jaguar I-Pace" },
    { value: "Kia", label: "Kia" },
    { value: "Carens", label: "Kia Carens" },
    { value: "EV6", label: "Kia Ev6" },
    { value: "Seltos", label: "Kia Seltos" },
    { value: "Sonet", label: "Kia Sonet" },
    { value: "Lamborghini", label: "Lamborghini" },
    { value: "HuracanSTO", label: "Lamborghini Huracan STO" },
    { value: "Urus5", label: "Lamborghini Urus 5" },
    { value: "Mahindra", label: "Mahindra" },
    { value: "BoleroNeo", label: "Mahindra Bolero Neo" },
    { value: "ScorpioN", label: "Mahindra Scorpio N" },
    { value: "MahindraThar", label: "Mahindra Thar" },
    { value: "XUV300", label: "Mahindra XUV300" },
    { value: "XUV700", label: "Mahindra XUV700" },
    { value: "Maruti", label: "Maruti Suzuki" },
    { value: "Baleno", label: "Maruti Suzuki Baleno" },
    { value: "Dzire", label: "Maruti Suzuki Dzire" },
    { value: "Ertiga", label: "Maruti Suzuki Ertiga" },
    { value: "Fronx", label: "Maruti Suzuki Fronx" },
    { value: "MercedesBenz", label: "Mercedes-Benz" },
    { value: "AMGA35", label: "Mercedes-Benz AMG A35" },
    { value: "Porsche", label: "Porsche" },
    { value: "P718", label: "Porsche 718" },
    { value: "Taycan", label: "Porsche Taycan" },
    { value: "RollsRoyce", label: "Rolls-Royce" },
    { value: "Phantom", label: "Rolls-Royce Phantom" },
    { value: "Spectre", label: "Rolls-Royce Spectre" },
    { value: "Tata", label: "Tata" },
    { value: "Harrier", label: "Tata Harrier" },
    { value: "Nexon", label: "Tata Nexon" },
    { value: "Punch", label: "Tata Punch" },
    { value: "Tiago", label: "Tata Tiago" },
    { value: "Toyota", label: "Toyota" },
    { value: "FortunerLegender", label: "Toyota Fortuner Legender" },
    { value: "LandCruiser", label: "Toyota Land Cruiser 300" },
    { value: "Vellfire", label: "Toyota Vellfire" },
    { value: "Volvo", label: "Volvo" },
    { value: "S90", label: "Volvo S90" },
    { value: "XC60", label: "Volvo XC60" }

]

export default function Search() {


    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate()
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        navigate(`/${selectedOption.value}`)
    }

    return (
        <div>

            <div className='text-green-900 w-[200px] justify'>
                <Select
                    options={option} value={selectedOption} onChange={handleChange}
                />
            </div>
        </div>
    )
}
