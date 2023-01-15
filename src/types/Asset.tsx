type Asset = {
	index: number,
	towerId: number,
	upgrades: [number, number, number],
	purchasedRound: number,
	soldRound?: number,
	favoredTrades: boolean,
	discountVillage: number,
	purchasedPrice: number,
}

export default Asset;