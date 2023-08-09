import React from 'react'
import './Testimonials.css'
import img from '../../assets/chadwick.jpg'
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <div className='container testimonials_container'>
        <article className='testimonial'>
                <div className='client_avatar'>
                    <img src={img} alt=''></img>
                </div>
                <h5 className='client_name'>Ponduri Prakash</h5>
                <small className='client_review'>
                      Lorem bvyrtvv ubvuhrgf iy jhf weyigf gvhwe gtvhgffqk
                      hjbvv yg g wrfitbg  ye  ryv gv  eg ge vgyeg hgevghfg 
                      ffhgfyg khgfhrgfvtv
                </small>
            </article>
            <article className='testimonial'>
                <div className='client_avatar'>
                    <img src={img} alt=''></img>
                </div>
                <h5 className='client_name'>Ponduri Prakash</h5>
                <small className='client_review'>
                      Lorem bvyrtvv ubvuhrgf iy jhf weyigf gvhwe gtvhgffqk
                      hjbvv yg g wrfitbg  ye  ryv gv  eg ge vgyeg hgevghfg 
                      ffhgfyg khgfhrgfvtv
                </small>
            </article>
            <article className='testimonial'>
                <div className='client_avatar'>
                    <img src={img} alt=''></img>
                </div>
                <h5 className='client_name'>Ponduri Prakash</h5>
                <small className='client_review'>
                      Lorem bvyrtvv ubvuhrgf iy jhf weyigf gvhwe gtvhgffqk
                      hjbvv yg g wrfitbg  ye  ryv gv  eg ge vgyeg hgevghfg 
                      ffhgfyg khgfhrgfvtv
                </small>
            </article>
            <article className='testimonial'>
                <div className='client_avatar'>
                    <img src={img} alt=''></img>
                </div>
                <h5 className='client_name'>Ponduri Prakash</h5>
                <small className='client_review'>
                      Lorem bvyrtvv ubvuhrgf iy jhf weyigf gvhwe gtvhgffqk
                      hjbvv yg g wrfitbg  ye  ryv gv  eg ge vgyeg hgevghfg 
                      ffhgfyg khgfhrgfvtv
                </small>
            </article>
        </div>
    </section>
  )
}

export default Testimonials
