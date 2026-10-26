export interface Baris {
	aspek: string;
	uang: string;
	modal: string;
	catatan?: string;
}

export interface Grup {
	id: string;
	title: string;
	desc: string;
	rows: Baris[];
}

export const perbandingan: Grup[] = [
	{
		id: 'dasar',
		title: 'Dasar dan tenor',
		desc: 'Perbedaan yang paling pertama diajarkan dan paling sering keluar di ujian.',
		rows: [
			{
				aspek: 'Jangka waktu',
				uang: 'Kurang dari 1 tahun (1 hari–12 bulan)',
				modal: '1 tahun atau lebih, bahkan tanpa jatuh tempo untuk saham',
			},
			{
				aspek: 'Instrumen utama',
				uang: 'Surat utang jangka pendek, commercial paper, deposito berjangka',
				modal: 'Saham, obligasi, sukuk, reksa dana, derivatif',
			},
			{
				aspek: 'Sifat transaksi',
				uang: 'Sebagian besar over-the-counter lewat jaringan dealer',
				modal: 'Terorganisir di bursa, sebagian OTC',
			},
			{
				aspek: 'Tujuan investor',
				uang: 'Menjaga kekayaan (maintaining wealth)',
				modal: 'Menambah kekayaan (generating wealth)',
			},
		],
	},
	{
		id: 'mekanisme',
		title: 'Mekanisme dan akses',
		desc: 'Bagaimana transaksi terjadi dan siapa yang bisa masuk.',
		rows: [
			{
				aspek: 'Proses masuk',
				uang: 'Sederhana; transaksi setelah investor menyetujui penawaran',
				modal: 'Kompleks; lewat underwriter dan uji kelayakan saat IPO',
			},
			{
				aspek: 'Peserta',
				uang: 'Bank, BI, pemerintah, perusahaan, lembaga keuangan, sekuritas',
				modal: 'Emiten, investor, perusahaan efek, lembaga penunjang, profesi',
			},
			{
				aspek: 'Akses individu',
				uang: 'Terbatas; umumnya lewat deposito dan reksa dana pasar uang',
				modal: 'Terbuka lewat broker, reksa dana, atau surat berharga ritel',
			},
			{
				aspek: 'Peran perantara',
				uang: 'Dealer dan bank',
				modal: 'Underwriter, broker-dealer, manajer investasi',
			},
		],
	},
	{
		id: 'risiko',
		title: 'Risiko dan imbal hasil',
		desc: 'Hubungan risiko-imbal hasil yang searah, tetapi tidak identik.',
		rows: [
			{
				aspek: 'Tingkat risiko',
				uang: 'Rendah; cocok untuk profil risk averse',
				modal: 'Sedang sampai tinggi; profitabilitas berubah mengikuti pasar',
			},
			{
				aspek: 'Stabilitas nilai',
				uang: 'Cenderung stabil',
				modal: 'Berfluktuasi setiap hari bursa',
			},
			{
				aspek: 'Potensi imbal hasil',
				uang: 'Relatif pasti dan lebih rendah',
				modal: 'Lebih tinggi, tetapi tidak dijamin',
			},
			{
				aspek: 'Risiko utama',
				uang: 'Kredit penerbit dan likuiditas',
				modal: 'Pasar, likuiditas, dan kualitas emiten',
			},
		],
	},
	{
		id: 'likuiditas',
		title: 'Likuiditas',
		desc: 'Cepat dicairkan belum tentu bebas kerugian.',
		rows: [
			{
				aspek: 'Kecepatan pencairan',
				uang: 'Sekitar 1–2 hari kerja untuk produk tertentu',
				modal: 'Cepat lewat penjualan saham di bursa',
			},
			{
				aspek: 'Kepastian nilai',
				uang: 'Nilai aset cenderung stabil',
				modal: 'Nilai mengikuti harga pasar saat dijual',
			},
			{
				aspek: 'Penalti',
				uang: 'Ada pada deposito yang dicairkan sebelum jatuh tempo',
				modal: 'Tidak ada penalti, tetapi bisa rugi harga',
			},
		],
	},
	{
		id: 'otoritas',
		title: 'Otoritas dan pengawasan',
		desc: 'Siapa yang mengatur masing-masing pasar.',
		rows: [
			{
				aspek: 'Otoritas',
				uang: 'Bank Indonesia (BI)',
				modal: 'Kemenkeu RI, dialihkan ke OJK sejak 2012',
			},
			{
				aspek: 'Fokus pengawasan',
				uang: 'Stabilitas moneter dan sistem pembayaran',
				modal: 'Keterbukaan emiten dan perlindungan investor',
			},
			{
				aspek: 'Landasan utama',
				uang: 'Kewenangan BI di bidang moneter',
				modal: 'UU Pasar Modal dan UU OJK',
			},
		],
	},
	{
		id: 'fungsi',
		title: 'Fungsi',
		desc: 'Dua ruas jalan yang saling melengkapi.',
		rows: [
			{
				aspek: 'Fungsi utama',
				uang: 'Menjaga likuiditas jangka pendek',
				modal: 'Mencari modal jangka panjang',
			},
			{
				aspek: 'Peran bagi bank',
				uang: 'Mengelola likuiditas harian',
				modal: 'Menerbitkan saham/obligasi untuk memperkuat modal',
			},
			{
				aspek: 'Peran bagi pemerintah',
				uang: 'Mengelola kas jangka pendek lewat SPN',
				modal: 'Membiayai pembangunan lewat SBN jangka panjang',
			},
			{
				aspek: 'Peran bagi ekonomi',
				uang: 'Menjaga kelancaran sistem pembayaran',
				modal: 'Mendorong pertumbuhan dan penciptaan lapangan kerja',
			},
		],
	},
];

export const ringkas = [
	{ label: 'Pasar Uang', tone: 'uang' as const, poin: ['Tenor ≤ 1 tahun', 'Risiko rendah', 'Likuid, nilai stabil', 'Otoritas: BI', 'Tujuan: menjaga kekayaan'] },
	{ label: 'Pasar Modal', tone: 'modal' as const, poin: ['Tenor > 1 tahun', 'Risiko sedang–tinggi', 'Harga berfluktuasi', 'Otoritas: OJK', 'Tujuan: menumbuhkan kekayaan'] },
];
