import hero from '@/assets/images/hero-pattern.jpg'
import { SelectedPage } from '../navbar/types';
import { CallSharp, ChevronForwardSharp } from 'react-ionicons'
import { motion } from 'framer-motion';
import SwiperComponent from './Swiper';
import { useTranslation } from 'react-i18next';

// soleus sport header component

const index = (

  { setSelectedPageState = () => { } }: { setSelectedPageState?: (selectedPageState: SelectedPage) => void }
) => {

  const { t } = useTranslation();


  return (

    <motion.div className="relative w-full pb-10 bg-soleus-dark-grey overflow-hidden mt-1" id={SelectedPage.header}
      onViewportEnter={() => setSelectedPageState(SelectedPage.header)}

    >
      <div className="w-5/6 mx-auto">
        {/* soleus sport title */}
        <motion.div
          variants={{

            visible: {
              opacity: 1,
              transform: [
                "translateX(0%) rotateY(0deg)",
                "translateX(70%) rotateY(90deg)",
                "translateX(-10%) rotateY(180deg)"
              ],
              transition: { duration: 2 },
            },
            hidden: {
              opacity: .1,
            },

          }}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ChevronForwardSharp
            color={'#0b9e00'}
            height="900px"
            width="90%"
            cssClasses="absolute md:-top-52 top-20 opacity-10 w-full"
          />
        </motion.div>
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              transform: [
                "translateX(0%) rotateY(0deg)",
                "translateX(70%) rotateY(90deg)",
                "translateX(2%) rotateY(180deg)"
              ],
              transition: { duration: 2, delay: .2 },
            },
            hidden: {
              opacity: .1,
            },

          }}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: .5 }}

        >
          <ChevronForwardSharp
            color={'#787878'}
            height="900px"
            width="90%"
            cssClasses="absolute md:-top-52 top-20 opacity-10"
          />
        </motion.div>
        <div className='pt-24 pb-16 flex w-full justify-between items-center lg:flex-row flex-col'>

          <motion.img
            src={hero}
            className="xl:w-3/12 sm:w-72 mr-6 w-full object-scale-down rounded-xl z-[0] relative left-0"
            style={{ zoom: 1.3 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7, delay: .3 }}
          />

          <motion.div className='flex flex-col md:items-end items-start justify-center py-28 pr-24 z-10'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7, delay: 1.2 }}

          >
            <h1 className="text-5xl font-bold text-soleus-green relative
            before:absolute before:content-['Soleus_Sports_Club'] before:text-soleus-green
            before:-top-14 before:md:-left-56 before:-left-1 md:whitespace-nowrap before:z-[-1] before:opacity-10 before:text-7xl 
            z-[2]
          ">
              {t("Title")}

            </h1>
            <h4 className="text-lg font-bold text-soleus-dark-green leading-10">{t("description")}</h4>
            <h3 className="text-xl font-bold text-soleus-dark-green mb-5">
              {t("Address.description")}
            </h3>
            <a target="_blang" href='tel:+90-534-087-54-52' className="
          bg-soleus-green text-dark px-5 py-2 rounded-md font-bold
          hover:bg-soleus-green-800 hover:text-black hover:scale-110 hover:rotate-3 
          transition-all duration-300 ease-in-out mt-2 mb-8
        ">
              <CallSharp cssClasses={"inline mr-3"} /> {t("Address.PhoneButton")} 
            </a>
          </motion.div>
          {/* soleus sport header swiper */}
        </div>

        <SwiperComponent />
      </div>


    </motion.div>
  )
}

export default index