import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to more about me
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my Portfolio Website
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://3-d-portfolio-react-two.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    About me
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="myImg.jpeg" />
        </div>
    </div>
  )
}