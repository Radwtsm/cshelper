import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Image from "next/image";

export default function OutlinedCard({ name, code, icon, commento }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <React.Fragment>
          <CardContent>
            <div className="flex flex-col jusitfy-center items-center">
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2">{commento}</Typography>
            </div>

            <Image src={`/maps/${code}.png`} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  />
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
