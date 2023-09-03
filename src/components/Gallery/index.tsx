import g1 from '@/assets/images/Gallery/g1.png'
import g2 from '@/assets/images/Gallery/g2.png'
import g3 from '@/assets/images/Gallery/g3.png'
import g4 from '@/assets/images/Gallery/g4.jpg'
import g5 from '@/assets/images/Gallery/g5.jpg'
import g6 from '@/assets/images/Gallery/g6.jpg'
import g7 from '@/assets/images/Gallery/g7.jpg'
import g8 from '@/assets/images/Gallery/g8.jpg'
import g9 from '@/assets/images/Gallery/g9.jpg'
import g10 from '@/assets/images/Gallery/g10.jpg'
import { motion, useAnimation } from 'framer-motion'
import { SelectedPage } from '../navbar/types'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';

interface galleryItemModel {
    id: number,
    image: string,
    alt: string
}

const galleryItem = [
    {
        id: 1,
        image: g1,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 2,
        image: g2,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 3,
        image: g3,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 4,
        image: g4,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 5,
        image: g5,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 6,
        image: g6,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 7,
        image: g7,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 8,
        image: g8,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 9,
        image: g9,
        alt: 'Soleus Sports Gallery Image'
    },
    {
        id: 10,
        image: g10,
        alt: 'Soleus Sports Gallery Image'
    }
] as galleryItemModel[]


const Gallery = (
    { setSelectedPageState = () => { } }: { setSelectedPageState?: React.Dispatch<React.SetStateAction<SelectedPage>> }
) => {

    const [selectedModel, setSelectedModel] = useState<galleryItemModel>()



    const openModal = (galleryModel: galleryItemModel) => (e: React.MouseEvent<HTMLDivElement>) => {
        setSelectedModel(galleryModel);
    };

    const closeModal = () => {
        setSelectedModel(undefined)
    }


    const galleryItemBox = useRef(null);

    useOnClickOutside(galleryItemBox, () => {
        setSelectedModel(undefined)
    });


    return (
        <motion.section
            id={SelectedPage.gallery} className="mt-10"
            onViewportEnter={() => setSelectedPageState(SelectedPage.gallery)}
        >

            <div className='py-20'>
                <h1 className='text-4xl font-bold text-center text-soleus-green-900 mt-2 mb-10'>Galeri</h1>

                <div className='flex flex-row flex-wrap justify-center w-full h-full gap-10 md:gap-14 md:px-12 '>
                    {galleryItem.map((item) => (

                        <motion.div
                            key={item.id} className={`
                            lg:w-1/4 sm:w-5/12 w-full
                            before:content-[''] before:absolute before:inset-0 before:bg-soleus-green-900 before:z-[-1] before:rounded-xl
                            before:transform before:scale-105 before:opacity-50
                            before:transition before:duration-300 sm:before:hover:rotate-[-5deg]
                            sm:hover:!scale-105 transition duration-300 `}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .5 }}
                            variants={{
                                hidden: { opacity: 0, transform: 'scale(0)' },
                                visible: { opacity: 1, transform: 'scale(1)' }
                            }}
                            onClick={
                                openModal(item)}

                        >
                            <img src={item.image} alt={item.alt} className='object-cover w-full h-full
                             
                        '

                            />
                        </motion.div>
                    ))}

                </div>

            </div>
            {selectedModel && (
                <motion.div
                    className="fixed top-3 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.img
                        key={selectedModel.id}
                        src={selectedModel.image}
                        alt={selectedModel.alt}
                        className="max-w-full max-h-full"
                        ref={galleryItemBox}

                        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                        initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}

                    />
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
                    >
                        X
                    </button>
                </motion.div>
            )}
        </motion.section>

    )
}

export default Gallery


