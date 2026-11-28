import { Box, Card, CardContent, Container, Typography } from "@mui/material"

function MiSobre(){
    return(
        <Box sx={{
            display: 'flex',
            minHeight: '350px',
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
                        textAlign:"left",
                        display:"block"
                    }}>
                        <Typography variant="h4" sx={{
                            fontWeight:"bold",
                            color:"#000000f9",
                            marginTop:"15px"
                        }}>
                            Sobre mí

                        </Typography>

                        <Typography variant="subtitle1" sx={{
                            fontWeight:"bold",
                            color:"#000000"
                        }}>
                            Soy un tecnico en ensamblaje y mantenimiento de computadoras, con interes en la tecnologia y el aprendizaje continuo.

                        </Typography>
                        <Box sx={{
                            display:"flex",
                            gap:3,
                            marginTop:"20px"
                        }}>
                            <Card sx={{
                                width:"198px",
                                height:"119px"
                            }}>
                                <CardContent sx={{
                                    textAlign:"left"
                                }}>
                                    <Typography variant="h6" sx={{
                                        color:"#F52D70",
                                        fontWeight:"bold"
                                    }}>
                                        120+
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{
                                        fontWeight:"bold"
                                    }}>
                                        Equipos ensamblados
                                    </Typography>

                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"198px",
                                height:"119px",
                                borderColor:"#F52D70",
                                borderLeftWidth:"10px",
                                borderRightWidth:"10px"
                            }}>
                                <CardContent sx={{
                                    textAlign:"left"
                                }}>
                                    <Typography variant="h6" sx={{
                                        color:"#F52D70",
                                        fontWeight:"bold"
                                    }}>
                                        5
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{
                                        fontWeight:"bold"
                                    }}>
                                        Años de experiencia
                                    </Typography>

                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"198px",
                                height:"119px"
                            }}>
                                <CardContent sx={{
                                    textAlign:"left"
                                }}>
                                    <Typography variant="h6" sx={{
                                        color:"#F52D70",
                                        fontWeight:"bold"
                                    }}>
                                        100%
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{
                                        fontWeight:"bold"
                                    }}>
                                        Compromiso
                                    </Typography>

                                </CardContent>
                            </Card>
                            
                        </Box>

                    </Box>

                </Box>

            </Container>
        </Box>
    )
}

export default MiSobre