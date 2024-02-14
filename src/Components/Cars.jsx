import React from 'react'
import Card from './Cards'
import h1 from '../assets/1.jpg'
import '../style.css'

export default function Cars({image,car,price,spec}) {
  return (
    <div>
        <div class="card-list" >
            <a href="#" class="card-item">
                <img src={image} alt="" />
                <h3>{car}</h3>
                <span class="developer">{price}</span>
                <span class="editor">{spec}</span>
                <span class="designer">AddTo Cart</span>
                
            </a>
            <a href="#" class="card-item">
                
                <img src={h1} alt="" />
                <span class="designer">Designer</span>
                <h3>A "designer" is a design expert.</h3>
                <div class="arrow">
                    <i class="fas fa-arrow-right card-icon"></i>
                </div>
            </a>
            <a href="#" class="card-item">
                <img src={h1} alt="" />
                <span class="editor">Editor</span>
                <h3>An "editor" ensures content quality and accuracy.</h3>
                <div class="arrow">
                    <i class="fas fa-arrow-right card-icon"></i>
                </div>
            </a>
          
        </div>
    </div>
  )
}
