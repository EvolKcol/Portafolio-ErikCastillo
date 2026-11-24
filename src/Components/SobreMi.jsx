import { Box, Container, Typography } from "@mui/material";

function SobreMi(){
    return(
        <Box sx={{
            display: 'flex',
            minHeight: '520px',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            py:6
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"flex",
                    gap:5,

                }}>
                    <Box sx={{
                        width:"50%",
                        
                    }}>
                        <Box component="img" src="" sx={{
                            width:"",
                            height:""
                        }}>

                        </Box>
                    </Box>
                    <Box sx={{
                        width:"50%"
                    }}>
                        <Typography variant="h2" sx={{
                            fontWeight:"bold",
                            color:"#0000"
                        }}>
                            Sobre mí

                        </Typography>

                        <Typography variant="h5" sx={{
                            fontWeight:"bold",
                            color:"#0000"
                        }}>
                            Soy un tecnico en ensamblaje y mantenimiento de computadoras, con interes en la tecnologia y el aprendizaje continuo.

                        </Typography>

                    </Box>

                </Box>

            </Container>
        </Box>
    )
}

export default SobreMi