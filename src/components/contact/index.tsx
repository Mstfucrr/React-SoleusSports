import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { CallSharp, MapSharp } from 'react-ionicons';
import { SelectedPage } from '../navbar/types'

// soleus sport contact component

const index = (
    { setSelectedPageState = () => { } }: { setSelectedPageState?: React.Dispatch<React.SetStateAction<SelectedPage>> }
) => {
    const { t } = useTranslation();

    return (
        <motion.div className="relative w-full overflow-hidden mt-1 bg-soleus-dark-grey" id={SelectedPage.contactUs}
            onViewportEnter={
                () => setSelectedPageState(SelectedPage.contactUs)
            }
        >
            {/* soleus sport contact */}
            <div className="flex flex-col items-center justify-center w-5/6 mx-auto ">
                <h1 className="text-5xl font-bold text-gray-300 text-uppercase my-7">
                    {t("Contact.Title")}
                </h1>

                {/* harita */}
                <a href="https://www.google.com/maps/place/Soleus+Sports+Club/data=!3m1!4b1!4m2!3m1!1s0x14c73f44df79fe5d:0x6202bb959d28a4a6"
                    target="_blank" data-tracking-element-type="7" className='w-full h-[40rem]'>
                    <div className="QMbmRe w-full h-[40rem] bg-bottom bg-map"
                        title="İşletmenin bulunduğu konumu gösteren harita.">
                    </div>
                </a>



                <div className="flex md:flex-row flex-col md:items-start items-center justify-around w-full h-full my-10">

                    <div className="flex flex-col items-start justify-start h-full mt-10 w-72">
                        <h2 className="text-2xl font-bold text-gray-300 my-2">{t("Address.ContactTitle")}</h2>
                        <a target="_blang" href='tel:+90-534-087-54-52' className="
                                bg-soleus-green text-dark px-8 py-4 rounded-md font-bold
                                hover:bg-soleus-green-800 hover:text-black hover:scale-110 hover:rotate-3 
                                transition-all duration-300 ease-in-out mt-2 mb-8
                                animate-bounce
                                ">
                            <CallSharp cssClasses={"inline mr-3"} /> {t("Address.PhoneButton")}
                        </a>
                        <span className="text-gray-300 mb-2">
                            {t("Address.Phone1")}
                        </span>
                        <span className="text-gray-300">
                            {t("Address.Phone2")}
                        </span>

                    </div>

                    <div className="flex flex-col items-start justify-start h-full mt-10 w-72">
                        <h2 className="text-2xl font-bold text-gray-300">{t("Address.AddressTitle")}</h2>
                        <a target="_blang" href='https://www.google.com/maps/dir//Soleus+Sports+Club/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c73f44df79fe5d:0x6202bb959d28a4a6!2m2!1d29.058880799999997!2d37.7497907' className="
                                bg-soleus-green text-dark px-8 py-4 rounded-md font-bold
                                hover:bg-soleus-green-800 hover:text-black hover:scale-110 hover:rotate-3
                                transition-all duration-300 ease-in-out mt-2 mb-8
                                
                                ">
                            <MapSharp cssClasses={"inline mr-3"} /> {t("Address.AddressButton")}
                        </a>
                        <span className="text-gray-300 mb-2 max-w-[150px] leading-loose">
                            {t("Address.description")}
                        </span>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default index