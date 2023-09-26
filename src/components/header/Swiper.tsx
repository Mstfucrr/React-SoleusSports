import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import { Iitem } from './type';



const SwiperComponent = () => {

    const { t } = useTranslation();

    const items = t("SwipperItems", { returnObjects: true }) as Iitem[]

    return (
        <>
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
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full">

                {items.map((item: Iitem) => (
                    <SwiperSlide key={item.id} className="h-[550px]">
                        <img src={item.Image} alt="" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5"></div>
                        <div className="absolute top-1/3 left-0 w-full h-full flex flex-col justify-center items-center
                        bg-gray-900 bg-opacity-5 ">
                            {item.Title && (
                                <>
                                    <h1 className="sm:text-5xl text-3xl font-bold text-soleus-green-600 bg-black w-full text-center leading-relaxed bg-opacity-50">{item.Title}</h1>
                                    <h2 className="sm:text-2xl text-lg font-bold bg-black w-full text-center py-1.5 bg-opacity-50 text-soleus-green-700 ">
                                        {item.subtitle}</h2>
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
        </>

    )
}

export default SwiperComponent