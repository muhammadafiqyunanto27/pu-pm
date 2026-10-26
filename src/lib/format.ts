const escapes: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

export const inline = (text: string): string =>
	text
		.replace(/[&<>"']/g, (char) => escapes[char] ?? char)
		.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

export const slugify = (text: string): string =>
	text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

export const riskLevel = (risk: string): 1 | 2 | 3 =>
	risk === 'Tinggi' ? 3 : risk === 'Sedang' ? 2 : 1;

export const pad = (n: number): string => String(n).padStart(2, '0');
