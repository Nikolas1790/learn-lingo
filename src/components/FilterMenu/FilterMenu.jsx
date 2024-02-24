import { useEffect, useState } from "react";
import { Dropdown, DropdownButton, DropdownItem, DropdownList, DropdownSvg, ResetButton, TitleMenu, WraperMenu } from "./FilterMenu.styled";
import { getDatabase, ref, get } from 'firebase/database';
import { toast } from "react-toastify";
import sprite from '../../img/svg-file.svg';

export default function FilterMenu({setTeachers, onResultsFoundChange, onReset}) {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedLevels, setSelectedLevels] = useState("");
    const [selectedPrices, setSelectedPrices] = useState("");
    const [languageOptions, setLanguageOptions] = useState([]);
    const [levelOptions, setLevelOptions] = useState([]);
    const [levelPrices, setLevelPrices] = useState([]);
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
                    const uniquePrice = Array.from(new Set(teachersArray.flatMap(teacher => teacher.price_per_hour)));

                    setLanguageOptions(uniqueLanguages);
                    setLevelOptions(uniqueLevels);
                    setLevelPrices(uniquePrice)


                    const filteredTeachers = teachersArray.filter(teacher => {
                        const filterByLanguage = selectedLanguage ? teacher.languages.includes(selectedLanguage) : true;
                        const filterByLevel = selectedLevels ? teacher.levels.includes(selectedLevels) : true;
                        const filterByPrice = selectedPrices ? teacher.price_per_hour === selectedPrices : true;
                        
                        return filterByLanguage && filterByLevel && filterByPrice;
                        
                    });
                    
                    if(teachersArray.length > filteredTeachers.length){
                        onResultsFoundChange(false);
                        setTeachers(filteredTeachers);
                    }
  console.log("resultsFound")

                } else {
                    // console.log("resultsFound")
                    onResultsFoundChange(false);
                    toast.error("No data available")
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };  
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [db, selectedLanguage, selectedLevels, selectedPrices,  setTeachers]);

    const handleMenuChange = (value, setValue) => {
        setValue(value);
    };

    const resetFilters = () => {
        setSelectedLanguage("");
        setSelectedLevels("");
        setSelectedPrices("");
        onReset();
    };

    return (   
        <WraperMenu>
            <div>
                <TitleMenu>Languages</TitleMenu>
                <Dropdown>
                    <DropdownSvg width={20} height={20} >
                        <use href={`${sprite}#icon-chevron-down`}  />
                    </DropdownSvg>
                    <DropdownButton width="221px" >{selectedLanguage || "Select Language"}</DropdownButton>
                    <DropdownList>
                        {languageOptions.map((language, index) => (
                            <DropdownItem key={index} value={language} onClick={() => handleMenuChange(language, setSelectedLanguage)}>
                                {language}
                            </DropdownItem>
                        ))}
                    </DropdownList>                   
                </Dropdown>
            </div>

            <div>
                <TitleMenu>Level of knowledge</TitleMenu>
                <Dropdown>
                    <DropdownSvg width={20} height={20} >
                        <use href={`${sprite}#icon-chevron-down`}  />
                    </DropdownSvg>
                    <DropdownButton width="198px" >{selectedLevels || "Select Level"}</DropdownButton>                    
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
                    <DropdownSvg width={20} height={20} >
                        <use href={`${sprite}#icon-chevron-down`}  />
                    </DropdownSvg>
                    <DropdownButton width="124px" >{selectedPrices + " $" }</DropdownButton>                    
                    <DropdownList>
                        {levelPrices.sort((a, b) => a - b).map((price, index) => (
                            <DropdownItem key={index} value={price} onClick={() => handleMenuChange(price, setSelectedPrices)}>
                                {price}
                            </DropdownItem>
                        ))}
                    </DropdownList>                    
                </Dropdown>
            </div>

            { selectedLanguage || selectedLevels || selectedPrices ? <ResetButton onClick={resetFilters}>Reset</ResetButton> : null}

        </WraperMenu>     
    );
}
  
