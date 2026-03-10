import {
  Grid, Card, CardContent, CardMedia, CardActions,
  Typography, Button
} from "@mui/material";
import erica from "../assets/erica.png";
import jenica from "../assets/jenica.png";
import karen from "../assets/karen.png";
import angel from "../assets/angel.png";

const items = [
  { id: 1, title: "Jenica Capili", desc: "",
    img: jenica,
    url: "https://www.facebook.com/jenica.capili.33" },
  { id: 2, title: "Karen Joy Cabuang", desc: "",
    img: karen,
    url: "https://www.facebook.com/Renren.2135" },
  { id: 3, title: "Angel Faith Dela Virgo", desc: "",
    img: angel,
    url: "https://nodejs.org" },
    {
        id: 4, title: "Erica Dela Cruz", desc: "",
        img: erica,
        url: "https://www.facebook.com/ekdcctz"
    }
];

function Home() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to ITPE4 Full-Stack App
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        A complete React + MUI + Node.js project built from the ITPE4 documentation.
      </Typography>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}
            key={item.id}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { boxShadow: 8 },
              transition: 'box-shadow 0.3s'
            }}>
              <CardMedia component="img" height={250}
                image={item.img} alt={item.title}
                sx={{ objectFit: 'cover', p: 0,
                  bgcolor: '#f0f4f8' }} />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={item.url}
                  target="_blank" rel="noopener noreferrer">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;