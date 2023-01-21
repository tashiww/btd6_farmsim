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
import BuyTowerDialog from './BuyTowerDialog';
import SellIcon from '@mui/icons-material/Sell';
import UpgradeTowerDialog from './UpgradeTowerDialog';


function AssetRow(props: {name: string, upgradeTower: any, currentRound?: number, assetIndex?: number, asset?: Asset, sellValue: number,upgradable: boolean, salable: boolean, sellTower?: any, }) {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.sellValue}</td>
			<td><UpgradeTowerDialog upgradable={props.upgradable} asset={props.asset!} assetIndex={props.assetIndex!} currentRound={props.currentRound!} upgradeTower={props.upgradeTower} /></td>
			<td><Button data-sell_value={props.sellValue} data-asset_index={props.assetIndex} endIcon={<SellIcon />}
			 onClick={props.sellTower} disabled={!props.salable} variant="outlined" sx={{fontSize: 14}}>×</Button></td>
	</tr>
	);
}

function getSellValue(asset: Asset, favoredTrades?: boolean) {
	const towerId = asset.towerId;
	let totalCost = Towers[towerId].cost;
	asset.upgrades.forEach((tier: number, path: number) => {
		for(let i=0; i<tier;i++) {
			totalCost += Towers[towerId].upgrades[path][i].cost;
		}
	});
	return Math.round(totalCost * 0.75 / 5) * 5;


}
function AssetTable(props: {validAssetList: Asset[], upgradeTower: any, sellTower: any, currentRound: number, }) {

	let assetRows: JSX.Element[] = [];
	let totalAssetValue = 0;
	props.validAssetList.forEach((asset: Asset, index: number) => {
		let salable = true;
		let upgradable = asset.upgrades.reduce((a, b) => a + b, 0) < 7;
		let name = asset.upgrades.join('') + ' ' + Towers[asset.towerId].name;
		const sellValue = getSellValue(asset);
		totalAssetValue += sellValue;
		assetRows.push(<AssetRow key={index} currentRound={props.currentRound} assetIndex={asset.index} asset={asset} sellValue={sellValue} name={name} upgradable={upgradable} upgradeTower={props.upgradeTower} sellTower={props.sellTower} salable={salable} />);
	});
	let assetCount = props.validAssetList.length;
	assetRows.push(<AssetRow upgradeTower={props.upgradeTower} key={assetCount} sellValue={totalAssetValue} name={'Total for ' + assetCount + ' towers'} upgradable={false} salable={false} />);

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

export default function RoundAssets(props: {currentRound: number, assetList: Asset[], 
										addTower: any, sellTower: any, upgradeTower: any,}) {
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
			<AssetTable currentRound={props.currentRound} upgradeTower={props.upgradeTower} sellTower={props.sellTower} validAssetList={roundAssets} />
            </DialogContent>
        <DialogActions>
			<BuyTowerDialog addTower={props.addTower} currentRound={props.currentRound}  />
	          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}