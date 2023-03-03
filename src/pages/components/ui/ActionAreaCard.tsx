import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  url: string;
  image_path: string;
  image_height: number;
};

const ActionAreaCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image_path}
          height={props.image_height}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
