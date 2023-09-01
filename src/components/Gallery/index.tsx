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
import { motion } from 'framer-motion'
import { SelectedPage } from '../navbar/types'


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
]


const Gallery = (
    {setSelectedPageState = () => { }}: { setSelectedPageState?: React.Dispatch<React.SetStateAction<SelectedPage>> }
) => {
    return (
        <motion.section
            id={SelectedPage.gallery} className="mt-10"
            onViewportEnter={() => setSelectedPageState(SelectedPage.gallery)} 
        >

            <div className='flex flex-col items-center justify-center w-full h-full py-20'

            >
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <h1 className='text-4xl font-bold text-center text-soleus-green-900 my-5'>Galeri</h1>
                    <p className='text-lg text-center text-soleus-green-900'>

                    </p>
                </div>
                <div className='flex flex-wrap items-center justify-center w-full h-full gap-5'>
                    {galleryItem.map((item) => (

                        <motion.div key={item.id} className='flex flex-col items-center justify-center w-full h-auto sm:w-[400px] sm:h-[400px]'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: .5 }}
                            variants={{
                                hidden: { opacity: 0, transform: 'scale(0)' },
                                visible: { opacity: 1, transform: 'scale(1)' }
                            }}
                        >
                            <img src={item.image} alt={item.alt} className='object-cover w-full h-full
                            
                        '

                            />
                        </motion.div>
                    ))}

                </div>

            </div>
        </motion.section>

    )
}

export default Gallery


