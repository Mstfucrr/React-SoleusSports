import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import kapak from '@/assets/images/kapak.png'
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = () => {

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
        }
    ]


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
                modules={[Navigation, Pagination]}
                className="w-full">

                {SwiperItems.map((item) => (
                    <SwiperSlide key={item.id} className="h-[550px]">
                        <img src={item.img} alt="" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5"></div>
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
        </>

    )
}

export default SwiperComponent