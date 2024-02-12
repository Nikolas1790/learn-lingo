import { useState } from "react";
import { Dropdown, DropdownButton, DropdownItem, DropdownList, TitleMenu, WraperMenu } from "./FilterMenu.styled";

const languages = ["French", "English", "Mandarin Chinese"];
const levels = ["A1 Beginner", "A2 Elementary", "B1 Intermediate"];
const prices = ["10 $", "20 $", "30 $"];

export default function FilterMenu() {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [selectedLevels, setSelectedLevels] = useState(levels[0]);
    const [selectedPrices, setSelectedPrices] = useState(prices[0]);

    const handleMenuChange = (value, setValue) => {
        setValue(value);
    };

    return (   
        <WraperMenu>
            <div>
                <TitleMenu>Languages</TitleMenu>
                <Dropdown>
                    <DropdownButton width="221px" >{selectedLanguage}</DropdownButton>
                    <DropdownList>
                        {languages.map((language, index) => (
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
                    <DropdownButton width="198px" >{selectedLevels}</DropdownButton>
                    
                    <DropdownList>
                        {levels.map((level, index) => (
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
                    <DropdownButton width="124px" >{selectedPrices}</DropdownButton>
                    
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
  