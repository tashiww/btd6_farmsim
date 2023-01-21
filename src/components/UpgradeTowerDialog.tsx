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


function UpgradeTower(props: {assetIndex: number, name: string, upgradable: boolean, clickHandler: any, upgradeTier: number, upgradePath: number, asset: Asset}) {

	return (
		<Button variant="contained" disabled={!props.upgradable} data-asset_index={props.assetIndex} data-upgrade_path={props.upgradePath} data-upgrade_tier={props.upgradeTier+1} key={props.upgradePath} onClick={props.clickHandler}>
    {props.name}
    </Button>
	);
}

function checkUpgradability(path: number, upgrades: number[]): boolean {
  const currentTier = upgrades[path];
  const otherTiers = upgrades.slice();
  otherTiers.splice(path, 1);

  // current path maxed?
  if (currentTier === 5) {
    return false;
  }
  // upgrades in both other paths?
  if (otherTiers.every(x => x > 0)) {
    return false;
  }

  // other tier is main path and we're at tier 2
  if (otherTiers.some(x => x > 2) && currentTier === 2) {
    return false;
  }

  return true;
  
}
function UpgradeTable(props: {upgradeTower: any, assetIndex: number, asset: Asset}) {
	let UpgradeTowers: JSX.Element[] = [];
	for(let i=0; i<3; i++) {

    const upgradeTier = props.asset.upgrades[i];
    const upgradable = checkUpgradability(i, props.asset.upgrades);
    const name = Towers[props.asset.towerId].upgrades[i][upgradeTier]?.name ?? 'Maxed';

    if (upgradeTier <= 5) {
		  UpgradeTowers.push(<UpgradeTower name={name} upgradable={upgradable} key={i} asset={props.asset} assetIndex={props.assetIndex} upgradeTier={upgradeTier} upgradePath={i} clickHandler={props.upgradeTower} />);
    }
	};
	
	return (
<div className="UpgradeTower" >
{UpgradeTowers}
	</div>
	);
}

export default function UpgradeTowerDialog(props: {currentRound: number, upgradeTower: any, asset: Asset, assetIndex: number, upgradable: boolean}) {
  const [open, setOpen] = React.useState(false);

  const [multiUpgrade, setMultiUpgrade] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let roundAssets: Asset[] = [];

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultiUpgrade(event.target.checked);
  };


  return (
    <div className='RoundAssets'>
<Button onClick={handleClickOpen} disabled={!props.upgradable} variant="outlined" sx={{fontSize: 14}}>+</Button>
      <Dialog className='RoundAssets' open={open} onClose={handleClose}>
        <DialogTitle>Upgrade {Towers[props.asset?.towerId]?.name} on round {props.currentRound}</DialogTitle>
        <DialogContent>
			<UpgradeTable assetIndex={props.assetIndex} asset={props.asset} upgradeTower={props.upgradeTower}/>
            </DialogContent>
        <DialogActions>
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={handleCheck} />} label="Multi-Upgrade?" />
        </FormGroup>
                <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}