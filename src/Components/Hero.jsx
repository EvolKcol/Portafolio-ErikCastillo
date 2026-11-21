import { Box, Button, Container, Typography } from "@mui/material"
import { LaptopChromebook, Email } from "@mui/icons-material"

function Hero() {
  return (
    <Box sx={{
      display: 'flex',
      minHeight: '520px',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      py: 6,
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}>
          <Box sx={{ 
            width: '50%', 
            textAlign:"left"

          }}>
            <Typography variant="overline" 
            sx={{
              color:"#000000",
              fontWeight: 'bold',
              
            }}>
              Técnico en Ensamblaje
            </Typography>

            <Typography variant="h2" 
            sx={{
              color:"#000000",
              fontWeight: 'bold',
            }}>
              Erik Francisco
            </Typography>
            <Typography variant="h4" 
            sx={{
              color:"#000000",
              
            }}>
              Tecníco en Ensamblaje de <br/> <Typography variant="h4" sx={{color:"#F52D70", display: 'inline-block'}}>Computadoras</Typography> Personales
            </Typography>

            <Typography variant="body1"
            sx={{
              color:"#000000",
            }}>
              Armo, optimzo y doy mantenimiento a equipos para un mejor rendimiento y experiencia de usuario.
            </Typography>

            <Box 
            sx={{
              display: 'flex',
              gap: 5,
              marginTop:"30px"
            }}>
              <Button variant="contained"
              sx={{
                backgroundColor: '#F52D70',
                
              }}>
                <Box 
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}>
                  <LaptopChromebook></LaptopChromebook>
                  <Typography>
                    Ver Proyectos
                  </Typography>
                </Box>
              </Button>
              <Button variant="outlined" 
              sx={{
                color:"#000000",
                borderColor:"#000000"

              }}>
                <Box 
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}>
                  <Email></Email>
                  <Typography>
                    contactame
                  </Typography>
                </Box>

              </Button>
            </Box>

          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default Hero