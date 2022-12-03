import React from 'react'

function Content() {
  return (
    <div  data-aos="zoom-in" className='content'>
        <p className='text-[25px] font-black mt-5 text-center'>Curiculum Vitae</p>  
        <div className='flex justify-around  mt-10'>
            <div className=' flex bg-slate-800 text-white pr-10 gap-10'>
            <img className='w-80' src='https://img.wattpad.com/c3e8b11f52bac39f40fc9a18b15e2ac8438b5025/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b2d696230467a4a72306f7334673d3d2d3931353333323231322e313633323133613532383065303739613733303533343938343231362e6a7067' alt=''></img>
            <div >
            <p className='text-[25px] font-black mt-5 text-orange-500'>Data Diri</p>
            <hr/>
            <br/>
            <li>Fatiya Salsabila</li>
            <li>Kelas : Tkj 2</li>
            <li>Umur : 15</li>
            <li>Alamat : Jawa Tengah Kaliwungu</li>
            <li>Email : fatiya@gmail.com</li>
            <li>No Phone : +62 89536xxx</li>
            <li>Agama : Islam</li>
            
            </div>
            <div >
                <div className=''>
                <p className='text-[25px] font-black mt-5 text-orange-500'>Riwayat Pendidikan </p>
                <hr/>
                <br/>
                <li>MI Muhammadiyah Semarang</li>
                <li>SMP Muhammadiyah 9 Semarang</li>
                <li>SMK Binus Semarang</li>
                </div>
            </div>
            <div >
                <p className='text-[25px] font-black mt-5 text-orange-500'>Pengalaman</p>
                <hr/>
                <br/>
                <li>Bisa Membuat Website</li>
                <li>Pemahaman Dalam Berbahasa Indonesia</li>
                <li>Membuat Java</li>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Content