import React from 'react'
import { Link } from 'react-router-dom'

//Component
import './slider.css';

function Slider() {
    return (
        <div class="slider">
            <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
            <input type="radio" name="slider" title="slide2" class="slider__nav"/>
            <input type="radio" name="slider" title="slide3" class="slider__nav"/>
            <input type="radio" name="slider" title="slide4" class="slider__nav"/>
            <div class="slider__inner">

            <div class="slider__contents">
                <div className="image-1">
                    <h2 class="slider__caption">codepen</h2>
                    <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
            </div>

            <div class="slider__contents">
                <div className="image-2">
                    <h2 class="slider__caption">newspaper-o</h2>
                    <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
            </div>

            <div class="slider__contents">
                <h2 class="slider__caption">television</h2>
                <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
            </div>

            <div class="slider__contents">
                <h2 class="slider__caption">diamond</h2>
                <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
            </div>
            </div>
        </div>
    )
}

export default Slider