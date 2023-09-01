import { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    page: string
    selectedPageState: SelectedPage
    setSelectedPageState: (page: SelectedPage) => void
}

const Link = (
    { page, selectedPageState, setSelectedPageState }: Props) => {

    const link = page.toLowerCase().replace(" ", "-").replace("ı", "i").replace("ç", "c").replace("ş", "s").replace("ğ", "g").replace("ü", "u").replace("ö", "o") as SelectedPage


    return (
        <AnchorLink
            className={`mr-5 transition-all duration-200 ease-in-out cursor-pointer
             ${selectedPageState === link
                ? "text-soleus-green"
                : "text-gray-500"}
             `}
            href={`#${link}`}
            onClick={(e) => {
                setSelectedPageState(link)
                console.log("link", link)
                console.log("selectedPageState", selectedPageState)
                e.preventDefault();

            }
            }
        >
            {page}
        </AnchorLink>

    )
}

export default Link