import React from 'react';
import Image from 'next/image';

interface Props {
    id: string;
    name: string[];
    stack: string;
}

const Skills: React.FC<Props> = ({id, name, stack}) => (
    <div className="container mx-auto px-11 text-center mt-28">
        <p className='leading-tight max-w-5xl mx-auto my-10 text-4xl lg:text-4xl tracking-tight'>
            {stack}
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4xl:grid-cols-5gap-6lg:gap-20">
        {
            name.map((value, index) => {
                return (
                        <div key={index} className="my-5 mx-auto">
                            <div>Imagem da Tecnologia</div>
                            <div className="text-2xl xl:text-3xl">{value}</div>
                        </div>
                    
                )
            })
        }
        </div>
    </div>
    
)

export default Skills;