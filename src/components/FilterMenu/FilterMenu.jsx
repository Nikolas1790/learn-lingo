import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, DropdownItem, DropdownList, TitleMenu, WraperMenu } from "./FilterMenu.styled";
// import { useState, useEffect } from "react";
import { getDatabase, ref, get } from 'firebase/database';

// const languages = ["French", "English", "Mandarin Chinese"];
// const levels = ["A1 Beginner", "A2 Elementary", "B1 Intermediate"];
const prices = [10, 28, 30];

export default function FilterMenu({setTeachers}) {
    const [selectedLanguage, setSelectedLanguage] = useState("French ");
    const [selectedLevels, setSelectedLevels] = useState("A1 Beginner");
    const [selectedPrices, setSelectedPrices] = useState(prices[0]);

    const [languageOptions, setLanguageOptions] = useState([]);
    const [levelOptions, setLevelOptions] = useState([]);

    
    const db = getDatabase();

    useEffect(() => {
        const fetchData = async () => {
            try {         
                const teachersRef = ref(db, 'teachers');
                const snapshot = await get(teachersRef);
                
                if (snapshot.exists()) {
                    const teachersData = snapshot.val();
                    const teachersArray = Object.values(teachersData);

                    const uniqueLanguages = Array.from(new Set(teachersArray.flatMap(teacher => teacher.languages)));
                    const uniqueLevels = Array.from(new Set(teachersArray.flatMap(teacher => teacher.levels)));
                    setLanguageOptions(uniqueLanguages);
                    setLevelOptions(uniqueLevels);
                    // Применяем фильтры
                    const filteredTeachers = teachersArray.filter(teacher => {
                        // console.log(teacher.price_per_hour)
                        // console.log(selectedPrices)
                        return (
                            teacher.languages.includes(selectedLanguage) &&
                            teacher.levels.includes(selectedLevels)
                            // teacher.languages.includes(selectedLanguage) &&
                            // teacher.levels.includes(selectedLevels) &&
                            // teacher.price_per_hour === selectedPrices
                        );
                    });

                    setTeachers(filteredTeachers);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };  
        fetchData();
    }, [db, selectedLanguage, selectedLevels, selectedPrices, setTeachers]);

    const handleMenuChange = (value, setValue) => {
        setValue(value);
    };

    return (   
        <WraperMenu>
            <div>
                <TitleMenu>Languages</TitleMenu>
                <Dropdown>
                    <DropdownButton width="221px" >{selectedLanguage} </DropdownButton>
                    <DropdownList>
                        {languageOptions.map((language, index) => (
                            <DropdownItem key={index} value={language} placeholder="hhhhhhhhhhhhhhhhhhhhhh" onClick={() => handleMenuChange(language, setSelectedLanguage)}>
                                {language}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                   
                </Dropdown>
            </div>

            <div>
                <TitleMenu>Level of knowledge</TitleMenu>
                <Dropdown>
                    <DropdownButton width="198px" >{selectedLevels}</DropdownButton>
                    
                    <DropdownList>
                        {levelOptions.map((level, index) => (
                            <DropdownItem key={index} value={level} onClick={() => handleMenuChange(level, setSelectedLevels)}>
                                {level}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                    
                </Dropdown>
            </div>

            <div>
                <TitleMenu>Price</TitleMenu>
                <Dropdown>
                    <DropdownButton width="124px" >{selectedPrices} $</DropdownButton>
                    
                    <DropdownList>
                        {prices.map((price, index) => (
                            <DropdownItem key={index} value={price} onClick={() => handleMenuChange(price, setSelectedPrices)}>
                                {price}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                    
                </Dropdown>
            </div>
        </WraperMenu>     
    );
}
  