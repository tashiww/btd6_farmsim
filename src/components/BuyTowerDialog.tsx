import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Asset from '../types/Asset'
import Towers from '../config/Towers';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function BuyTower(props: {towerId: number, clickHandler: any}) {


	return (
		<li data-towerid={props.towerId} key={props.towerId} onClick={props.clickHandler}>{Towers[props.towerId].name}</li>
	);
}

function BuyTable(props: {addTower: any}) {
	let buyTowers: JSX.Element[] = [];
	Towers.forEach((tower, index) => {
		buyTowers.push(<BuyTower key={index} towerId={index} clickHandler={props.addTower} />);
	});
	
	return (
<ul className="BuyTower" >
{buyTowers}
	</ul>
	);
}

export default function BuyTowerDialog(props: {currentRound: number, addTower: any}) {
  const [open, setOpen] = React.useState(false);

  const [multibuy, setMultibuy] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let roundAssets: Asset[] = [];

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultibuy(event.target.checked);
  };


  return (
    <div className='RoundAssets'>
      <Button variant="contained" onClick={handleClickOpen}>
		Buy New Tower
      </Button>
      <Dialog className='RoundAssets' open={open} onClose={handleClose}>
        <DialogTitle>Buy tower on round {props.currentRound}</DialogTitle>
        <DialogContent>
			<BuyTable addTower={props.addTower}/>
            </DialogContent>
        <DialogActions>
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={handleCheck} />} label="Multi-buy?" />
        </FormGroup>
                <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}