import { Link } from 'react-router-dom'

import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'

function Navbar() {
    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Box sx={{
                        display: 'flex',
                        alinItems: 'center',
                        gap: 1,
                        flexGrow: 1
                    }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            color: '#F52D70',
                        }}>
                            Unicorn <br/> Assembly 
                        </Typography>

                    </Box>
                    {/* Navegacion */}
                    <Box sx={{
                        display: 'flex',
                        alinItems: 'center',
                        gap: 1,
                    }}>
                        <Button component={Link} to="/" color="inherit" 
                        sx={{
                            Color: 'black',
                            backgroundColor: '#F52D70',
                        }}>Home</Button>
                        <Button component={Link} to="/sobre-mi" color="inherit" sx={{ Color: '#000000' }}>Sobre Mi</Button>
                        <Button component={Link} to="/proyectos" color="inherit" sx={{ Color: '#000000' }}>Proyectos</Button>
                        <Button component={Link} to="/contacto" color="inherit" sx={{ Color: '#000000' }}>Contacto</Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Navbar