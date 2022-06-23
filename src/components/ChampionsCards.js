import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ChampionsCards( props) {
  
  return (
    <Card key={props.ckey} sx={{ maxWidth: 330 , m:2,  height:"auto", }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="230"
        image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.id}_0.jpg`}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="body5" component="div">
         {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {props.blurb}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/champ/${props.id}`}> Mas INFO</Link></Button>
        
      </CardActions>
    </Card>
  );
}