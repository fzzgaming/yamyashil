import { createContext, useState, useEffect } from 'react'
import translations from '../translations/translations'
export const LanguageContext = createContext()
export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        return localStorage.getItem('appLanguage') || 'uz'
    })
    const setLanguage = (lang) => {
        setLanguageState(lang)
        localStorage.setItem('appLanguage', lang)
    }
    const t = (key) => {
        return translations[language]?.[key] || key
    }
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}