import React, { useContext } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core/';
// import { ShoppingCart, Visibility } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ServicesContext } from '../../../context/AllServices';
// import './ServiceCards.css';

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

function ServicePage() {
  const { services } = useContext(ServicesContext);
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {services.map((service) => {
          return (
            <Grid item key={service._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={service.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {service.title}
                  </Typography>
                  <Typography>Description: {service.description}</Typography>
                  <Typography>Price: ${service.price}</Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={{
                      pathname: '/cart',
                      state: {
                        serviceId: `${service._id}`,
                        serviceTitle: `${service.title}`,
                        serviceDescription: `${service.description}`,
                        servicePrice: `${service.price}`,
                        serviceImg: `${service.image}`,
                        serviceComments: [`${service.comments}`],
                      },
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: '5px',
                        backgroundColor: '#0275d8',
                        color: '#fff',
                        marginRight: '20px',
                        marginLeft: '15px',
                        marginBottom: '11px'
                      }}
                      size="small"
                      color="primary"
                      onClick={() => {
                        let newArr = [];
                        newArr.push(service);
                        // console.log('aaaaaaaaaaaaaaaaaaa', newArr);
                        localStorage.setItem('cart', JSON.stringify(service));
                      }}
                    >
                      ADD TO CART
                      {/* <ShoppingCart  /> */}
                    </Button>
                  </Link>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={{
                      pathname: '/item',
                      state: {
                        serviceId: `${service._id}`,
                        serviceTitle: `${service.title}`,
                        serviceDescription: `${service.description}`,
                        servicePrice: `${service.price}`,
                        serviceImg: `${service.image}`,
                        serviceComments: [`${service.comments}`],
                      },
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: '5px',
                        backgroundColor: '#0275d8',
                        color: '#fff',
                        marginBottom: '11px',

                      }}
                      size="small" color="primary">
                      VIEW DETAILS
                      {/* <Visibility /> */}
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
export default ServicePage;
