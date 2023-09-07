
import facebookLogo from "@/assets/images/footer/facebook.png";
import instagramLogo from "@/assets/images/footer/instagram.png";
import twitterLogo from "@/assets/images/footer/twitter.png";
import soleusLogo from "@/assets/images/soleusTitleLogo.png"


const index = () => {
    return (
        <footer className="text-gray-600 body-font w-full">
            <div className="container w-5/6 py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
                <div>
                    <a href="#home" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={soleusLogo} alt="Soleus Logo" className="w-32" />
                    </a>
                </div>

                <div>

                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2021 Soleus Sports —
                        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@soleussports</a>
                    </p>
                </div>
                <div>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://www.facebook.com/soleussports" className="">
                            <img src={facebookLogo} alt="Facebook Logo" className="w-9 
                        hover:saturate-150 hover:scale-110 transition duration-500 ease-in-out
                    " />
                        </a>
                        <a href="https://www.instagram.com/soleussports/" className="ml-3 ">
                            <img src={instagramLogo} alt="Instagram Logo" className="w-9 ml-3
                        hover:saturate-150 hover:scale-110 transition duration-500 ease-in-out
                    " />
                        </a>
                        <a href="https://twitter.com/soleussports" className="ml-3 ">
                            <img src={twitterLogo} alt="Twitter Logo" className="w-9 ml-3
                        hover:saturate-150 hover:scale-110 transition duration-500 ease-in-out
                    " />
                        </a>

                    </span>
                </div>

            </div>
        </footer>


    )
}

export default index