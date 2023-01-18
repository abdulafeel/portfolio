import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/hi.png'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
  <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials__container"
      modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat facilis consequuntur commodi cumque beatae, tempora laborum illo non animi obcaecati hic, eum iste! Illum deserunt cum dolor nemo inventore?
          </small>
      </SwiperSlide> 
      
    </Swiper>
  </section>
  )
}

export default Testimonials
