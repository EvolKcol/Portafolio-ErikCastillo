import { Box, Container, Typography } from "@mui/material"

function MiSobre(){
    return(
        <Box sx={{
            display: 'flex',
            minHeight: '380px',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            py:6
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"flex",
                    gap:2,
                    alignItems:"center"

                }}>
                    <Box sx={{
                        width:"50%",
                        alignItems:"start",
                        marginRight:"20px"
                        
                    }}>
                        <Box component="img" src="./Doro.jpg" sx={{
                            width:"50%",
                            height:"30%"
                        }}>

                        </Box>
                    </Box>
                    <Box sx={{
                        width:"100%",
                        
                        display:"block"
                    }}>
                        <Typography variant="h3" sx={{
                            fontWeight:"bold",
                            color:"#000000f9"
                        }}>
                            Sobre mí

                        </Typography>

                        <Typography variant="h6" sx={{
                            fontWeight:"bold",
                            color:"#000000"
                        }}>
                            Soy un tecnico en ensamblaje y mantenimiento de computadoras, con interes en la tecnologia y el aprendizaje continuo.

                        </Typography>

                    </Box>

                </Box>

            </Container>
        </Box>
    )
}

export default MiSobre