export type Block =
	| { t: 'p'; text: string }
	| { t: 'ul'; items: string[] }
	| { t: 'ol'; items: string[] }
	| { t: 'table'; head: string[]; rows: string[][]; caption?: string }
	| { t: 'cards'; items: { title: string; text: string; label?: string }[] }
	| { t: 'steps'; items: { title: string; text: string }[] }
	| { t: 'callout'; title: string; text: string; tone?: 'note' | 'warn' | 'tip' }
	| { t: 'formula'; expr: string; note?: string };

export interface Section {
	id: string;
	h: string;
	blocks: Block[];
}

export interface Term {
	term: string;
	def: string;
}

export interface Topic {
	n: number;
	slug: string;
	title: string;
	desc: string;
	chapter: number;
	kicker: string;
	minutes: number;
	source: string;
	intro: string;
	sections: Section[];
	keyPoints: string[];
	terms?: Term[];
}

export interface Chapter {
	n: number;
	roman: string;
	title: string;
	desc: string;
}

export interface Instrumen {
	name: string;
	alias?: string;
	market: 'uang' | 'modal';
	category: string;
	issuer: string;
	tenor: string;
	result: string;
	risk: 'Rendah' | 'Sedang' | 'Tinggi';
	liquidity: 'Tinggi' | 'Sedang' | 'Rendah';
	syariah?: boolean;
	desc: string;
	slug?: string;
	facts: { label: string; value: string }[];
}

export interface Istilah {
	term: string;
	def: string;
	category: string;
	related?: number;
}

export interface Soal {
	n: number;
	chapter: number;
	q: string;
	options: string[];
	answer: number;
	why: string;
	topicSlug?: string;
	difficulty: 'Dasar' | 'Menengah' | 'Terapan';
}
