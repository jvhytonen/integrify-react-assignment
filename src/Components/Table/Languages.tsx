import React from 'react'

export interface LanguagesType {
    [index: string]: string
}
// Lists laguages as restcountries language-object has different key-names for every language.
const Languages = (props:LanguagesType) => {
    const languages = Object.values(props)
    const languageItems = languages.map((item, index) => {
        return(
            <li key={index}>{item}</li>
        )
    }) 
    return (
          <ul>
            {languageItems}
            </ul> 
    )
}

export default Languages