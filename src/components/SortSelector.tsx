import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatforms from "../hooks/usePlatforms";


interface Props {
    onSelectSortType: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortType, sortOrder} : Props) => {

    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release Date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average Rating"}
    ]
    const {data, error} = usePlatforms();


    const currentSortOrder = sortOrders.find(order=>order.value == sortOrder);
    if(error) {
        return null;
    }

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronBarDown />}> Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
                <MenuList>
                    {sortOrders.map(sort => <MenuItem key={sort.value} onClick={()=>onSelectSortType(sort.value)}>{sort.label}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    )
}

export default SortSelector;