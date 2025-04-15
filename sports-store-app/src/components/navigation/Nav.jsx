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

const pages = [
    { title: "Jerseys", url: "/jerseys" },
    { title: "Apparel", url: "/apparel" },
    { title: "Memorabilia", url: "/memorabilia" },
    { title: "Trading Cards", url: "/trading-cards" }
]
export const NavBar = () => {

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
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography component={"a"} sx={{ textAlign: 'center', textDecoration: "none", color: "black" }} href={page.url}>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link to="/">
                        <Box
                            component="img"
                            src={sportsSiteLogo}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                width: 150,
                                height: 150,
                                mr: 1,
                            }}
                        />
                    </Link>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center" }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                href={page.url}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#E81828', display: 'block', "&:hover": { backgroundColor: "#E81828", color: "white" } }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            size="large"
                            aria-label="user's shopping cart"
                            aria-haspopup="true"
                            href="/cart"
                            sx={{ marginRight: "10px", backgroundColor: "#E81828", color: "white", "&:hover": { color: "#E81828", backgroundColor: "white" } }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            href="/profile"
                            sx={{ backgroundColor: "#E81828", color: "white", "&:hover": { color: "#E81828", backgroundColor: "white" } }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}