import type { APIRoute } from 'astro';
import { chapters, topicText, topics } from '../data/materi';
import { instrumen } from '../data/instrumen';
import { glosariumSorted } from '../data/glosarium';
import { perbandingan } from '../data/perbandingan';
import { soal } from '../data/quiz';
import { slugify } from '../lib/format';

export const GET: APIRoute = () => {
	const records = [
		...topics.map((topic) => {
			const chapter = chapters.find((item) => item.n === topic.chapter);
			return {
				kind: 'Topik',
				url: `rangkuman/${topic.slug}`,
				title: topic.title,
				meta: chapter ? `Bab ${chapter.roman} · ${chapter.title}` : 'Rangkuman',
				text: topicText(topic),
			};
		}),
		...instrumen.map((item) => ({
			kind: 'Instrumen',
			url: `instrumen#i-${slugify(item.name)}`,
			title: `${item.name}${item.alias ? ` (${item.alias})` : ''}`,
			meta: `${item.market === 'uang' ? 'Pasar uang' : 'Pasar modal'} · ${item.category}`,
			text: `${item.issuer}. Tenor ${item.tenor}. Imbal hasil ${item.result}. Risiko ${item.risk}. Likuiditas ${item.liquidity}. ${item.desc} ${item.facts.map((fact) => `${fact.label} ${fact.value}`).join(' ')}`,
		})),
		...glosariumSorted.map((item) => ({
			kind: 'Istilah',
			url: `glosarium#g-${slugify(item.term)}`,
			title: item.term,
			meta: `Glosarium · ${item.category}`,
			text: item.def,
		})),
		...perbandingan.map((group) => ({
			kind: 'Perbandingan',
			url: `bandingkan#${group.id}`,
			title: group.title,
			meta: 'Pasar uang vs pasar modal',
			text: `${group.desc} ${group.rows.map((row) => `${row.aspek}: pasar uang ${row.uang}; pasar modal ${row.modal}`).join(' ')}`,
		})),
		...chapters.map((chapter) => {
			const items = soal.filter((item) => item.chapter === chapter.n);
			if (!items.length) return null;
			return {
				kind: 'Latihan',
				url: 'latihan',
				title: `Latihan Bab ${chapter.roman} — ${chapter.title}`,
				meta: `${items.length} soal pilihan ganda`,
				text: items
					.map((item) => `${item.q} ${item.options.join(' ')} Pembahasan: ${item.why}`)
					.join(' '),
			};
		}).filter((item): item is NonNullable<typeof item> => Boolean(item)),
		{
			kind: 'Halaman',
			url: 'instrumen',
			title: 'Katalog Instrumen',
			meta: 'Pasar uang dan pasar modal',
			text: 'Katalog 17 instrumen dengan penerbit, tenor, imbal hasil, risiko, likuiditas, dan filter pasar.',
		},
		{
			kind: 'Halaman',
			url: 'bandingkan',
			title: 'Perbandingan Pasar Uang vs Pasar Modal',
			meta: 'Enam kelompok pembeda',
			text: 'Tabel perbandingan tenor, mekanisme, risiko, likuiditas, otoritas, dan fungsi pasar uang dengan pasar modal.',
		},
		{
			kind: 'Halaman',
			url: 'glosarium',
			title: 'Glosarium Pasar Uang dan Pasar Modal',
			meta: '70 istilah A–Z',
			text: 'Definisi istilah pasar uang, pasar modal, risiko, syariah, regulasi, dan valuta asing.',
		},
		{
			kind: 'Halaman',
			url: 'latihan',
			title: 'Latihan Soal',
			meta: '35 soal pilihan ganda',
			text: 'Latihan interaktif dengan pembahasan langsung, skor, dan tautan ke topik terkait.',
		},
	];

	return new Response(JSON.stringify(records), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};
