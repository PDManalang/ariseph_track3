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
                    <div className="center">
                        <h2 class="slider__caption">earth day</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                </div>
            </div>

            <div class="slider__contents">
                <div className="image-2">
                    <div className="center">
                        <h2 class="slider__caption">mental health awareness</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                </div>
            </div>

            <div class="slider__contents">
                <div className="image-3">
                    <div className="center">
                        <h2 class="slider__caption">International Day of Older Persons</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                </div>
            </div>

            <div class="slider__contents">
                <div className="image-4">
                    <div className="center">
                        <h2 class="slider__caption">donation drive</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider