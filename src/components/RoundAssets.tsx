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


function AssetRow(props: {name: string, sellValue: number,upgradable: boolean, salable: boolean}) {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.sellValue}</td>
			<td><Button disabled={!props.upgradable} variant="outlined" sx={{fontSize: 14}}>+</Button></td>
			<td><Button disabled={!props.salable} variant="outlined" sx={{fontSize: 14}}>×</Button></td>
	</tr>
	);
}

function AssetTable(props: {validAssetList: Asset[]}) {

	let assetRows: JSX.Element[] = [];
	let totalAssetValue = 0;
	props.validAssetList.forEach((asset: Asset, index: number) => {
		let salable = true;
		let upgradable = asset.upgrades.reduce((a, b) => a + b, 0) < 7;
		let name = asset.upgrades.join('') + ' ' + Towers[asset.towerId].name;
		let sellValue = asset.purchasedPrice * 0.75;
		totalAssetValue += sellValue;
		assetRows.push(<AssetRow key={index} sellValue={sellValue} name={name} upgradable={upgradable} salable={salable} />);
	});
	let assetCount = props.validAssetList.length;
	assetRows.push(<AssetRow key={assetCount} sellValue={totalAssetValue} name={'Total for ' + assetCount + ' towers'} upgradable={false} salable={false} />);

	return (
		<table>
			<thead>
				<tr>
					<th>Tower</th>
					<th>Sell Value</th>
					<th>Upgrade</th>
					<th>Sell</th>
				</tr>
			</thead>
			<tbody>
				{assetRows}
			</tbody>
			</table>
	);
}

export default function RoundAssets(props: {currentRound: number, assetList: Asset[]}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let roundAssets: Asset[] = [];

  props.assetList.forEach(asset => {
	if ( asset.purchasedRound <= props.currentRound &&
		(!asset.soldRound || asset.soldRound > props.currentRound)) {
			roundAssets.push(asset);
		}
	
});

  return (
    <div className='RoundAssets'>
      <Button variant="contained" onClick={handleClickOpen}>
		Buy/Upgrade/Sell
      </Button>
      <Dialog className='RoundAssets' open={open} onClose={handleClose}>
        <DialogTitle>Round {props.currentRound} Asset List</DialogTitle>
        <DialogContent>
			<AssetTable validAssetList={roundAssets} />
            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Buy</Button>
          <Button onClick={handleClose}>Sell</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}