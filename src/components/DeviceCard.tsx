import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Device, DeviceText, DeviceTypeMap, StatusMap } from '../models/Devices.ts';
import { Button, CardMedia, Collapse } from '@mui/material';

const DeviceData = ({ id, name, type, status, lat, lon, imei, location, text, videocamera_id, imageUri, timeOfLastImageUpdate }: Device) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CardContent sx={{pb: '0 !important'}}>
        {imageUri && <CardMedia
          sx={{ mt: 1, borderRadius: '3px' }}
          component="img"
          height="140"
          image="/default_board.jpg"
          alt={type}
        />}
        <Typography variant="h6" component="div">
          {DeviceTypeMap[type]}
        </Typography>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {location}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Статус: {StatusMap[status]}
        </Typography>
        {text !== DeviceText.Empty && <Typography variant="body2">
          Текст: {text}
        </Typography>}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {lat.toFixed(4)} с.ш. {lon.toFixed(4)} в.д.
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          <Button
            size="small"
            onClick={handleExpandClick}
            sx={{ width: '100%' }}
          >
            {expanded ? 'Скрыть' : 'Показать больше'}
          </Button>
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{pt: '0 !important'}}>
          <Typography sx={{ fontSize: 14, margin: '0 !important' }} color="text.secondary">
            ID: {id} <br/>
            Camera Id: {videocamera_id} <br/>
            Imei: {imei} <br/>
            {timeOfLastImageUpdate && `Картинка обновлена: ${timeOfLastImageUpdate}`}
          </Typography>
        </CardContent>
      </Collapse>
    </React.Fragment>
  )
}

export default function DeviceCard({ device }: { device: Device }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card><DeviceData {...device} /></Card>
    </Box>
  );
}