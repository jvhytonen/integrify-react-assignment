import React from 'react'

export interface LanguagesType {
    [index: string]: string
}

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