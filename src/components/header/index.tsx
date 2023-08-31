

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import kapak from '@/assets/images/kapak.png'
import kapak2 from '@/assets/images/kapak2.jpg'
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import { SelectedPage } from '../navbar/types';
import { ChevronForwardSharp } from 'react-ionicons'

// soleus sport header component

const index = () => {

  const SwiperItems = [
    {
      id: 1,
      img: kapak,
      title: "Soleus Sports",
      subtitle: "Senin spor ihtiyaçlarını karşılayan tek adres"
    },
    {
      id: 2,
      img: img1,
      title: "Soleus Sports",
      subtitle: "Asla vazgeçme, hayallerine ulaşmak için çalışmaya devam et"
    },
    {
      id: 3,
      img: img2,
      title: "Soleus Sports",
      subtitle: "İçindeki gücü keşfet"
    },
    {
      id: 4,
      img: kapak2,
    }

  ]

  return (

    <div className="relative w-full overflow-hidden mt-1" id={SelectedPage.header}>
      {/* soleus sport title */}
      <div className='py-28 '>
        <ChevronForwardSharp
          color={'#0b9e00'}  
          height="900px"
          width="900px"
          cssClasses="absolute -top-32 -left-[17%] opacity-10"
        />
        <ChevronForwardSharp
          color={'#787878'}  
          height="900px"
          width="900px"
          cssClasses="absolute -top-32 -left-[6%] opacity-10"
        />


        <div className='flex flex-col md:items-end items-start justify-center py-28 pr-24  
        '>
          <h1 className="text-5xl font-bold text-soleus-green relative
            before:absolute before:content-['Soleus_Sports_Club'] before:text-soleus-green
            before:-top-14 before:md:-left-56 before:-left-1 md:whitespace-nowrap before:z-[-1] before:opacity-10 before:text-7xl 
            z-[2]
          ">Soleus Sports Club</h1>
          <h4 className="text-lg font-bold text-soleus-dark-green leading-10">Spor Salonu</h4>
          <h3 className="text-xl font-bold text-soleus-dark-green mb-5">Servergazi Mahallesi, Mustafa Kemal Aykurt Caddesi No:19, Denizli</h3>
          <a target="_blang" href='tel:+90-534-087-54-52' className="
          bg-soleus-green text-dark px-5 py-2 rounded-md font-bold
          hover:bg-soleus-green-800 hover:text-black hover:scale-110 hover:rotate-3 
          transition-all duration-300 ease-in-out mt-2 mb-8
        ">
            <i className="fas fa-phone-alt"></i> Hemen Ara
          </a>
        </div>
        {/* soleus sport header swiper */}
      </div>

      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        speed={700}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation, Pagination]}
        className="h-[500px]
          bg-gray-100 w-full
          ">

        {SwiperItems.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
            <div className="absolute top-1/3 left-0 w-full h-full flex flex-col justify-center items-center
                bg-gray-900 bg-opacity-5
              ">
              {item.title && (
                <>
                  <h1 className="text-5xl font-bold text-soleus-green-600 bg-black w-full text-center leading-relaxed bg-opacity-50">{item.title}</h1>
                  <h2 className="text-2xl font-bold bg-black w-full text-center py-1.5 bg-opacity-50
                  text-soleus-green-700 
                  ">{item.subtitle}</h2>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}


        <div className="swiper-button-prev  
          bg-gray-900 text-soleus-green-800 font-bold 
          w-12 h-12 hover:scale-110 rounded-s-full
          after:content-['prev'] after:text-3xl 
          hover:bg-gray-800 hover:text-soleus-green-700 hover:after:text-3xl 
          hover:after:transition-all hover:after:duration-300
          transition-all duration-300
          "></div>
        <div className="swiper-button-next
          bg-gray-900 text-soleus-green-800 font-bold
          w-12 h-12 hover:scale-110 rounded-e-full
          after:content-['next'] after:text-3xl
          hover:bg-gray-800 hover:text-soleus-green-700 hover:after:text-3xl
          hover:after:transition-all hover:after:duration-300
          transition-all duration-300
          
          "></div>


      </Swiper>
    </div>
  )
}

export default index