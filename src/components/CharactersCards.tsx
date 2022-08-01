import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material"

interface CharacterCardProps {
  name: any
  description: string
  image: string
  punctuation: number
}

export default function CharacterCard(props: CharacterCardProps) {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: "column" }}
      justifyContent="center"
      alignItems="center"
      margin={4}
    >
      <Card sx={{ maxWidth: 300, minWidth: 300, maxHeight: 500, minHeight: 500 }}>
        <CardActionArea>
          <CardMedia component="img" sx={{ height: 350 }} image={props.image} alt="green iguana" />
          <CardContent>
            <Typography variant="h5" display="flex" justifyContent="end" color="text.secondary">
              {props.punctuation}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}
