import React, { useContext } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, makeStyles} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { ServicesContext } from '../../../context/AllServices';
// import './ServiceCards.css';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(20),
    // paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(-20)
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


  let cartArray = [];
  // console.log('log cartArray from service cards page', cartArray);
  // console.log('log services from service cards page', services);
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
                    to={{
                      pathname: '/cart',
                      state: {
                        serviceId: `${service._id}`,
                        serviceTitle: `${service.title}`,
                        serviceDescription: `${service.description}`,
                        servicePrice: `${service.price}`,
                        serviceComments: [`${service.comments}`],
                      },
                    }}
                  >
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => cartArray.push(service)}
                    >
                      ADD TO CART
                    </Button>
                  </Link>
                  <Link
                    to={{
                      pathname: '/item',
                      state: {
                        serviceId: `${service._id}`,
                        serviceTitle: `${service.title}`,
                        serviceDescription: `${service.description}`,
                        servicePrice: `${service.price}`,
                        serviceComments: [`${service.comments}`],
                      },
                    }}
                  >
                    <Button size="small" color="primary">
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
export default ServicePage;
