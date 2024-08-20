

import logoCode from '@assets/logo_code.png'

import logoInsta from '@assets/instagram.png'
import logoLinkedin from '@assets/linkedin.png'

export function Footer() {

  const URL_LINKEDIN = 'https://www.linkedin.com/company/code-experience/'
  const URL_INSTAGRAM = 'https://www.instagram.com/codexperiencezonadamata/'

  return (
    <div className='w-full flex flex-col justify-center items-center pb-12 md:py-24 bg-black text-white gap-4 md:flex-row'>

      <div className='flex flex-col justify-center items-center pb-12 gap-2'>
        <img className='md:w-[400px]' src={logoCode} alt='Logo codeXperience' width={200} />
        <div className='flex gap-3 justify-center items-center -mt-8 md:-mt-16 md:gap-5'>
          <a href={URL_INSTAGRAM} rel="noopener noreferrer">
            <img src={logoInsta} alt="instagram codeXperience" width={24} height={24} className='md:w-12' />
          </a>
          <a href={URL_LINKEDIN} target='_blank' rel="noopener noreferrer">
            <img src={logoLinkedin} alt="logoLinkedin codeXperience" width={24} height={20} className='md:w-12' />
          </a>
        </div>
        <p className='text-sm md:pt-2'>CodeXperience ®</p>
      </div>
      <iframe
        src="https://www.instagram.com/codexperiencezonadamata/embed"
        width="300"
        height="360"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        className='rounded-lg md:w-96 md:h-96'
        title="Instagram feed"></iframe>

    </div>
  )
}