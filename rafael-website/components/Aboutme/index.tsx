import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className="container mx-auto px-11">
                <p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'>
                    <strong>A full stack programmer, who likes to create solutions.</strong>
                     All applications was make with front end framework and back end lenguages 
                </p>
            </div>

            <div className="container mx-auto px-11 text-center mt-28">
                <h2>My skills</h2>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4xl:grid-cols-5gap-6lg:gap-20">
                    <div>React</div>
                </div>
            </div>
        </section>
    )
}


export default AboutMe;