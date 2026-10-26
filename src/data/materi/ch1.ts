import type { Topic } from '../types';

export const ch1: Topic[] = [
	{
		n: 1,
		slug: 'pengertian-pasar-keuangan',
		title: 'Pengertian Pasar Keuangan',
		desc: 'Mekanisme pertemuan surplus unit dan deficit unit lewat instrumen keuangan',
		chapter: 1,
		kicker: 'Dasar-dasar',
		minutes: 5,
		source: 'Kelompok 1 — Pasar Keuangan',
		intro:
			'Pasar keuangan bukan sekadar gedung bursa. Ia adalah mekanisme yang mempertemukan pihak yang punya kelebihan dana dengan pihak yang membutuhkan dana, dan menjembatani keduanya memakai instrumen keuangan. Dari definisi ini seluruh materi pasar uang dan pasar modal bisa diturunkan.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan inti konsepnya',
				blocks: [
					{
						t: 'p',
						text: 'Pasar keuangan adalah mekanisme yang mempertemukan pihak yang memiliki kelebihan dana (surplus unit) dengan pihak yang membutuhkan dana (deficit unit). Pertemuan itu terjadi melalui transaksi instrumen keuangan, baik secara langsung antar kedua pihak maupun melalui lembaga perantara.',
					},
					{
						t: 'callout',
						title: 'Satu kalimat untuk diingat',
						text: 'Pasar keuangan memindahkan dana dari yang tidak sedang memakainya ke yang sedang membutuhkannya — dengan harga, jangka waktu, dan risiko yang disepakati.',
					},
					{
						t: 'p',
						text: 'Contoh instrumen yang diperdagangkan antara lain saham, obligasi, dan deposito. Ketiganya mewakili tiga hubungan ekonomi yang berbeda: kepemilikan, utang, dan simpanan.',
					},
					{
						t: 'table',
						head: ['Instrumen', 'Hubungan ekonomi', 'Pemegang mendapat'],
						rows: [
							['Saham', 'Kepemilikan (ekuitas)', 'Dividen dan kenaikan nilai saham'],
							['Obligasi', 'Utang (kreditur)', 'Kupon dan pelunasan pokok'],
							['Deposito', 'Simpanan di bank', 'Bunga sesuai tenor'],
						],
					},
				],
			},
			{
				id: 'unsur',
				h: 'Tiga unsur yang selalu ada',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: '01',
								title: 'Pelaku',
								text: 'Rumah tangga, perusahaan, pemerintah, bank, dan lembaga keuangan lain. Ada yang datang sebagai pemilik dana, ada yang datang sebagai pencari dana.',
							},
							{
								label: '02',
								title: 'Instrumen',
								text: 'Kontrak atau surat berharga yang menyatakan hak dan kewajiban: saham, obligasi, deposito, commercial paper, dan seterusnya.',
							},
							{
								label: '03',
								title: 'Mekanisme',
								text: 'Cara transaksi berlangsung — langsung, lewat bank, lewat broker, melalui bursa, atau over-the-counter (OTC).',
							},
						],
					},
					{
						t: 'p',
						text: 'Pasar keuangan tidak selalu punya lokasi fisik terpusat. Banyak transaksi, terutama di pasar uang dan valuta asing, berlangsung secara over-the-counter: dua pihak bertransaksi langsung lewat jaringan dealer dan sistem komunikasi elektronik.',
					},
				],
			},
			{
				id: 'alur',
				h: 'Alur dana dalam satu transaksi',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Dana terkumpul di surplus unit',
								text: 'Rumah tangga menabung, perusahaan menyisihkan kas, atau bank memiliki likuiditas berlebih.',
							},
							{
								title: 'Dana masuk ke pasar',
								text: 'Surplus unit membeli instrumen — deposito, obligasi, saham, atau surat utang jangka pendek.',
							},
							{
								title: 'Deficit unit menerima dana',
								text: 'Perusahaan atau pemerintah memakai dana itu untuk modal kerja, investasi, atau menutup defisit anggaran.',
							},
							{
								title: 'Imbal hasil kembali ke pemilik dana',
								text: 'Bunga, kupon, dividen, atau selisih harga dibayarkan sesuai perjanjian.',
							},
						],
					},
					{
						t: 'p',
						text: 'Kalau alur ini berjalan mulus, dana tidak menganggur dan proyek yang layak mendapat pembiayaan. Kalau macet — misalnya kreditur gagal bayar — risikonya merambat ke pihak lain. Karena itulah pasar keuangan diatur dan diawasi.',
					},
				],
			},
			{
				id: 'mengapa',
				h: 'Mengapa pasar keuangan penting',
				blocks: [
					{
						t: 'ul',
						items: [
							'**Mengalokasikan dana secara efisien.** Dana berpindah ke pihak yang paling membutuhkan dan paling mampu mengelolanya.',
							'**Membentuk harga aset.** Harga saham, obligasi, dan suku bunga lahir dari interaksi permintaan dan penawaran.',
							'**Menyediakan likuiditas.** Pemilik aset bisa mengubahnya menjadi uang tunai tanpa menunggu proyek selesai.',
							'**Membagi risiko.** Risiko usaha dapat dipencar dan dipindahkan lewat diversifikasi, asuransi, atau instrumen derivatif.',
							'**Menopang kebijakan moneter.** Bank sentral memakai pasar uang untuk memengaruhi likuiditas dan suku bunga.',
						],
					},
				],
			},
		],
		keyPoints: [
			'Pasar keuangan mempertemukan surplus unit dan deficit unit melalui instrumen keuangan.',
			'Transaksi bisa langsung atau melalui lembaga perantara, dan tidak harus punya lokasi fisik.',
			'Instrumen mewakili hubungan kepemilikan (saham), utang (obligasi), atau simpanan (deposito).',
			'Fungsi utamanya: alokasi dana, pembentukan harga, likuiditas, dan efisiensi transaksi.',
		],
		terms: [
			{ term: 'Surplus unit', def: 'Pihak yang memiliki dana lebih dari kebutuhan konsumsinya dan siap menginvestasikannya.' },
			{ term: 'Deficit unit', def: 'Pihak yang membutuhkan dana tambahan untuk konsumsi, modal kerja, atau investasi.' },
			{ term: 'Instrumen keuangan', def: 'Kontrak atau surat berharga yang memberi hak atas arus kas atau kepemilikan suatu aset.' },
			{ term: 'Over-the-counter (OTC)', def: 'Transaksi langsung antar pihak di luar bursa terpusat.' },
		],
	},
	{
		n: 2,
		slug: 'fungsi-pasar-keuangan',
		title: 'Fungsi Utama Pasar Keuangan',
		desc: 'Alokasi, penentuan harga, likuiditas, dan efisiensi',
		chapter: 1,
		kicker: 'Dasar-dasar',
		minutes: 5,
		source: 'Kelompok 1 — Pasar Keuangan',
		intro:
			'Empat fungsi pasar keuangan saling melengkapi. Alokasi memindahkan dana, penentuan harga memberi angka pada aset, likuiditas membuat aset mudah dicairkan, dan efisiensi menekan biaya transaksi. Kalau satu fungsi terganggu, fungsi lain ikut melemah.',
		sections: [
			{
				id: 'empat-fungsi',
				h: 'Empat fungsi dalam satu tabel',
				blocks: [
					{
						t: 'table',
						head: ['Fungsi', 'Yang dilakukan', 'Contoh yang terasa'],
						rows: [
							[
								'Fungsi alokasi',
								'Menyalurkan dana dari pihak yang kelebihan dana kepada pihak yang membutuhkan dana',
								'Investor membeli obligasi perusahaan; perusahaan memakai dananya untuk pabrik baru',
							],
							[
								'Fungsi penentuan harga',
								'Membentuk harga dan tingkat pengembalian berdasarkan permintaan dan penawaran',
								'Harga saham naik saat permintaan lebih besar dari penawaran',
							],
							[
								'Fungsi likuiditas',
								'Memudahkan aset keuangan dikonversi menjadi uang tunai',
								'Saham bisa dijual di bursa dalam hitungan menit pada hari bursa',
							],
							[
								'Fungsi kenyamanan dan efisiensi',
								'Mengurangi biaya transaksi dan biaya pencarian informasi',
								'Bursa menyediakan satu tempat, aturan, dan harga acuan bagi semua peserta',
							],
						],
					},
					{
						t: 'callout',
						title: 'Jangan tertukar',
						text: 'Likuiditas berbicara tentang mudah-tidaknya aset dicairkan. Efisiensi berbicara tentang biaya dan waktu yang dibutuhkan untuk bertransaksi. Dua hal berbeda, walau sama-sama soal kemudahan.',
						tone: 'note',
					},
				],
			},
			{
				id: 'alokasi',
				h: 'Fungsi alokasi: dari yang menganggur ke yang produktif',
				blocks: [
					{
						t: 'p',
						text: 'Fungsi ini adalah alasan ekonomi utama keberadaan pasar keuangan. Tanpa pasar, pemilik dana harus mencari sendiri pihak yang butuh dana, dan pencari dana harus mengetuk pintu satu per satu. Pasar mempersingkat pertemuan itu.',
					},
					{
						t: 'ul',
						items: [
							'Dana rumah tangga berpindah ke perusahaan yang sedang ekspansi.',
							'Dana pemerintah daerah yang belum terpakai bisa ditempatkan di instrumen jangka pendek.',
							'Bank menyalurkan dana pihak ketiga ke sektor yang membutuhkan kredit.',
						],
					},
					{
						t: 'p',
						text: 'Alokasi yang baik membuat pertumbuhan ekonomi lebih tinggi, karena dana tidak tertahan di tempat yang tidak produktif. Alokasi yang buruk — misalnya karena informasi tidak simetris — membuat dana mengalir ke proyek berisiko tinggi tanpa imbal hasil yang sepadan.',
					},
				],
			},
			{
				id: 'harga',
				h: 'Fungsi penentuan harga dan likuiditas',
				blocks: [
					{
						t: 'p',
						text: 'Harga di pasar keuangan adalah hasil kesepakatan kolektif. Ketika banyak pihak ingin membeli suatu aset, harganya naik; ketika banyak yang ingin menjual, harganya turun. Dari harga itu lahir tingkat pengembalian (yield) yang menjadi pembanding bagi aset lain.',
					},
					{
						t: 'p',
						text: 'Sementara itu, likuiditas membuat aset tidak "terkunci". Seorang investor yang membeli obligasi bisa menjualnya di pasar sekunder sebelum jatuh tempo. Kemudahan inilah yang membuat orang bersedia menempatkan dana dalam jangka panjang.',
					},
					{
						t: 'formula',
						expr: 'Yield obligasi ≈ (kupon tahunan ÷ harga pasar) × 100%',
						note: 'Saat harga obligasi turun, yield naik — hubungan keduanya berbanding terbalik.',
					},
				],
			},
			{
				id: 'efisiensi',
				h: 'Fungsi kenyamanan dan efisiensi',
				blocks: [
					{
						t: 'p',
						text: 'Pasar yang terorganisasi menekan dua jenis biaya: biaya transaksi (komisi, spread, biaya administrasi) dan biaya pencarian informasi (waktu dan tenaga untuk menemukan pihak lawan transaksi).',
					},
					{
						t: 'cards',
						items: [
							{
								title: 'Biaya transaksi turun',
								text: 'Satu bursa mempertemukan banyak pembeli dan penjual, sehingga spread harga lebih sempit.',
							},
							{
								title: 'Informasi lebih terbuka',
								text: 'Laporan keuangan emiten dan harga transaksi tersedia publik, mengurangi asimetri informasi.',
							},
							{
								title: 'Aturan yang sama',
								text: 'Standar pencatatan, penyelesaian transaksi, dan perlindungan investor berlaku untuk semua peserta.',
							},
						],
					},
				],
			},
		],
		keyPoints: [
			'Fungsi alokasi memindahkan dana ke pihak yang membutuhkan dan mampu mengelolanya.',
			'Fungsi penentuan harga membentuk harga aset dan tingkat pengembalian lewat permintaan-penawaran.',
			'Fungsi likuiditas memudahkan aset dicairkan menjadi uang tunai.',
			'Fungsi efisiensi menekan biaya transaksi dan biaya mencari informasi.',
			'Likuiditas dan efisiensi adalah dua hal berbeda — jangan disamakan.',
		],
		terms: [
			{ term: 'Alokasi dana', def: 'Penyaluran dana dari pihak yang kelebihan ke pihak yang membutuhkan.' },
			{ term: 'Yield', def: 'Tingkat pengembalian yang dihasilkan suatu investasi, biasanya dinyatakan dalam persen per tahun.' },
			{ term: 'Spread', def: 'Selisih antara harga beli dan harga jual yang ditetapkan pasar atau dealer.' },
			{ term: 'Asimetri informasi', def: 'Kondisi ketika satu pihak memiliki informasi lebih banyak daripada pihak lain.' },
		],
	},
	{
		n: 3,
		slug: 'jenis-pasar-keuangan',
		title: 'Jenis-Jenis Pasar Keuangan',
		desc: 'Pasar uang, modal, valuta asing, komoditas, dan derivatif',
		chapter: 1,
		kicker: 'Klasifikasi',
		minutes: 6,
		source: 'Kelompok 1 — Pasar Keuangan',
		intro:
			'Pasar keuangan dibagi berdasarkan jenis instrumen yang diperdagangkan. Lima jenis yang dibahas di kelas: pasar uang, pasar modal, pasar valuta asing, pasar komoditas, dan pasar derivatif. Masing-masing punya tenor, pelaku, dan tempat transaksi yang khas.',
		sections: [
			{
				id: 'peta',
				h: 'Peta lima jenis pasar',
				blocks: [
					{
						t: 'table',
						head: ['Jenis pasar', 'Instrumen', 'Tenor', 'Ciri tempat'],
						rows: [
							['Pasar uang', 'Pinjaman antarbank, commercial paper, SBI, deposito', '≤ 1 tahun', 'OTC, jaringan dealer'],
							['Pasar modal', 'Saham, obligasi, reksa dana, derivatif', '> 1 tahun', 'Bursa atau OTC'],
							['Pasar valuta asing', 'Mata uang asing (USD, EUR, JPY, GBP, SGD, MYR)', 'Spot sampai berjangka', 'OTC global, 24 jam'],
							['Pasar komoditas', 'Kontrak komoditas (futures)', 'Berjangka', 'Bursa komoditas'],
							['Pasar derivatif', 'Kontrak yang nilainya mengacu aset lain', 'Sesuai kontrak', 'OTC atau bursa'],
						],
					},
				],
			},
			{
				id: 'uang',
				h: 'Pasar uang (money market)',
				blocks: [
					{
						t: 'p',
						text: 'Tempat transaksi instrumen keuangan jangka pendek, umumnya kurang dari satu tahun. Pelakunya bank komersial, perusahaan sekuritas, broker, dan bank sentral. Contoh instrumen: pinjaman antarbank, commercial paper, dan SBI.',
					},
					{
						t: 'p',
						text: 'Pasar uang berfungsi menjaga likuiditas. Bank yang kekurangan dana jangka pendek bisa meminjam dari bank yang kelebihan dana, tanpa harus menjual aset jangka panjangnya.',
					},
				],
			},
			{
				id: 'modal',
				h: 'Pasar modal (capital market)',
				blocks: [
					{
						t: 'p',
						text: 'Tempat transaksi instrumen keuangan jangka panjang. Perusahaan memakainya untuk memperoleh tambahan modal jangka panjang, sedangkan investor memakainya untuk menumbuhkan kekayaan.',
					},
					{
						t: 'ul',
						items: [
							'Instrumen utama: saham dan obligasi.',
							'Perdagangan dapat melalui bursa atau over-the-counter.',
							'Di Indonesia, pengawasannya berada di OJK, dengan BEI sebagai penyelenggara bursa.',
						],
					},
				],
			},
			{
				id: 'valas-komoditas-derivatif',
				h: 'Valuta asing, komoditas, dan derivatif',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'Valas',
								title: 'Pasar valuta asing',
								text: 'Tempat transaksi mata uang asing. Bentuknya spot (langsung), forward (masa depan), dan swap (pertukaran dengan kesepakatan tertentu). Banyak berlangsung OTC dalam jaringan global.',
							},
							{
								label: 'Komoditas',
								title: 'Pasar komoditas',
								text: 'Tempat memperjualbelikan komoditas tertentu dengan transaksi berjangka (futures). Kesepakatan dibuat sekarang, realisasinya di masa depan.',
							},
							{
								label: 'Derivatif',
								title: 'Pasar derivatif',
								text: 'Tempat memperdagangkan instrumen yang nilainya mengacu pada aset lain: saham, obligasi, mata uang, atau komoditas. Bisa lewat OTC maupun bursa.',
							},
						],
					},
					{
						t: 'callout',
						title: 'Batas yang sering ditanyakan',
						text: 'Perdagangan komoditas yang tidak terorganisir — misalnya tawar-menawar langsung antara produsen dan konsumen di pasar tradisional — tidak termasuk pasar keuangan. Yang masuk adalah perdagangan kontrak berjangka yang terorganisir.',
						tone: 'note',
					},
				],
			},
			{
				id: 'cara-membedakan',
				h: 'Cara cepat membedakan',
				blocks: [
					{
						t: 'ol',
						items: [
							'Lihat tenornya: ≤ 1 tahun berarti pasar uang; > 1 tahun berarti pasar modal.',
							'Lihat objeknya: mata uang berarti valas; komoditas berarti pasar komoditas; kontrak turunan berarti derivatif.',
							'Lihat tempatnya: bursa terorganisir atau OTC. Banyak pasar berjalan di keduanya.',
						],
					},
					{
						t: 'p',
						text: 'Pasar derivatif sering dianggap "paling rumit" karena nilainya bergantung pada aset lain. Padahal secara fungsi, derivatif tetap pasar keuangan: ia memindahkan risiko dari pihak yang tidak ingin menanggungnya ke pihak yang bersedia menanggungnya dengan imbalan tertentu.',
					},
				],
			},
		],
		keyPoints: [
			'Lima jenis pasar keuangan: uang, modal, valuta asing, komoditas, dan derivatif.',
			'Pasar uang bertransaksi ≤ 1 tahun; pasar modal > 1 tahun.',
			'Pasar valas mempertukarkan mata uang dengan kurs tertentu, banyak secara OTC.',
			'Pasar komoditas memakai kontrak berjangka; perdagangan komoditas tidak terorganisir tidak termasuk pasar keuangan.',
			'Pasar derivatif memperdagangkan kontrak yang nilainya mengacu pada aset lain.',
		],
		terms: [
			{ term: 'Money market', def: 'Pasar untuk instrumen keuangan jangka pendek, umumnya kurang dari satu tahun.' },
			{ term: 'Capital market', def: 'Pasar untuk instrumen keuangan jangka panjang seperti saham dan obligasi.' },
			{ term: 'Futures', def: 'Kontrak berjangka terstandarisasi untuk membeli atau menjual aset pada harga dan waktu yang disepakati.' },
			{ term: 'Derivatif', def: 'Instrumen keuangan yang nilainya diturunkan dari nilai aset dasar (underlying).' },
		],
	},
	{
		n: 4,
		slug: 'risiko-pasar-keuangan',
		title: 'Risiko Pasar Keuangan',
		desc: 'Risiko pasar, kredit, likuiditas, operasional, dan nilai tukar',
		chapter: 1,
		kicker: 'Manajemen risiko',
		minutes: 6,
		source: 'Kelompok 1 — Pasar Keuangan',
		intro:
			'Setiap imbal hasil di pasar keuangan selalu berpasangan dengan risiko. Mengenali jenis risikonya adalah langkah pertama sebelum memilih instrumen. Lima jenis yang perlu dibedakan: risiko pasar, kredit, likuiditas, operasional, dan nilai tukar.',
		sections: [
			{
				id: 'jenis',
				h: 'Lima jenis risiko',
				blocks: [
					{
						t: 'table',
						head: ['Risiko', 'Penyebab', 'Contoh'],
						rows: [
							[
								'Risiko pasar (market risk)',
								'Perubahan kondisi pasar secara keseluruhan akibat faktor makroekonomi',
								'Harga saham turun serentak saat sentimen pasar memburuk',
							],
							[
								'Risiko kredit (credit risk)',
								'Peminjam gagal memenuhi kewajiban sesuai perjanjian',
								'Debitur tidak mampu membayar cicilan sehingga terjadi kredit macet',
							],
							[
								'Risiko likuiditas (liquidity risk)',
								'Tidak cukup dana tunai untuk kewajiban jangka pendek, atau aset sulit dijual',
								'Perusahaan gagal membayar gaji dan biaya operasional tepat waktu',
							],
							[
								'Risiko operasional (operational risk)',
								'Kegagalan proses internal, kesalahan manusia, sistem tidak memadai, atau kejadian eksternal',
								'Sistem teknologi terganggu atau terjadi penipuan',
							],
							[
								'Risiko nilai tukar (FX risk)',
								'Perubahan kurs mata uang asing',
								'Utang dalam dolar membengkak saat rupiah melemah',
							],
						],
					},
				],
			},
			{
				id: 'pasar',
				h: 'Risiko pasar: yang tidak bisa didiversifikasi sepenuhnya',
				blocks: [
					{
						t: 'p',
						text: 'Risiko pasar muncul dari perubahan kondisi makro: suku bunga, inflasi, pertumbuhan ekonomi, hingga sentimen investor. Risiko ini sulit dikendalikan perusahaan karena sumbernya berada di luar kendali mereka.',
					},
					{
						t: 'p',
						text: 'Risiko pasar dibedakan dari risiko spesifik. Risiko spesifik hanya menimpa satu perusahaan atau satu sektor, dan bisa dikurangi dengan diversifikasi. Risiko pasar menimpa hampir semua aset, sehingga diversifikasi hanya mengurangi, bukan menghilangkan.',
					},
				],
			},
			{
				id: 'kredit-likuiditas',
				h: 'Risiko kredit dan likuiditas',
				blocks: [
					{
						t: 'p',
						text: 'Risiko kredit paling terasa di perbankan dan lembaga pembiayaan. Ketika debitur gagal bayar, bank menanggung kerugian dan harus menaikkan cadangan. Kalau kredit macet menumpuk, kemampuan bank menyalurkan kredit ikut menurun.',
					},
					{
						t: 'p',
						text: 'Risiko likuiditas punya dua wajah. Pertama, likuiditas pendanaan: perusahaan tidak punya cukup kas untuk membayar kewajiban jatuh tempo. Kedua, likuiditas pasar: asetnya ada, tetapi sulit dijual tanpa menurunkan harga secara signifikan.',
					},
					{
						t: 'callout',
						title: 'Aset banyak bukan berarti aman',
						text: 'Perusahaan bisa terlihat kaya dari sisi aset, tetapi tetap gagal membayar gaji kalau asetnya tidak likuid. Arus kas, bukan nilai aset, yang menentukan kemampuan membayar kewajiban jangka pendek.',
						tone: 'warn',
					},
				],
			},
			{
				id: 'operasional-fx',
				h: 'Risiko operasional dan nilai tukar',
				blocks: [
					{
						t: 'p',
						text: 'Risiko operasional bukan murni risiko keuangan, tetapi dampaknya bisa langsung memengaruhi kondisi keuangan. Contohnya kegagalan sistem pembayaran, kesalahan pencatatan, penipuan internal, atau bencana yang menghentikan operasi.',
					},
					{
						t: 'p',
						text: 'Risiko nilai tukar relevan bagi siapa pun yang punya eksposur mata uang asing: importir, eksportir, investor asing, sampai perusahaan yang berutang dalam dolar. Pelemahan rupiah menaikkan nilai utang dalam rupiah, meskipun jumlah utang dalam dolar tidak berubah.',
					},
					{
						t: 'table',
						head: ['Pihak', 'Eksposur', 'Dampak saat rupiah melemah'],
						rows: [
							['Importir', 'Harus membayar barang dalam valas', 'Biaya impor naik'],
							['Eksportir', 'Menerima pembayaran dalam valas', 'Pendapatan rupiah naik'],
							['Perusahaan berutang valas', 'Kewajiban dalam valas', 'Beban utang rupiah naik'],
							['Investor asing', 'Aset rupiah', 'Nilai aset dalam valas turun'],
						],
					},
				],
			},
		],
		keyPoints: [
			'Risiko pasar berasal dari perubahan kondisi makro dan sulit dikendalikan.',
			'Risiko kredit muncul saat peminjam gagal memenuhi kewajibannya.',
			'Risiko likuiditas mencakup kesulitan dana tunai dan kesulitan menjual aset.',
			'Risiko operasional berasal dari proses internal, manusia, sistem, atau kejadian eksternal.',
			'Risiko nilai tukar muncul saat ada eksposur mata uang asing.',
		],
		terms: [
			{ term: 'Risiko sistematis', def: 'Risiko yang menimpa seluruh pasar dan tidak bisa dihilangkan lewat diversifikasi.' },
			{ term: 'Risiko spesifik', def: 'Risiko yang hanya menimpa perusahaan atau sektor tertentu dan bisa dikurangi dengan diversifikasi.' },
			{ term: 'Kredit macet', def: 'Kredit yang pembayarannya tidak lancar atau gagal bayar sesuai perjanjian.' },
			{ term: 'Eksposur', def: 'Besarnya nilai atau posisi yang terpapar pada suatu risiko.' },
		],
	},
	{
		n: 5,
		slug: 'mitigasi-risiko-keuangan',
		title: 'Mitigasi Risiko Keuangan',
		desc: 'Tujuh cara mengurangi kemungkinan kerugian dan menjaga stabilitas keuangan',
		chapter: 1,
		kicker: 'Manajemen risiko',
		minutes: 6,
		source: 'Kelompok 1 — Pasar Keuangan',
		intro:
			'Mitigasi risiko bukan menghilangkan risiko, melainkan mengelolanya agar kerugian tetap dalam batas yang bisa ditanggung. Ada tujuh cara yang dibahas: diversifikasi, hedging, stop-loss, due diligence, manajemen likuiditas, pengalihan risiko, dan literasi keuangan.',
		sections: [
			{
				id: 'tujuh-cara',
				h: 'Tujuh cara mitigasi',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Diversifikasi',
								text: 'Menyebarkan investasi ke berbagai instrumen, sektor, atau wilayah agar kerugian di satu posisi tidak menghabiskan seluruh portofolio.',
							},
							{
								title: 'Lindung nilai (hedging)',
								text: 'Mengantisipasi fluktuasi harga, nilai tukar, atau suku bunga memakai instrumen keuangan seperti forward, futures, atau options.',
							},
							{
								title: 'Stop-loss',
								text: 'Menetapkan batas kerugian maksimum agar posisi yang merugi dipotong sebelum kerugian membesar.',
							},
							{
								title: 'Analisis risiko (due diligence)',
								text: 'Mengevaluasi penerbit, prospek, dan risiko secara menyeluruh sebelum memutuskan investasi atau memberi kredit.',
							},
							{
								title: 'Manajemen likuiditas',
								text: 'Menyediakan cadangan dana yang cukup untuk memenuhi kewajiban jangka pendek.',
							},
							{
								title: 'Pengalihan risiko',
								text: 'Memindahkan sebagian risiko ke pihak ketiga melalui asuransi, penjaminan, atau kontrak derivatif.',
							},
							{
								title: 'Literasi keuangan',
								text: 'Meningkatkan pemahaman atas produk dan risikonya sebelum bertransaksi — pertahanan paling murah dan paling sering dilupakan.',
							},
						],
					},
				],
			},
			{
				id: 'kapan',
				h: 'Kapan masing-masing dipakai',
				blocks: [
					{
						t: 'table',
						head: ['Tahap', 'Alat yang relevan', 'Tujuan'],
						rows: [
							['Sebelum transaksi', 'Due diligence, literasi keuangan', 'Memastikan produk dan penerbitnya dipahami'],
							['Saat menyusun portofolio', 'Diversifikasi', 'Menyebar risiko antar instrumen'],
							['Saat risiko berubah', 'Hedging, pengalihan risiko', 'Mengunci harga atau memindahkan risiko'],
							['Saat posisi merugi', 'Stop-loss', 'Membatasi kerugian agar tidak membesar'],
							['Dalam operasi harian', 'Manajemen likuiditas', 'Menjaga kemampuan membayar kewajiban'],
						],
					},
				],
			},
			{
				id: 'diversifikasi',
				h: 'Diversifikasi: konsep yang sering disalahpahami',
				blocks: [
					{
						t: 'p',
						text: 'Membeli lima saham dari satu sektor bukan diversifikasi. Diversifikasi sejati menyebar ke aset yang pergerakannya tidak selalu searah: saham, obligasi, deposito, dan instrumen pasar uang.',
					},
					{
						t: 'p',
						text: 'Namun diversifikasi punya batas. Saat terjadi krisis pasar, hampir semua aset berisiko turun bersamaan. Inilah risiko sistematis yang tidak bisa dihilangkan hanya dengan menambah jumlah instrumen.',
					},
					{
						t: 'callout',
						title: 'Urutan prioritas yang masuk akal',
						text: 'Untuk investor individu: pahami produknya, siapkan dana darurat, baru diversifikasi. Untuk perusahaan: kelola likuiditas, lakukan due diligence mitra, lalu lindungi eksposur valas.',
						tone: 'tip',
					},
				],
			},
			{
				id: 'hedging',
				h: 'Hedging dan pengalihan risiko',
				blocks: [
					{
						t: 'p',
						text: 'Hedging memakai instrumen untuk mengunci harga atau kurs di masa depan. Contoh: importir yang harus membayar USD tiga bulan lagi membeli kontrak forward agar tidak terkejut jika rupiah melemah.',
					},
					{
						t: 'ul',
						items: [
							'Hedging mengunci nilai, bukan menambah keuntungan. Kalau kurs justru membaik, keuntungan itu tidak dinikmati.',
							'Hedging punya biaya: premi opsi, spread, atau biaya transaksi.',
							'Hedging tanpa eksposur yang jelas berubah menjadi spekulasi.',
						],
					},
					{
						t: 'p',
						text: 'Pengalihan risiko berbeda: risiko dipindahkan ke pihak lain yang bersedia menanggungnya, misalnya perusahaan asuransi atau lembaga penjamin. Yang dialihkan adalah risiko, bukan tanggung jawab utama.',
					},
				],
			},
		],
		keyPoints: [
			'Tujuh cara mitigasi: diversifikasi, hedging, stop-loss, due diligence, manajemen likuiditas, pengalihan risiko, literasi keuangan.',
			'Mitigasi bertujuan membatasi kerugian, bukan menghilangkan risiko sepenuhnya.',
			'Diversifikasi tidak menghapus risiko sistematis.',
			'Hedging mengunci nilai dengan biaya tertentu dan harus didasari eksposur nyata.',
			'Likuiditas dan literasi adalah pertahanan dasar yang sering diabaikan.',
		],
		terms: [
			{ term: 'Hedging', def: 'Tindakan melindungi nilai posisi dari pergerakan harga atau kurs yang merugikan.' },
			{ term: 'Stop-loss', def: 'Batas kerugian yang ditetapkan sebelum posisi dibuka, dipakai untuk memotong kerugian.' },
			{ term: 'Due diligence', def: 'Pemeriksaan menyeluruh sebelum mengambil keputusan investasi atau kredit.' },
			{ term: 'Dana darurat', def: 'Cadangan kas untuk kebutuhan tak terduga, biasanya 3–6 bulan biaya hidup.' },
		],
	},
	{
		n: 6,
		slug: 'regulasi-pengawasan-indonesia',
		title: 'Regulasi & Pengawasan di Indonesia',
		desc: 'OJK, BI, LPS, Kemenkeu, KSSK, dan landasan hukumnya',
		chapter: 1,
		kicker: 'Regulasi',
		minutes: 6,
		source: 'Kelompok 1 — Pasar Keuangan',
		intro:
			'Regulasi dan pengawasan sektor keuangan bertujuan menjaga stabilitas sistem keuangan, melindungi konsumen, dan memastikan kegiatan keuangan berjalan sesuai ketentuan. Di Indonesia ada lima lembaga yang berbagi tugas, dengan tiga undang-undang sebagai landasan utama.',
		sections: [
			{
				id: 'lembaga',
				h: 'Lima lembaga pengawas',
				blocks: [
					{
						t: 'table',
						head: ['Lembaga', 'Tugas utama'],
						rows: [
							['Otoritas Jasa Keuangan (OJK)', 'Mengatur dan mengawasi sektor jasa keuangan serta melindungi konsumen'],
							['Bank Indonesia (BI)', 'Menjaga stabilitas moneter, nilai rupiah, dan sistem pembayaran'],
							['Lembaga Penjamin Simpanan (LPS)', 'Menjamin simpanan nasabah bank dan menangani bank bermasalah'],
							['Kementerian Keuangan (Kemenkeu)', 'Mengelola kebijakan fiskal, APBN, dan Surat Berharga Negara'],
							['Komite Stabilitas Sistem Keuangan (KSSK)', 'Mengoordinasikan kebijakan antarlembaga untuk menjaga stabilitas sistem keuangan'],
						],
					},
					{
						t: 'callout',
						title: 'Pembagian peran singkat',
						text: 'OJK mengawasi pelaku dan produk. BI menjaga uang dan pembayaran. LPS menjaga simpanan. Kemenkeu menjaga anggaran negara. KSSK menyatukan semuanya saat ada tekanan sistemik.',
						tone: 'note',
					},
				],
			},
			{
				id: 'landasan',
				h: 'Landasan hukum',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'UU 4/2023',
								title: 'P2SK',
								text: 'Pengembangan dan Penguatan Sektor Keuangan. Menjadi payung pembaruan sektor keuangan, termasuk penanganan bank bermasalah dan inovasi keuangan.',
							},
							{
								label: 'UU 21/2011',
								title: 'Otoritas Jasa Keuangan',
								text: 'Mengatur pembentukan dan kewenangan OJK dalam mengatur serta mengawasi sektor jasa keuangan.',
							},
							{
								label: 'UU 9/2016',
								title: 'Pencegahan Krisis',
								text: 'Mengatur pencegahan dan penanganan krisis sistem keuangan, termasuk peran KSSK.',
							},
						],
					},
				],
			},
			{
				id: 'kenapa',
				h: 'Mengapa pengawasan harus berlapis',
				blocks: [
					{
						t: 'p',
						text: 'Sistem keuangan saling terhubung. Kegagalan satu bank bisa menular ke bank lain lewat pasar antarbank, dan kegagalan satu emiten bisa mengguncang kepercayaan investor. Pengawasan berlapis memastikan tidak ada celah yang dibiarkan.',
					},
					{
						t: 'ul',
						items: [
							'**Melindungi konsumen.** Produk keuangan tidak selalu mudah dipahami, sehingga penjual wajib menjelaskan risiko dan tidak boleh menyesatkan.',
							'**Menjaga stabilitas.** Pengawas memantau permodalan, likuiditas, dan risiko sistemik.',
							'**Mencegah pencucian uang dan kejahatan keuangan.** Transaksi keuangan wajib mengikuti prinsip mengenali pengguna jasa.',
							'**Menjaga kepercayaan pasar.** Tanpa kepercayaan, orang tidak akan menempatkan dananya di sistem keuangan.',
						],
					},
				],
			},
			{
				id: 'implikasi',
				h: 'Apa artinya bagi investor',
				blocks: [
					{
						t: 'ol',
						items: [
							'Pastikan produk dan penjualnya berizin OJK. Cek lewat kontak resmi OJK, bukan tautan yang dikirim orang.',
							'Pahami skema penjaminan. Simpanan di bank dijamin LPS sampai batas tertentu, tetapi produk investasi tidak dijamin.',
							'Waspadai imbal hasil yang jauh di atas pasar tanpa penjelasan risiko yang masuk akal.',
							'Simpan dokumen transaksi dan pahami mekanisme pengaduan konsumen.',
						],
					},
					{
						t: 'callout',
						title: 'Batas penjaminan',
						text: 'LPS menjamin simpanan di bank, bukan seluruh produk keuangan. Reksa dana, saham, dan obligasi tidak dijamin LPS — nilainya bisa turun.',
						tone: 'warn',
					},
				],
			},
		],
		keyPoints: [
			'Lima lembaga: OJK, BI, LPS, Kemenkeu, dan KSSK.',
			'OJK mengatur dan mengawasi sektor jasa keuangan serta melindungi konsumen.',
			'BI menjaga stabilitas moneter, rupiah, dan sistem pembayaran.',
			'LPS menjamin simpanan bank, bukan produk investasi.',
			'Landasan utama: UU 4/2023 (P2SK), UU 21/2011 (OJK), UU 9/2016 (pencegahan krisis).',
		],
		terms: [
			{ term: 'OJK', def: 'Otoritas Jasa Keuangan — lembaga yang mengatur dan mengawasi sektor jasa keuangan Indonesia.' },
			{ term: 'LPS', def: 'Lembaga Penjamin Simpanan — menjamin simpanan nasabah bank sampai batas tertentu.' },
			{ term: 'KSSK', def: 'Komite Stabilitas Sistem Keuangan — forum koordinasi antarlembaga untuk stabilitas sistem keuangan.' },
			{ term: 'P2SK', def: 'Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU 4/2023).' },
		],
	},
];
