import React from 'react'

function Footer() {
    return (
        <div className='w-full mt-20 text-white font-sans'>
            <div className='max-w-screen-xl mx-auto flex items-center gap-[5vw] '>
                <div className='text-[12vw] font-semibold '>
                    <h1>Refokus</h1>
                </div>
                <div className='links flex flex-col justify-between '>
                    <h3 className='text-2xl font-semibold'>Social</h3>
                    {["Instagram", "Twitter", "Facebook", "Linkdn"].map((elem, index) => <a key={index} href={elem}>{elem}</a>)}
                </div>
                <div className='links flex flex-col justify-between '>
                    <h3 className='text-2xl font-semibold'>About</h3>
                    {["Home", "work", "Carrier", "Contact"].map((elem, index) => <a key={index} href={elem}>{elem}</a>)}
                </div>
                <div className='links flex flex-col justify-between '>
                    <h3 className='text-2xl font-semibold'>Descripton</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, consectetur. Impedit, laudantium odit? </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
