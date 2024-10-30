import React from 'react'
import { Link } from 'react-router-dom';


const CTA = () => {
  return ( 
    <section className='cta'>
        <p className='cta-text'>
            Have a project in hand? <br className='sm:block hidden' />
            Let's build something beautiful together!
        </p>
        <Link to='/contacts' className='btn' >
            contact
        </Link>
    </section>
  )
}

export default CTA
