import React, {Component} from 'react' // useState
import Input from '@mui/material/Input'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () =>  {
  
    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filterData = (data) => {
        return data.filter((d) => d.toLo);
    }

    // const data = {
    //     nodes: nodes.filter((item) =>
    //         item.name.toLowerCase().includes(search.toLowerCase())
    //     ),
    // };

    return (
        <div>
            <Input
                className="search-box"
                placeholder="Search Contact"
                onChange={handleSearch}
            />
            {/* <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton> */}
            {/* <Paper>
                <List>
                {
                    this.countries.map((text) => (
                    <ListItem key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))
                }
                </List>
            </Paper> */}
        </div>
        
    );
}

export default SearchBar;