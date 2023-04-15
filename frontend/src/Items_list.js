import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ItemsList() {
  const [items, setItems] = React.useState([
    {
      id: 1,
      title: 'Item 1',
      description: 'This is the first item.',
      isHovering: false,
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'This is the second item.',
      isHovering: false,
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'This is the third item.',
      isHovering: false,
    },
  ]);

  const addItem = () => {
    const newId = items.length + 1;
    const newItem = {
      id: newId,
      title: `Item ${newId}`,
      description: `This is the ${newId}th item.`,
      isHovering: false,
    };
    setItems([...items, newItem]);
  };

  const handleMouseEnter = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isHovering: true } : item
      )
    );
  };

  const handleMouseLeave = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isHovering: false } : item
      )
    );
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Stack spacing={2} direction="column" alignItems="center">
        <Stack direction="row" spacing={0} justifyContent="flex-start" style={{ width: '100%' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <IconButton aria-label="back">
              <ArrowBackIcon />
          </IconButton>
          </Link>
        </Stack>
        <Stack direction="column" spacing={5} alignItems="center">
          <TextField id="search" label="Search for items" variant="outlined" style={{ width: '500px', height: '40px', color: 'primary.main' }} />
          <Button variant="contained" onClick={addItem}>Add Item</Button>
        </Stack>
        <Stack spacing={2} direction="column" alignItems="center">
          {items.map((item) => (
            <Stack
              key={item.id}
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              sx={{ width: '100%', px: 2 }}
            >
              <p style={{ textDecoration: item.isHovering ? 'underline' : 'none', textAlign: 'left' }}>{item.title} - {item.description}</p>
              <Button variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>Buy Item</Button>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

