import { Box, Card, CardContent, CardMedia, Container, Typography, Button } from "@mui/material"
import {ArrowForward} from "@mui/icons-material"

function ProyectosLP(){
    return(
        <Box sx={{
            display: 'flex',
            minHeight: '380px',
            alignItems: 'center',
            backgroundColor: '#fffffffc',
            
            py: 6,
        }}>
            <Container maxWidth="lg">
                <Box>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",

                    }}>
                        <Box sx={{
                            position:"relative",
                            zIndex:1,
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between",
                            gap:"8px"
                        }}>
                            <Box alt="text" 
                            sx={{
                                width:"50%"

                            }}>
                                <Typography variant='h6' sx={{
                                    
                                    fontSize:"bold"
                                }}>
                                    Proyectos
                                    
                                </Typography>

                            </Box>
                            <Box sx={{
                                justifyContent:"flex-end",
                                
                            }}>
                                <Button size='small'  sx={{
                                    
                                    color:"#F52D70",
                                    padding: '4px 8px', 
                                    fontSize: '0.75rem',
                                    minWidth: '0',
                                    minHeight:"0"
                                    
                                }}>
                                    <Typography variant='caption' sx={{
                                        fontSize:"9px"
                                    }}>
                                        Ver todos <ArrowForward sx={{
                                            width:"18px",
                                            height:"10px"
                                        }}></ArrowForward>
                                    </Typography>
                                </Button>

                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display:"flex",
                        gap:10,
                        marginLeft:"25px"
                    }}>
                        <Card sx={{
                            width:"310px",
                            height:"240px"
                        }}>
                            <CardMedia 
                            component="img"
                            height="50%"
                            width="100%"
                            image="./Screenshot 2026-11-27 194817.png"
                            >

                            </CardMedia>
                            <CardContent sx={{
                                display:"block",
                                alignContent:"start"
                            }}>
                                <Typography variant="subtitle1" sx={{
                                    fontWeight:"bold",
                                }}>
                                    PC gamer de alto rendimiento
                                </Typography>
                                <Typography variant="body2">
                                    Esamblaje y cofiguracion completa.
                                </Typography>
                                <Button sx={{
                                    width:"110px",
                                    height:"30px",
                                    marginTop:"25px",
                                    alignContent:"flex-start"
                                }}>
                                    <Typography variant="caption" sx={{
                                        color:"#F52D70",
                                        fontSize:9.9,
                                        display:"flex"
                                    }}>
                                        Ver detalle <ArrowForward sx={{
                                            width:"10px",
                                            height:"15px"
                                        }}/>
                                    </Typography>

                                </Button>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            width:"310px",
                            height:"240px"
                        }}>
                            <CardMedia 
                            component="img"
                            height="50%"
                            width="100%"
                            image="./Screenshot 2026-11-27 203104.png"
                            >

                            </CardMedia>
                            <CardContent sx={{
                                display:"block",
                                alignContent:"start"
                            }}>
                                <Typography variant="subtitle1" sx={{
                                    fontWeight:"bold",
                                }}>
                                    Mantenimiento de laptops
                                </Typography>
                                <Typography variant="body2">
                                    Limpieza y optimizacion.
                                </Typography>
                                <Button sx={{
                                    width:"110px",
                                    height:"30px",
                                    marginTop:"25px",
                                    alignContent:"flex-start"
                                }}>
                                    <Typography variant="caption" sx={{
                                        color:"#F52D70",
                                        fontSize:9.9,
                                        display:"flex"
                                    }}>
                                        Ver detalle <ArrowForward sx={{
                                            width:"10px",
                                            height:"15px"
                                        }}/>
                                    </Typography>

                                </Button>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            width:"310px",
                            height:"240px"
                        }}>
                            <CardMedia 
                            component="img"
                            height="50%"
                            width="100%"
                            image="./Screenshot 2026-11-27 203313.png"
                            >

                            </CardMedia>
                            <CardContent sx={{
                                display:"block",
                                alignContent:"start"
                            }}>
                                <Typography variant="subtitle1" sx={{
                                    fontWeight:"bold",
                                }}>
                                    Equipos de oficina.
                                </Typography>
                                <Typography variant="body2">
                                    Ensamblaje profesional.
                                </Typography>
                                <Button sx={{
                                    width:"110px",
                                    height:"30px",
                                    marginTop:"25px",
                                    alignContent:"flex-start"
                                }}>
                                    <Typography variant="caption" sx={{
                                        color:"#F52D70",
                                        fontSize:9.9,
                                        display:"flex"
                                    }}>
                                        Ver detalle <ArrowForward sx={{
                                            width:"10px",
                                            height:"15px"
                                        }}/>
                                    </Typography>

                                </Button>
                            </CardContent>
                        </Card>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ProyectosLP