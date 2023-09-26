import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import React from 'react'

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const { i18n } = useTranslation();
    useEffect(() => {
        const language = localStorage.getItem('language');
        console.log("language: ", language)
        if (language) {
            i18n.changeLanguage(language);
        }
        else {
            localStorage.setItem('language' , "tr")
            i18n.changeLanguage('tr');
        }
    }, []);
    return <>{children}</>;
}

export default LanguageProvider