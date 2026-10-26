import type { Topic } from '../types';

export const ch2: Topic[] = [
	{
		n: 7,
		slug: 'pengertian-karakteristik-pasar-uang',
		title: 'Pengertian & Karakteristik Pasar Uang',
		desc: 'Pasar berjangka pendek, likuid, dan sebagian besar tanpa lokasi fisik',
		chapter: 2,
		kicker: 'Pasar uang',
		minutes: 5,
		source: 'Kelompok 2 — Pasar Uang',
		intro:
			'Pasar uang adalah bagian dari sistem keuangan tempat diperdagangkan aset atau instrumen keuangan berjangka pendek — mulai dari satu hari sampai maksimal satu tahun. Pertemuan antara pemilik dana dan pencari dana umumnya bersifat abstrak, tanpa lokasi fisik terpusat.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi',
				blocks: [
					{
						t: 'p',
						text: 'Pasar uang adalah tempat perdagangan instrumen keuangan berjangka pendek, mulai dari satu hari hingga maksimal satu tahun. Pihak yang membutuhkan dana memakainya untuk memenuhi kebutuhan likuiditas; pihak yang memiliki dana memakainya untuk memperoleh keuntungan dalam waktu singkat.',
					},
					{
						t: 'p',
						text: 'Pertemuan antara kedua pihak umumnya bersifat abstrak atau over-the-counter, tanpa lokasi fisik terpusat. Transaksi terjadi lewat jaringan dealer, telepon, dan sistem elektronik antar bank.',
					},
					{
						t: 'callout',
						title: 'Bukan tempat, tapi jaringan',
						text: 'Kalau pasar modal punya bursa dengan jam dagang yang jelas, pasar uang lebih mirip jaringan antar lembaga. Karena itu harga di pasar uang lebih banyak ditentukan lewat kesepakatan bilateral.',
						tone: 'note',
					},
				],
			},
			{
				id: 'karakteristik',
				h: 'Enam karakteristik yang membedakannya',
				blocks: [
					{
						t: 'table',
						head: ['Karakteristik', 'Penjelasan'],
						rows: [
							['Jangka waktu pendek', 'Instrumen berjangka maksimal satu tahun, banyak yang hanya hitungan hari atau bulan.'],
							['Menekankan likuiditas', 'Kemudahan memperoleh atau mencairkan dana menjadi pertimbangan utama.'],
							['Nominal besar', 'Transaksi umumnya dilakukan dalam jumlah dana relatif besar, khas transaksi antarbank.'],
							['Instrumen jangka pendek', 'Yang diperdagangkan adalah surat utang atau surat berharga berjangka pendek.'],
							['Keuntungan dan risiko relatif rendah', 'Imbal hasil lebih rendah dibanding pasar modal, tetapi fluktuasinya juga lebih kecil.'],
							['Peserta terbatas pada lembaga', 'Bank, perusahaan, pemerintah, dan lembaga keuangan mendominasi; individu biasanya masuk lewat reksa dana pasar uang.'],
						],
					},
				],
			},
			{
				id: 'banding',
				h: 'Posisinya di antara instrumen lain',
				blocks: [
					{
						t: 'p',
						text: 'Pasar uang berada di ujung paling aman dari spektrum investasi jangka pendek. Di atasnya ada obligasi jangka menengah-panjang, lalu saham. Semakin ke kanan, potensi imbal hasil naik, tetapi fluktuasi dan risiko kerugian juga naik.',
					},
					{
						t: 'table',
						head: ['Aspek', 'Pasar uang', 'Pasar modal'],
						rows: [
							['Tenor', '≤ 1 tahun', '> 1 tahun'],
							['Tujuan investor', 'Menjaga kekayaan dan likuiditas', 'Menumbuhkan kekayaan'],
							['Likuiditas', 'Tinggi, 1–2 hari kerja untuk produk tertentu', 'Tinggi di bursa, tetapi harga berfluktuasi'],
							['Risiko', 'Rendah', 'Sedang sampai tinggi'],
							['Otoritas', 'Bank Indonesia', 'Kemenkeu, lalu OJK sejak 2012'],
						],
					},
				],
			},
			{
				id: 'siapa',
				h: 'Siapa yang memakai pasar uang',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								title: 'Bank',
								text: 'Mengelola likuiditas harian. Bank yang kekurangan dana meminjam dari bank yang kelebihan dana lewat call money atau repo.',
							},
							{
								title: 'Perusahaan',
								text: 'Menutup kebutuhan modal kerja jangka pendek dengan commercial paper, atau menempatkan kas sementara di deposito.',
							},
							{
								title: 'Pemerintah',
								text: 'Menerbitkan SPN untuk menutup kebutuhan kas jangka pendek dan mengelola likuiditas anggaran.',
							},
							{
								title: 'Investor',
								text: 'Menempatkan dana sementara agar tetap produktif, biasanya lewat reksa dana pasar uang atau deposito.',
							},
						],
					},
				],
			},
		],
		keyPoints: [
			'Pasar uang memperdagangkan instrumen berjangka satu hari sampai maksimal satu tahun.',
			'Transaksinya bersifat abstrak atau over-the-counter, tanpa lokasi fisik terpusat.',
			'Karakteristik utama: tenor pendek, likuid, nominal besar, risiko dan return relatif rendah.',
			'Pesertanya didominasi bank, perusahaan, pemerintah, dan lembaga keuangan.',
			'Pasar uang dipakai untuk mengelola likuiditas, bukan untuk menumbuhkan kekayaan jangka panjang.',
		],
		terms: [
			{ term: 'Pasar uang', def: 'Pasar tempat diperdagangkan instrumen keuangan berjangka pendek (maksimal satu tahun).' },
			{ term: 'Likuiditas', def: 'Kemudahan suatu aset diubah menjadi uang tunai tanpa penurunan harga yang signifikan.' },
			{ term: 'Call money', def: 'Pinjaman antarbank berjangka sangat pendek, umumnya satu hari.' },
		],
	},
	{
		n: 8,
		slug: 'fungsi-manfaat-peserta-pasar-uang',
		title: 'Fungsi, Manfaat & Peserta Pasar Uang',
		desc: 'Siapa yang terlibat dan apa yang mereka dapatkan',
		chapter: 2,
		kicker: 'Pasar uang',
		minutes: 6,
		source: 'Kelompok 2 — Pasar Uang',
		intro:
			'Pasar uang punya empat fungsi utama dan empat manfaat yang terasa langsung. Di baliknya ada delapan kelompok peserta yang perannya berbeda-beda — dari bank sentral sampai investor perorangan.',
		sections: [
			{
				id: 'fungsi',
				h: 'Empat fungsi pasar uang',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Menyediakan sumber dana jangka pendek.** Perusahaan dan bank bisa memperoleh dana tanpa harus menjual aset jangka panjang.',
							'**Menyalurkan dana dari pihak yang kelebihan ke pihak yang membutuhkan.** Fungsi alokasi dalam bentuk paling sederhana.',
							'**Membantu menjaga dan mengatur likuiditas lembaga keuangan.** Bank bisa menyeimbangkan posisi likuiditas harian.',
							'**Mendukung pelaksanaan kebijakan moneter.** Bank sentral memakai instrumen pasar uang untuk memengaruhi jumlah uang beredar dan suku bunga.',
						],
					},
					{
						t: 'callout',
						title: 'Fungsi yang paling terasa',
						text: 'Bagi kebanyakan orang, fungsi pasar uang terasa lewat bunga deposito dan imbal hasil reksa dana pasar uang. Bagi bank, fungsi utamanya adalah menjaga likuiditas harian.',
						tone: 'note',
					},
				],
			},
			{
				id: 'manfaat',
				h: 'Manfaat bagi tiap pihak',
				blocks: [
					{
						t: 'table',
						head: ['Pihak', 'Manfaat'],
						rows: [
							['Perusahaan', 'Memenuhi kebutuhan modal kerja tanpa komitmen jangka panjang'],
							['Bank', 'Memenuhi kebutuhan likuiditas harian dan menempatkan dana sementara'],
							['Pemilik dana', 'Memperoleh keuntungan dari dana yang belum terpakai'],
							['Sistem keuangan', 'Membantu menjaga kestabilan sistem keuangan secara keseluruhan'],
						],
					},
					{
						t: 'p',
						text: 'Manfaat-manfaat ini saling terkait. Ketika bank mudah memperoleh likuiditas, penyaluran kredit tidak terganggu. Ketika perusahaan mudah memperoleh dana jangka pendek, kegiatan operasional tetap berjalan meski kas belum terkumpul.',
					},
				],
			},
			{
				id: 'peserta',
				h: 'Delapan peserta pasar uang',
				blocks: [
					{
						t: 'cards',
						items: [
							{ label: '01', title: 'Bank umum', text: 'Peserta terbesar. Menyalurkan dan mencari likuiditas, menerbitkan sertifikat deposito, dan menjadi dealer.' },
							{ label: '02', title: 'Bank Indonesia', text: 'Bank sentral yang mengelola kebijakan moneter dan menerbitkan instrumen seperti SBI.' },
							{ label: '03', title: 'Pemerintah', text: 'Menerbitkan surat utang jangka pendek dan menempatkan kas negara.' },
							{ label: '04', title: 'Perusahaan', text: 'Mencari dana modal kerja lewat commercial paper atau menempatkan kas berlebih.' },
							{ label: '05', title: 'Lembaga keuangan', text: 'Asuransi, dana pensiun, dan lembaga pembiayaan yang mengelola likuiditas.' },
							{ label: '06', title: 'Perusahaan sekuritas', text: 'Menjadi perantara, dealer, atau penjamin emisi instrumen pasar uang.' },
							{ label: '07', title: 'Investor atau masyarakat', text: 'Umumnya masuk lewat reksa dana pasar uang, deposito, atau produk bank.' },
							{ label: '08', title: 'Lembaga keuangan internasional', text: 'Terlibat dalam transaksi tertentu, termasuk penerbitan surat berharga valas.' },
						],
					},
				],
			},
			{
				id: 'pola',
				h: 'Pola hubungan antarpeserta',
				blocks: [
					{
						t: 'p',
						text: 'Dalam praktik, peserta pasar uang terbagi menjadi tiga lapis. Lapis pertama adalah bank sentral sebagai pengatur likuiditas. Lapis kedua adalah bank dan dealer sebagai inti transaksi. Lapis ketiga adalah perusahaan dan investor sebagai pengguna akhir.',
					},
					{
						t: 'ul',
						items: [
							'Bank sentral ↔ bank: operasi moneter, repo, dan fasilitas likuiditas.',
							'Bank ↔ bank: pinjaman antarbank dan call money.',
							'Bank ↔ perusahaan: kredit jangka pendek, commercial paper, dan sertifikat deposito.',
							'Bank/dealer ↔ investor: penjualan instrumen pasar uang.',
						],
					},
				],
			},
		],
		keyPoints: [
			'Fungsi pasar uang: sumber dana jangka pendek, alokasi dana, pengelolaan likuiditas, dan dukungan kebijakan moneter.',
			'Manfaatnya terasa bagi perusahaan, bank, pemilik dana, dan stabilitas sistem keuangan.',
			'Peserta utama: bank umum, BI, pemerintah, perusahaan, lembaga keuangan, sekuritas, investor, dan lembaga internasional.',
			'Individu umumnya masuk lewat produk turunan seperti reksa dana pasar uang dan deposito.',
		],
		terms: [
			{ term: 'Dealer', def: 'Pihak yang menjadi perantara dan penentu harga dalam transaksi instrumen keuangan.' },
			{ term: 'Operasi moneter', def: 'Kegiatan bank sentral untuk mengelola likuiditas dan suku bunga di pasar uang.' },
			{ term: 'Reksa dana pasar uang', def: 'Reksa dana yang menempatkan dananya pada instrumen pasar uang dan surat utang jangka pendek.' },
		],
	},
	{
		n: 9,
		slug: 'sumber-dana-mekanisme-pasar-uang',
		title: 'Sumber Dana & Mekanisme Pasar Uang',
		desc: 'Dari mana dananya berasal dan bagaimana aliran itu terjadi',
		chapter: 2,
		kicker: 'Pasar uang',
		minutes: 5,
		source: 'Kelompok 2 — Pasar Uang',
		intro:
			'Dana di pasar uang tidak muncul dari satu sumber. Ada dana antarbank, simpanan masyarakat, surat berharga jangka pendek, dana pemerintah, hingga transaksi repo. Mekanismenya sederhana: dana mengalir dari yang berlebih ke yang kekurangan, lalu kembali dengan imbal hasil.',
		sections: [
			{
				id: 'sumber',
				h: 'Tujuh sumber dana',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Dana antarbank.** Bank yang kelebihan likuiditas meminjamkan dananya ke bank yang kekurangan.',
							'**Simpanan masyarakat.** Dana pihak ketiga yang dihimpun bank menjadi sumber utama penyaluran.',
							'**Surat berharga jangka pendek.** Penerbitan commercial paper, SBI, dan sejenisnya.',
							'**Dana pemerintah.** Kas negara yang belum terpakai dan penerbitan surat utang jangka pendek.',
							'**Dana lembaga keuangan.** Asuransi, dana pensiun, dan lembaga pembiayaan.',
							'**Transaksi repo.** Efek dijual dengan janji dibeli kembali, sehingga dana jangka pendek berpindah tangan.',
							'**Pinjaman atau pendanaan dari pihak lain.** Termasuk fasilitas dari lembaga keuangan internasional.',
						],
					},
				],
			},
			{
				id: 'mekanisme',
				h: 'Mekanisme sederhana',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Pihak kelebihan dana menempatkan dana',
								text: 'Bank B punya likuiditas berlebih dan ingin memperoleh imbal hasil untuk waktu singkat.',
							},
							{
								title: 'Dana masuk ke pasar uang',
								text: 'Bank B meminjamkan dana lewat call money, membeli SBI, atau melakukan repo.',
							},
							{
								title: 'Pihak kekurangan dana menerima dana',
								text: 'Bank A memakai dana untuk memenuhi kewajiban jangka pendek atau kebutuhan likuiditas harian.',
							},
							{
								title: 'Dana kembali dengan imbal hasil',
								text: 'Setelah jangka waktu berakhir, Bank A mengembalikan pokok beserta bunga atau imbal hasil.',
							},
						],
					},
					{
						t: 'callout',
						title: 'Contoh dari materi',
						text: 'Bank A mengalami kekurangan likuiditas sementara, sedangkan Bank B memiliki kelebihan dana. Bank A memperoleh dana dari Bank B melalui transaksi pasar uang jangka pendek. Setelah jangka waktu berakhir, Bank A mengembalikan dana beserta imbal hasilnya.',
						tone: 'note',
					},
				],
			},
			{
				id: 'harga',
				h: 'Bagaimana harga terbentuk',
				blocks: [
					{
						t: 'p',
						text: 'Harga di pasar uang tercermin pada suku bunga. Suku bunga antarbank menjadi acuan penting karena mencerminkan biaya likuiditas bagi bank. Ketika likuiditas ketat, suku bunga naik; ketika likuiditas melimpah, suku bunga turun.',
					},
					{
						t: 'table',
						head: ['Kondisi likuiditas', 'Suku bunga', 'Perilaku peserta'],
						rows: [
							['Ketat', 'Naik', 'Bank aktif mencari dana, menjual aset likuid'],
							['Longgar', 'Turun', 'Bank menempatkan dana, mencari imbal hasil'],
							['Normal', 'Stabil', 'Transaksi berjalan rutin sesuai kebutuhan'],
						],
					},
					{
						t: 'p',
						text: 'Bank sentral memakai operasi moneter untuk memengaruhi kondisi ini. Dengan menambah atau menyerap likuiditas, bank sentral dapat mengarahkan suku bunga mendekati target kebijakannya.',
					},
				],
			},
			{
				id: 'risiko',
				h: 'Risiko yang tetap ada',
				blocks: [
					{
						t: 'ul',
						items: [
							'**Risiko kredit.** Pihak lawan transaksi gagal mengembalikan dana saat jatuh tempo.',
							'**Risiko likuiditas.** Dana sudah dipinjamkan, tetapi kebutuhan kas mendadak muncul.',
							'**Risiko suku bunga.** Perubahan suku bunga membuat imbal hasil tidak lagi kompetitif.',
							'**Risiko operasional.** Kesalahan penyelesaian transaksi atau kegagalan sistem.',
						],
					},
					{
						t: 'p',
						text: 'Karena tenor pendek, risiko-risiko ini umumnya lebih kecil dibanding pasar modal. Namun bukan berarti nol — terutama saat kondisi pasar sedang stres.',
					},
				],
			},
		],
		keyPoints: [
			'Sumber dana pasar uang: antarbank, simpanan masyarakat, surat berharga jangka pendek, pemerintah, lembaga keuangan, repo, dan pinjaman pihak lain.',
			'Mekanisme: dana mengalir dari pihak berlebih ke pihak berkekurangan, lalu kembali dengan imbal hasil.',
			'Suku bunga pasar uang mencerminkan kondisi likuiditas.',
			'Bank sentral memengaruhi likuiditas lewat operasi moneter.',
			'Risiko tetap ada meski tenor pendek: kredit, likuiditas, suku bunga, dan operasional.',
		],
		terms: [
			{ term: 'Dana pihak ketiga', def: 'Dana masyarakat yang dihimpun bank dalam bentuk giro, tabungan, dan deposito.' },
			{ term: 'Operasi pasar terbuka', def: 'Kegiatan bank sentral membeli atau menjual surat berharga untuk mengatur likuiditas.' },
			{ term: 'Suku bunga antarbank', def: 'Suku bunga yang berlaku pada pinjaman antara bank yang satu dan bank lainnya.' },
		],
	},
	{
		n: 10,
		slug: 'peta-instrumen-pasar-uang',
		title: 'Peta Instrumen Pasar Uang',
		desc: 'Sembilan instrumen dan siapa penerbitnya',
		chapter: 2,
		kicker: 'Pasar uang',
		minutes: 6,
		source: 'Kelompok 2 — Pasar Uang',
		intro:
			'Instrumen pasar uang bisa dipetakan berdasarkan penerbitnya: bank sentral, pemerintah, korporasi, dan antarbank. Peta ini memudahkan mengingat mana yang risk-free, mana yang korporasi, dan mana yang hanya tersedia bagi lembaga.',
		sections: [
			{
				id: 'daftar',
				h: 'Sembilan instrumen dasar',
				blocks: [
					{
						t: 'table',
						head: ['Instrumen', 'Penerbit', 'Keterangan singkat'],
						rows: [
							['Sertifikat Bank Indonesia (SBI)', 'Bank Indonesia', 'Surat berharga untuk mengatur jumlah uang beredar'],
							['Surat Berharga Negara (SBN) jangka pendek', 'Pemerintah', 'Surat utang negara berjangka pendek'],
							['Commercial Paper (CP)', 'Perusahaan', 'Surat utang jangka pendek untuk modal kerja'],
							['Sertifikat Deposito', 'Bank', 'Simpanan berjangka yang dapat diperjualbelikan'],
							['Call Money', 'Antarbank', 'Pinjaman harian antar bank untuk likuiditas'],
							['Repo', 'Bank/lembaga keuangan', 'Jual efek dengan janji beli kembali'],
							['Surat Perbendaharaan Negara (SPN)', 'Pemerintah', 'SUN jangka pendek, setara T-Bills'],
							['Promissory Note', 'Perusahaan/lembaga', 'Janji bayar tanpa syarat pada tanggal tertentu'],
							['Treasury Bills (T-Bills)', 'Pemerintah', 'Surat utang jangka pendek, dijual dengan diskonto'],
						],
					},
				],
			},
			{
				id: 'kelompok',
				h: 'Dikelompokkan berdasarkan penerbit',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'Bank sentral',
								title: 'SBI dan instrumen moneter',
								text: 'Diterbitkan Bank Indonesia untuk mengatur jumlah uang beredar. Risikonya sangat rendah karena diterbitkan bank sentral.',
							},
							{
								label: 'Pemerintah',
								title: 'SPN, SBN jangka pendek, T-Bills',
								text: 'Diterbitkan untuk menutup kebutuhan pendanaan jangka pendek negara. Dianggap bebas risiko gagal bayar dalam konteks domestik.',
							},
							{
								label: 'Korporasi',
								title: 'Commercial paper dan promes',
								text: 'Diterbitkan perusahaan untuk modal kerja. Imbal hasil lebih tinggi, tetapi risikonya bergantung pada kredibilitas penerbit.',
							},
							{
								label: 'Antarbank',
								title: 'Call money dan repo',
								text: 'Dipakai bank untuk mengelola likuiditas harian. Tenornya bisa hanya satu hari, dengan jaminan efek pada repo.',
							},
						],
					},
				],
			},
			{
				id: 'perkembangan',
				h: 'Perkembangan instrumen di Indonesia',
				blocks: [
					{
						t: 'p',
						text: 'Daftar di materi kuliah adalah peta dasar. Dalam praktik, Bank Indonesia terus mengembangkan instrumen untuk mengelola likuiditas dan mendukung pasar keuangan syariah. Contoh yang lazim dibahas: SukBI (sukuk Bank Indonesia), FASBIS (fasilitas simpanan syariah), dan SRBI (Sekuritas Rupiah Bank Indonesia).',
					},
					{
						t: 'callout',
						title: 'Cara membaca daftar instrumen',
						text: 'Jangan menghafal nama saja. Tanyakan tiga hal: siapa penerbitnya, berapa tenornya, dan bagaimana imbal hasilnya dibayarkan (bunga, diskonto, atau bagi hasil).',
						tone: 'tip',
					},
				],
			},
			{
				id: 'memilih',
				h: 'Memilih instrumen: tiga pertanyaan',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Kapan dana dibutuhkan?** Semakin cepat, semakin pendek tenor yang dipilih.',
							'**Seberapa besar risiko yang bisa ditanggung?** Instrumen pemerintah berbeda risikonya dengan commercial paper korporasi.',
							'**Apakah perlu likuiditas sebelum jatuh tempo?** Kalau ya, pilih instrumen yang bisa diperdagangkan di pasar sekunder.',
						],
					},
					{
						t: 'p',
						text: 'Untuk investor perorangan, akses langsung ke call money atau repo umumnya tertutup. Yang tersedia adalah deposito, reksa dana pasar uang, dan surat berharga ritel. Karena itu, memahami produk turunannya sama pentingnya dengan memahami instrumen dasarnya.',
					},
				],
			},
		],
		keyPoints: [
			'Instrumen pasar uang dipetakan lewat penerbit: bank sentral, pemerintah, korporasi, dan antarbank.',
			'SBI diterbitkan BI; SPN dan T-Bills diterbitkan pemerintah; CP dan promes diterbitkan korporasi.',
			'Call money dan repo dipakai bank untuk likuiditas harian.',
			'Imbal hasil bisa berbentuk bunga, diskonto, atau bagi hasil.',
			'Investor perorangan biasanya mengakses lewat deposito dan reksa dana pasar uang.',
		],
		terms: [
			{ term: 'SBI', def: 'Sertifikat Bank Indonesia — surat berharga yang diterbitkan BI untuk mengatur jumlah uang beredar.' },
			{ term: 'SPN', def: 'Surat Perbendaharaan Negara — surat utang negara berjangka pendek, setara T-Bills.' },
			{ term: 'Diskonto', def: 'Selisih antara harga beli di bawah nilai nominal dan nilai penuh saat jatuh tempo.' },
			{ term: 'SRBI', def: 'Sekuritas Rupiah Bank Indonesia — instrumen moneter yang diterbitkan BI.' },
		],
	},
];
