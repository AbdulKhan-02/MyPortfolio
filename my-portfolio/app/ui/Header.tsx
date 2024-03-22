import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section>
        <div className = "grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className ="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> 
                    Hello, I'm Abdul
                </h1>
                <p className ="text-xl lg:text-2xl text-white mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className = "col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative" >
                    <Image
                        src="/hero-person.png"
                        alt ="Image of a Person"
                        width ={300}
                        height ={300}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        >
                    </Image>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Header
