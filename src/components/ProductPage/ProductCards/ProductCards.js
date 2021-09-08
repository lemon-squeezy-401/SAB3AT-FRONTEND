import React, { useContext } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, makeStyles} from '@material-ui/core/';
import { ProductsContext } from '../../../context/AllProducts';
import { Link } from 'react-router-dom';
// import './ProductCards.css';
// import AddToCart from '../../../assets/AddToCart.svg';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(20),
    // paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(-20),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '75%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function ProductCard() {
  const { products } = useContext(ProductsContext);
  const classes = useStyles();


  let cartArray = [];
  // console.log('log cartArray from service cards page', cartArray);
  // console.log('log services from service cards page', services);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography>Description: {product.description}</Typography>
                  <Typography>Price: ${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style = {{textDecoration: 'none'}}
                    to={{
                      pathname: '/cart',
                      state: {
                        serviceId: `${product._id}`,
                        serviceTitle: `${product.title}`,
                        serviceDescription: `${product.description}`,
                        servicePrice: `${product.price}`,
                        serviceComments: [`${product.comments}`],
                      },
                    }}
                  >
                    <Button
                      style = {{borderRadius: '5px', backgroundColor: '#0275d8', color: '#fff'}}
                      size="small"
                      onClick={() => cartArray.push(product)}
                    >
                      ADD TO CART
                    </Button>
                  </Link>
                  <Link
                    style = {{textDecoration: 'none'}}
                    to={{
                      pathname: '/item',
                      state: {
                        serviceId: `${product._id}`,
                        serviceTitle: `${product.title}`,
                        serviceDescription: `${product.description}`,
                        servicePrice: `${product.price}`,
                        serviceComments: [`${product.comments}`],
                      },
                    }}
                  >
                    <Button
                      style = {{borderRadius: '5px', backgroundColor: '#0275d8', color: '#fff'}}
                      size="small"
                    >
                      VIEW DETAILS
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProductCard;

