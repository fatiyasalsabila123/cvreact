import React from 'react'

function About() {
  return (
    <div data-aos="fade-right" >
      <p className='text-[25px] font-black text-center mt-5'>About Me</p>
    <div className='flex justify-center mt-10 mb-10 '>
      <div className='flex  bg-slate-800 text-white gap-72 '>
        <div className='block'>
        <p className='text-[25px] font-black mt-5  ml-10'>Saya <span className='text-orange-500'> Fatiya </span> Salsabila</p>
        <p className=' ml-10'>Saya Seorang Pelajar Kelas XI TKJ 2 Yang Bersekolah
          </p> 
          <p className=' ml-10'>Di SMK Bina Nusantara Semarang Umur Saya 16 Tahun Saya Di Lahirkan Di Kota Semarang</p>
          <div className='ml-10 flex gap-3 mt-4'>
            <div className='border p-2'>
          <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-gitlab"></i></a>
          </div>
          <div className='border p-2'>
          <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          </div>
          <div className='border p-2'>
          <a href="http://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <div className='border p-2'>
          <a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
          </div>
          <div className='border p-2'>
         <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
          
          </div>
          </div>
        <img className='w-80' src='https://masakini.co/wp-content/uploads/2021/02/KARTUN.jpg' alt=''></img>
        </div>
        </div>
        </div>
  )
}

export default About