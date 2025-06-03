import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Maize from "../../assets/images/Maize.webp";
import Wheat from "../../assets/images/Paddi.webp";
import Sunflower from "../../assets/images/Sunflower.webp";



// ✅ Array of product objects
const productData = [
  {
    id: 1,
    title: "Maize Seeds",
    image: Maize,
    description: "High-yielding hybrid maize seed suited for various climates. Trusted by farmers for consistent performance.",
  },
  {
    id: 2,
    title: "Wheat Seeds",
    image: Wheat,
    description: "Premium wheat seeds designed for high resistance and optimal yield in Rabi season.",
  },
  {
    id: 3,
    title: "Sunflower Seeds",
    image: Sunflower,
    description: "High oil content sunflower seeds, perfect for Rabi cultivation with excellent disease resistance.",
  },
];

export default function ProductCard() {
  return (
    <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -translate-y-20">
      {productData.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 300, objectFit: "cover", padding: 1 }}
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='h-10'>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className='h-10'>
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary" className='pb-1 h-10'>
              Learn More
            </Button> */}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
