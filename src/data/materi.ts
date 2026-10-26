import type { Chapter, Topic } from './types';
import { ch1 } from './materi/ch1';
import { ch2 } from './materi/ch2';
import { ch3 } from './materi/ch3';
import { ch4 } from './materi/ch4';
import { ch5 } from './materi/ch5';

export const chapters: Chapter[] = [
	{ n: 1, roman: 'I', title: 'Pasar Keuangan', desc: 'Fungsi, jenis, risiko, dan pengawasannya di Indonesia' },
	{ n: 2, roman: 'II', title: 'Pasar Uang', desc: 'Karakteristik, peserta, sumber dana, dan mekanismenya' },
	{ n: 3, roman: 'III', title: 'Pasar Uang vs Pasar Modal', desc: 'Tujuh sumbu pembeda dan produk masing-masing' },
	{ n: 4, roman: 'IV', title: 'Instrumen Pasar Uang', desc: 'Promes, BA, deposito, CP, repo, T-Bill, dan syariah' },
	{ n: 5, roman: 'V', title: 'Valuta Asing', desc: 'Kurs, transaksi, pelaku, faktor, dan stabilitas rupiah' },
];

export const topics: Topic[] = [...ch1, ...ch2, ...ch3, ...ch4, ...ch5];

export const chapterOf = (n: number) => chapters.find((c) => c.n === n)!;

export const topicBySlug = (slug: string) => topics.find((t) => t.slug === slug);

export const topicsOfChapter = (n: number) => topics.filter((t) => t.chapter === n);

export const topicText = (t: Topic): string =>
	[
		t.title,
		t.desc,
		t.intro,
		...t.sections.flatMap((s) => [
			s.h,
			...s.blocks.flatMap((b) => {
				switch (b.t) {
					case 'p':
						return [b.text];
					case 'ul':
					case 'ol':
						return b.items;
					case 'table':
						return [...b.head, ...b.rows.flat()];
					case 'cards':
						return b.items.flatMap((i) => [i.label ?? '', i.title, i.text]);
					case 'steps':
						return b.items.flatMap((i) => [i.title, i.text]);
					case 'callout':
						return [b.title, b.text];
					case 'formula':
						return [b.expr, b.note ?? ''];
				}
			}),
		]),
		...t.keyPoints,
		...(t.terms ?? []).flatMap((x) => [x.term, x.def]),
	].join(' ');

export const totalMinutes = topics.reduce((s, t) => s + t.minutes, 0);

export const prevNext = (slug: string) => {
	const i = topics.findIndex((t) => t.slug === slug);
	return {
		prev: i > 0 ? topics[i - 1] : null,
		next: i >= 0 && i < topics.length - 1 ? topics[i + 1] : null,
		index: i + 1,
	};
};
