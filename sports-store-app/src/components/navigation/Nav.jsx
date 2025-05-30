import * as React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import sportsSiteLogo from "../../assets/images/sportsSiteLogo.png"

const menuPages = [
    { title: "Jerseys", url: "/jerseys" },
    { title: "Apparel", url: "/apparel" },
    { title: "Memorabilia", url: "/memorabilia" },
    { title: "Trading Cards", url: "/trading-cards" },
    { title: "Shopping Cart", url: "/cart" }
]

const navPages = [
    { title: "Jerseys", url: "/jerseys" },
    { title: "Apparel", url: "/apparel" },
    { title: "Memorabilia", url: "/memorabilia" },
    { title: "Trading Cards", url: "/trading-cards" }
]
export const NavBar = ({ isLoggedIn }) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth="xl" sx={{ backgroundColor: "#FFFDD0" }}>
                <Toolbar disableGutters>
                    {/*Site Logo Link on Larger Screen*/}
                    <Link to={"/"}>
                        <Box
                            component="img"
                            src={sportsSiteLogo}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                width: 125,
                                height: 125,
                                mr: 1,
                            }}
                        />
                    </Link>
                    {/*Menu Content for smaller screens*/}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ marginRight: "10px", backgroundColor: "#E81828", color: "white", "&:hover": { color: "#E81828", backgroundColor: "white" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {menuPages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography component={"a"} sx={{ textAlign: 'center', textDecoration: "none", color: "black" }} href={page.url}>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/*Site Logo Link on Smaller Screen*/}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Link to="/">
                            <Box
                                component="img"
                                src={sportsSiteLogo}
                                sx={{
                                    width: 150,
                                    height: 150,
                                }}
                            />
                        </Link>
                    </Box>
                    {/*Page Nav Links for Larger Screens*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3, justifyContent: "center", alignItems: "center" }}>
                        {navPages.map((page, index) => (
                            <Button
                                key={index}
                                href={page.url}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#E81828', display: 'block', padding: "10px", "&:hover": { backgroundColor: "#E81828", color: "white" } }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    {/*Shopping Cart and Account Icons for Larger Screens*/}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} >
                        <IconButton
                            size="large"
                            aria-label="user's shopping cart"
                            aria-haspopup="true"
                            href="/cart"
                            sx={{ marginRight: "10px", backgroundColor: "#E81828", color: "white", "&:hover": { color: "#E81828", backgroundColor: "white" } }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                        {isLoggedIn ?
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                href="/profile"
                                sx={{ backgroundColor: "#E81828", color: "white", "&:hover": { color: "#E81828", backgroundColor: "white" } }}
                            >
                                <AccountCircle />
                            </IconButton> :
                            <Button
                                href='/auth/login'
                                sx={{ borderRadius: "10px", backgroundColor: "#E81828", color: "white", "&:hover": { color: "#E81828", backgroundColor: "white" } }}
                            >
                                Login
                            </Button>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}