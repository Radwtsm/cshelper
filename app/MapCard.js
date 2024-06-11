import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <CardContent>
//       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography> */}
//       <Typography variant="h5" component="div">
//         NOMEMAPPA
//       </Typography>
//       {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography> */}
//       <Typography variant="body2">bestemmie</Typography>
//     </CardContent>
//     {/* <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions> */}
//   </React.Fragment>
// );

export default function OutlinedCard({ name, code, icon, commento }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card >
        <React.Fragment>
          <CardContent>
            <div className="flex flex-col jusitfy-center items-center">
            <Typography variant="h5" component="div">
              NOMEMAPPA
            </Typography>
            <Typography variant="body2">{commento}</Typography>
            </div>

            <CardMedia
              component="img"
              height="90"
              image={icon}
            //   alt="Paella dish"
            />
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
