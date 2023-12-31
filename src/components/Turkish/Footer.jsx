import React from 'react'
import {BsTwitter,BsGlobe} from 'react-icons/bs'
import {FaTelegramPlane,FaDiscord,FaInstagram} from 'react-icons/fa'


function Footer() {
  return (
<section className=' mt-5 sm:mt-8'>
    <div className='container-wrapper'>
        <div className=' flex flex-col sm:flex-row justify-between '>
            <img src="images/logo-about.png" alt="" className='h-[55px] sm:h-auto w-[55px] sm:w-auto sm:mx-0 mx-auto mb-6 sm:mb-0' />

            <div className=' flex justify-evenly gap-5 text-center items-center'>
                <a href="http://twitter.com/kix_digital" target='_blank' className=' border border-[#fff] hover:text-[#82067e] rounded-full py-4 px-4'><BsTwitter className=' text-xl' /></a>
                <a href="http://t.me/kix_digital" target='_blank' className=' border border-[#fff] hover:text-[#82067e] rounded-full py-4 px-4'><FaTelegramPlane className=' text-xl' /></a>
                <a href="https://discord.gg/WxdNfuVAAp" target='_blank' className=' border border-[#fff] hover:text-[#82067e] rounded-full py-4 px-4'><FaDiscord className=' text-xl' /></a>
                <a href="https://instagram.com/kix_digital" target='_blank' className=' border border-[#fff] hover:text-[#82067e] rounded-full py-4 px-4'><FaInstagram className=' text-xl' /></a>
                <a href="http://kix.digital/" target='_blank' className=' border border-[#fff] hover:text-[#82067e] rounded-full py-4 px-4'><BsGlobe className=' text-xl' /></a>
            </div>

        </div>

    </div>
</section>
  )
}

export default Footer