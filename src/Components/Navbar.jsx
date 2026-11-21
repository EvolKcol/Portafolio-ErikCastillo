import { Link } from 'react-router-dom'

import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'

function Navbar() {
    return (
        <AppBar position="static" elevation={0} 
        sx={{ 
            backgroundColor: '#ffffffe8',
            borderBottom:"3px solid #ffffff3b"
            
        }}>
            <Container maxWidth="lg" 
            sx={{
                
                
            }}>
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
                            color: '#000000',
                            fontWeight: 'bold',
                        }}>
                            Unicorn Assembly 
                        </Typography>

                    </Box>
                    {/* Navegacion */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alinItems: 'center',
                            gap: 1,
                        }}>
                            <Button component={Link} to="/"  
                            sx={{
                                color: '#ffffff',
                                backgroundColor: '#F52D70',
                            }}>Home</Button>
                            <Button component={Link} to="/sobre-mi"  sx={{ color: '#000000', fontWeight: 'bold' }}>Sobre Mi</Button>
                            <Button component={Link} to="/proyectos"  sx={{ color: '#000000', fontWeight: 'bold' }}>Proyectos</Button>
                        

                        </Box>
                        <Box>
                            <Button component={Link} to="/contacto" variant="contained" color="primary" sx={{ backgroundColor: '#F52D70' }}>
                                Contacto
                            </Button>
                        </Box>
                    </Box>    
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Navbar