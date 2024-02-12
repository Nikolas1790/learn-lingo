import { Dropdown, DropdownButton, DropdownItem, DropdownList, TitleMenu, WraperMenu } from "./FilterMenu.styled";

const languages = ["French", "English", "Mandarin Chinese"];
const levels = ["A1 Beginner", "A2 Elementary", "B1 Intermediate"];
const prices = ["10 $", "20 $", "30 $", "40 $"];

export default function FilterMenu() {
    return (   
        <WraperMenu>
            <div>
                <TitleMenu>Languages</TitleMenu>
                <Dropdown>
                    <DropdownButton>French</DropdownButton>
                    <DropdownList>
                        {languages.map((language, index) => (
                            <DropdownItem key={index} value={language}>
                                {language}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                </Dropdown>
            </div>

            <div>
                <TitleMenu>Level of knowledge</TitleMenu>
                <Dropdown>
                    <DropdownButton>A1 Beginner</DropdownButton>
                    <DropdownList>
                        {languages.map((language, index) => (
                            <DropdownItem key={index} value={language}>
                                {language}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                </Dropdown>
            </div>

            <div>
                <TitleMenu>Price</TitleMenu>
                <Dropdown>
                    <DropdownButton>30 $</DropdownButton>
                    <DropdownList>
                        {languages.map((language, index) => (
                            <DropdownItem key={index} value={language}>
                                {language}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                </Dropdown>
            </div>
        </WraperMenu>     
    );
}
  