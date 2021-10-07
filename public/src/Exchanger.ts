export class Exchanger {
	private gold: number;
	private silver: number;
	private copper: number;
	constructor(gold: number, silver: number, copper: number) {
		this.gold = gold;
		this.silver = silver;
		this.copper = copper;
	}

	public toCopper(): number {
		const goldToCopper = this.gold * 20 * 1;
		const silverToCopper = this.silver * 12;
		return goldToCopper + silverToCopper + this.copper;
	}
}
