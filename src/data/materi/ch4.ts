import type { Topic } from '../types';

export const ch4: Topic[] = [
	{
		n: 16,
		slug: 'surat-sanggup-bayar',
		title: "Surat Sanggup Bayar (Promes)",
		desc: 'Janji tanpa syarat untuk membayar sejumlah uang pada tanggal tertentu',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 5,
		source: 'Kelompok 3 — Instrumen Pasar Uang',
		intro:
			'Surat sanggup bayar atau promissory note adalah dokumen tertulis berisi janji tak bersyarat dari debitur untuk membayar sejumlah uang kepada kreditur pada tanggal dan tempat yang ditentukan. Ia bukan perintah kepada pihak lain, melainkan janji dari pihak yang berutang sendiri.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi',
				blocks: [
					{
						t: 'p',
						text: 'Promes adalah dokumen tertulis berupa janji tak bersyarat dari seseorang atau debitur untuk membayar sejumlah uang tertentu kepada kreditur pada tanggal dan tempat yang telah ditentukan.',
					},
					{
						t: 'callout',
						title: 'Beda dengan wesel',
						text: 'Promes berisi janji membayar dari penerbit sendiri. Wesel (draft) berisi perintah kepada pihak lain untuk membayar. Perbedaan ini penting saat membedakan promes dengan banker\'s acceptance.',
						tone: 'note',
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Empat fungsi promes',
				blocks: [
					{
						t: 'table',
						head: ['Fungsi', 'Penjelasan'],
						rows: [
							['Bukti transaksi sah', 'Menjadi alat bukti tertulis yang sah dan valid secara hukum mengenai adanya utang-piutang.'],
							['Pengelolaan arus kas', 'Membantu perusahaan atau individu mengatur perencanaan keuangan dan arus kas masuk-keluar.'],
							['Pencatatan akuntansi', 'Mempermudah pencatatan utang-piutang secara akurat di dalam laporan keuangan.'],
							['Alat pembayaran/pendanaan', 'Dapat dipindahtangankan atau diperjualbelikan sebagai instrumen likuiditas jangka pendek sebelum jatuh tempo.'],
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Ciri-ciri yang wajib ada',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Klausula khusus.** Memuat kata "surat sanggup" atau "promes" di dalam teks dokumen.',
							'**Janji tanpa syarat.** Berisi kesanggupan mutlak untuk membayar sejumlah uang tertentu tanpa syarat lain.',
							'**Tanggal jatuh tempo.** Mencantumkan batas waktu atau tanggal pasti kapan uang harus dilunasi.',
							'**Tempat pembayaran.** Menjelaskan lokasi di mana pembayaran wajib dilakukan.',
							'**Identitas pihak terkait.** Menyebutkan secara jelas nama pihak yang berutang (penerbit) dan pihak yang menerima pembayaran (tertunjuk).',
						],
					},
					{
						t: 'p',
						text: 'Kelima unsur ini membuat promes dapat ditagih secara hukum. Kalau salah satu unsur tidak ada, kekuatan hukumnya bisa diperdebatkan.',
					},
				],
			},
			{
				id: 'penggunaan',
				h: 'Penggunaan dalam praktik',
				blocks: [
					{
						t: 'p',
						text: 'Promes dipakai ketika satu pihak memberikan pinjaman dan ingin memiliki bukti tertulis yang kuat, misalnya pinjaman antarrekan bisnis, pembiayaan supplier, atau pinjaman jangka pendek perusahaan.',
					},
					{
						t: 'ul',
						items: [
							'**Bagi pemberi pinjaman.** Memberi kepastian hukum dan tanggal pembayaran.',
							'**Bagi penerima pinjaman.** Menjadi komitmen formal yang bisa dipakai untuk perencanaan arus kas.',
							'**Bagi pasar.** Menambah instrumen yang bisa diperdagangkan sebelum jatuh tempo.',
						],
					},
					{
						t: 'callout',
						title: 'Risiko utama',
						text: 'Promes umumnya tidak memiliki jaminan khusus. Kekuatannya bergantung pada kredibilitas penerbit. Karena itu, periksa kemampuan bayar penerbit sebelum menerima promes.',
						tone: 'warn',
					},
				],
			},
		],
		keyPoints: [
			'Promes adalah janji tak bersyarat dari debitur untuk membayar sejumlah uang pada tanggal dan tempat tertentu.',
			'Fungsinya: bukti transaksi, pengelolaan arus kas, pencatatan akuntansi, dan alat pendanaan.',
			'Ciri wajib: klausula "surat sanggup/promes", janji tanpa syarat, jatuh tempo, tempat bayar, dan identitas pihak.',
			'Promes berbeda dari wesel karena berisi janji, bukan perintah kepada pihak lain.',
			'Umumnya tanpa jaminan khusus, sehingga risiko bergantung pada kredibilitas penerbit.',
		],
		terms: [
			{ term: 'Promes', def: 'Surat sanggup bayar — janji tertulis tanpa syarat untuk membayar sejumlah uang pada tanggal tertentu.' },
			{ term: 'Debitur', def: 'Pihak yang memiliki utang dan berkewajiban membayar.' },
			{ term: 'Kreditur', def: 'Pihak yang memberikan pinjaman dan berhak menerima pembayaran.' },
			{ term: 'Pindahtangankan', def: 'Dialihkan kepada pihak lain, biasanya lewat endosemen atau penyerahan dokumen.' },
		],
	},
	{
		n: 17,
		slug: 'bankers-acceptance',
		title: "Banker's Acceptance",
		desc: 'Wesel berjangka yang dijamin dan dilunasi bank',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 6,
		source: 'Kelompok 3 — Instrumen Pasar Uang',
		intro:
			"Banker's acceptance (BA) atau akseptasi bank adalah instrumen keuangan berupa perintah pembayaran tertulis atau wesel berjangka yang dijamin dan dilunasi oleh bank pada tanggal tertentu di masa depan. Jaminan bank inilah yang membuat BA dipercaya dalam perdagangan internasional.",
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan konteks',
				blocks: [
					{
						t: 'p',
						text: "BA adalah perintah pembayaran tertulis atau wesel berjangka yang dijamin dan dilunasi oleh bank pada tanggal tertentu di masa depan. Bank bertindak sebagai penjamin utama, bukan pembeli barang.",
					},
					{
						t: 'p',
						text: 'Instrumen ini lahir dari kebutuhan perdagangan internasional. Ketika pembeli dan penjual belum saling mengenal, penjual ingin jaminan bahwa ia akan dibayar. Bank yang mengakseptasi wesel memberikan jaminan itu.',
					},
				],
			},
			{
				id: 'cara-kerja',
				h: 'Cara kerja',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Transaksi dagang disepakati',
								text: 'Importir memesan barang dari eksportir dan menyepakati pembayaran dengan wesel berjangka.',
							},
							{
								title: 'Bank importir mengakseptasi',
								text: 'Bank menandatangani wesel dan berjanji membayar pada jatuh tempo. Inilah akseptasi.',
							},
							{
								title: 'Barang dikirim',
								text: 'Eksportir mengirim barang setelah menerima jaminan pembayaran dari bank.',
							},
							{
								title: 'BA diperdagangkan atau dipegang',
								text: 'Eksportir bisa menjual BA di pasar sekunder dengan diskonto untuk memperoleh kas lebih cepat.',
							},
							{
								title: 'Pelunasan',
								text: 'Pada jatuh tempo, bank membayar nilai nominal kepada pemegang BA.',
							},
						],
					},
					{
						t: 'callout',
						title: 'Inti manfaatnya',
						text: 'BA memindahkan risiko gagal bayar dari eksportir ke bank. Eksportir tidak perlu menagih importir; ia cukup memegang janji bank.',
						tone: 'tip',
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Empat fungsi',
				blocks: [
					{
						t: 'ul',
						items: [
							'**Mitigasi risiko perdagangan.** Menghilangkan risiko pembeli gagal bayar bagi penjual (eksportir).',
							'**Alat pembiayaan fleksibel.** Membantu eksportir memperoleh uang tunai lebih cepat dengan menjual BA di pasar sekunder sebelum jatuh tempo.',
							'**Akses modal murah.** Memberi importir waktu untuk menjual barangnya sebelum melunasi pembayaran ke bank.',
							'**Instrumen investasi likuid.** Menjadi pilihan investasi jangka pendek yang aman dan likuid bagi investor institusi.',
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Ciri-ciri',
				blocks: [
					{
						t: 'table',
						head: ['Ciri', 'Penjelasan'],
						rows: [
							['Jaminan pihak ketiga', 'Bank menjadi penjamin utama pembayaran.'],
							['Jangka waktu pendek', 'Masa jatuh tempo umumnya 30 hingga 180 hari.'],
							['Dapat diperdagangkan', 'Bisa dijual kembali di pasar sekunder sebelum jatuh tempo.'],
							['Sistem diskonto', 'Dijual di bawah nilai nominal, dibayar penuh saat jatuh tempo.'],
							['Risiko gagal bayar rendah', 'Keamanannya bergantung pada reputasi dan kesehatan finansial bank penerbit.'],
						],
					},
				],
			},
		],
		keyPoints: [
			"BA adalah wesel berjangka yang dijamin dan dilunasi bank.",
			'Bank bertindak sebagai penjamin utama, bukan pembeli barang.',
			'Tenornya umumnya 30–180 hari dan dapat diperdagangkan di pasar sekunder.',
			'Fungsinya: mitigasi risiko perdagangan, pembiayaan eksportir, akses modal importir, dan investasi likuid.',
			'Risikonya bergantung pada reputasi bank yang menerbitkan.',
		],
		terms: [
			{ term: 'Akseptasi', def: 'Persetujuan bank untuk membayar wesel pada tanggal jatuh tempo.' },
			{ term: 'Wesel berjangka', def: 'Surat perintah pembayaran yang jatuh tempo pada waktu tertentu di masa depan.' },
			{ term: 'Eksportir', def: 'Pihak yang menjual barang ke luar negeri.' },
			{ term: 'Importir', def: 'Pihak yang membeli barang dari luar negeri.' },
		],
	},
	{
		n: 18,
		slug: 'sertifikat-deposito',
		title: 'Sertifikat Deposito',
		desc: 'Simpanan berjangka yang dapat dipindahtangankan',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 5,
		source: 'Kelompok 3 — Instrumen Pasar Uang',
		intro:
			'Sertifikat deposito adalah produk investasi berupa surat berharga yang diterbitkan lembaga keuangan (bank) sebagai bentuk pemberian premi suku bunga. Berbeda dari deposito biasa, sertifikat deposito tidak mencantumkan nama pemilik sehingga mudah dialihkan.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi',
				blocks: [
					{
						t: 'p',
						text: 'Sertifikat deposito adalah surat berharga yang diterbitkan bank sebagai bukti bahwa nasabah telah menyimpan dana dalam periode waktu tertentu, dengan imbalan bunga.',
					},
					{
						t: 'p',
						text: 'Karena tidak tertera nama pemilik maupun pemegang dana, sertifikat deposito dapat dipindahtangankan atau diperjualbelikan sebelum jatuh tempo. Inilah yang membuatnya lebih likuid dibanding deposito berjangka biasa.',
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Tiga fungsi utama',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'Nasabah',
								title: 'Bukti simpanan',
								text: 'Menjadi bukti bahwa nasabah sudah menyimpan dana dalam periode waktu tertentu.',
							},
							{
								label: 'Bank',
								title: 'Sumber dana berjangka',
								text: 'Bank memperoleh dana berjangka dari nasabah yang bisa dipakai untuk penyaluran kredit.',
							},
							{
								label: 'Pasar',
								title: 'Penyeimbang nilai',
								text: 'Nilainya cenderung stabil dan tidak terlalu terpengaruh kondisi pasar, sehingga berfungsi sebagai penyeimbang portofolio.',
							},
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Ciri-ciri',
				blocks: [
					{
						t: 'ol',
						items: [
							'Memiliki jangka waktu tertentu, mulai dari bulanan hingga tahunan.',
							'Bunga bersifat tetap hingga masa jatuh tempo.',
							'Mudah dialihkan ke pihak lain karena tidak tertera nama pemilik maupun pemegang dana.',
							'Penerbitnya bank umum dan bank pembangunan.',
							'Dana hanya dapat dicairkan saat masa jatuh tempo berakhir.',
						],
					},
				],
			},
			{
				id: 'banding',
				h: 'Sertifikat deposito vs deposito berjangka',
				blocks: [
					{
						t: 'table',
						head: ['Aspek', 'Sertifikat deposito', 'Deposito berjangka biasa'],
						rows: [
							['Nama pemilik', 'Tidak tercantum', 'Tercantum atas nama nasabah'],
							['Pindahtangan', 'Mudah dialihkan', 'Umumnya tidak bisa dialihkan'],
							['Pencairan', 'Saat jatuh tempo, atau dijual di pasar sekunder', 'Saat jatuh tempo, atau dicairkan dengan penalti'],
							['Bunga', 'Tetap sampai jatuh tempo', 'Tetap sesuai perjanjian'],
						],
					},
					{
						t: 'callout',
						title: 'Risiko yang tetap ada',
						text: 'Sertifikat deposito dijamin oleh bank penerbit, tetapi tidak semua bank punya kualitas yang sama. Selain itu, menjual sebelum jatuh tempo bisa menghasilkan harga di bawah nilai nominal.',
						tone: 'warn',
					},
				],
			},
		],
		keyPoints: [
			'Sertifikat deposito adalah surat berharga bank sebagai bukti simpanan berjangka.',
			'Fungsinya: bukti simpanan, sumber dana berjangka bank, dan penyeimbang portofolio.',
			'Cirinya: tenor tertentu, bunga tetap, tidak mencantumkan nama, dan dapat dialihkan.',
			'Penerbitnya bank umum dan bank pembangunan.',
			'Dana dicairkan saat jatuh tempo; penjualan lebih awal bisa merugikan.',
		],
		terms: [
			{ term: 'Sertifikat deposito', def: 'Surat berharga bank sebagai bukti simpanan berjangka yang dapat dipindahtangankan.' },
			{ term: 'Bank pembangunan', def: 'Bank yang fokus membiayai proyek pembangunan dan sektor tertentu.' },
			{ term: 'Preferensi likuiditas', def: 'Kecenderungan memegang aset dalam bentuk yang mudah dicairkan.' },
		],
	},
	{
		n: 19,
		slug: 'commercial-paper',
		title: 'Commercial Paper',
		desc: 'Surat utang jangka pendek korporasi tanpa jaminan khusus',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 6,
		source: 'Kelompok 4 — Instrumen Pasar Uang',
		intro:
			'Commercial Paper (CP) adalah surat berharga berupa utang jangka pendek yang diterbitkan perusahaan untuk memperoleh dana dalam waktu relatif singkat, umumnya maksimal satu tahun. CP umumnya tanpa jaminan khusus dan dijual dengan diskonto.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan fungsi',
				blocks: [
					{
						t: 'p',
						text: 'CP adalah surat berharga berupa utang jangka pendek yang diterbitkan perusahaan untuk memperoleh dana dalam waktu relatif singkat, umumnya dengan jangka waktu maksimal satu tahun.',
					},
					{
						t: 'ol',
						items: [
							'Sebagai sumber pembiayaan jangka pendek bagi perusahaan.',
							'Membantu memenuhi kebutuhan modal kerja.',
							'Menjadi alternatif investasi jangka pendek bagi investor.',
							'Mempertemukan pihak yang membutuhkan dana dengan pihak yang memiliki dana.',
							'Menjadi salah satu instrumen dalam pasar uang.',
						],
					},
				],
			},
			{
				id: 'peran',
				h: 'Empat pihak yang terlibat',
				blocks: [
					{
						t: 'cards',
						items: [
							{ label: '01', title: 'Penerbit', text: 'Perusahaan yang menerbitkan CP karena membutuhkan dana.' },
							{ label: '02', title: 'Investor', text: 'Pihak yang membeli CP dan memberikan dana kepada perusahaan penerbit.' },
							{ label: '03', title: 'Perantara/dealer', text: 'Membantu mempertemukan penerbit dengan investor.' },
							{ label: '04', title: 'Agen pembayaran', text: 'Membantu proses pembayaran CP ketika jatuh tempo.' },
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Ciri-ciri commercial paper',
				blocks: [
					{
						t: 'table',
						head: ['Ciri', 'Penjelasan'],
						rows: [
							['Surat utang jangka pendek', 'Tenor umumnya maksimal satu tahun.'],
							['Diterbitkan perusahaan', 'Penerbitnya perusahaan atau badan usaha, bukan bank sentral.'],
							['Untuk modal kerja', 'Dana dipakai untuk kebutuhan operasional jangka pendek.'],
							['Imbal hasil dari diskonto', 'Keuntungan investor berasal dari selisih harga beli dan nilai nominal.'],
							['Umumnya tanpa jaminan khusus', 'Tidak didukung agunan tertentu, sehingga bergantung pada kredibilitas penerbit.'],
						],
					},
				],
			},
			{
				id: 'diskonto',
				h: 'Sistem diskonto',
				blocks: [
					{
						t: 'p',
						text: 'Investor membeli CP dengan harga lebih rendah daripada nilai nominalnya. Saat jatuh tempo, investor menerima nilai penuh, dan selisihnya menjadi keuntungan.',
					},
					{
						t: 'formula',
						expr: 'Keuntungan = Nilai nominal − Harga beli',
						note: 'Contoh: nominal Rp100.000.000 dibeli Rp97.000.000 → keuntungan Rp3.000.000.',
					},
					{
						t: 'table',
						head: ['Komponen', 'Nilai'],
						rows: [
							['Nilai nominal', 'Rp100.000.000'],
							['Harga beli', 'Rp97.000.000'],
							['Nilai saat jatuh tempo', 'Rp100.000.000'],
							['Keuntungan investor', 'Rp3.000.000'],
						],
					},
					{
						t: 'p',
						text: 'Diskonto mencerminkan tiga hal sekaligus: biaya dana penerbit, premi risiko, dan sisa waktu hingga jatuh tempo. Semakin panjang tenor dan semakin rendah kualitas penerbit, semakin besar diskonto yang diminta investor.',
					},
				],
			},
			{
				id: 'risiko',
				h: 'Risiko commercial paper',
				blocks: [
					{
						t: 'ul',
						items: [
							'**Risiko kredit.** Karena tanpa jaminan khusus, investor bergantung pada kemampuan bayar penerbit.',
							'**Risiko rollover.** Penerbit yang mengandalkan CP untuk membayar CP sebelumnya bisa kesulitan jika pasar menutup.',
							'**Risiko likuiditas.** Pasar sekunder CP tidak selalu aktif, sehingga sulit dijual sebelum jatuh tempo.',
						],
					},
					{
						t: 'callout',
						title: 'CP bukan untuk semua perusahaan',
						text: 'Penerbit CP biasanya perusahaan besar dengan reputasi baik. Perusahaan kecil sulit menjual CP karena investor menuntut imbal hasil yang sangat tinggi atau tidak mau membelinya sama sekali.',
						tone: 'note',
					},
				],
			},
		],
		keyPoints: [
			'CP adalah surat utang jangka pendek korporasi, maksimal satu tahun.',
			'Fungsinya membiayai modal kerja dan menjadi alternatif investasi jangka pendek.',
			'Pihaknya: penerbit, investor, dealer, dan agen pembayaran.',
			'Umumnya tanpa jaminan khusus; keuntungan investor berasal dari diskonto.',
			'Contoh: nominal Rp100 juta dibeli Rp97 juta, keuntungan Rp3 juta.',
		],
		terms: [
			{ term: 'Commercial paper', def: 'Surat utang jangka pendek yang diterbitkan perusahaan untuk memenuhi kebutuhan modal kerja.' },
			{ term: 'Rollover', def: 'Penerbitan utang baru untuk membayar utang lama yang jatuh tempo.' },
			{ term: 'Agen pembayaran', def: 'Pihak yang membantu proses pembayaran pokok atau bunga kepada investor.' },
		],
	},
	{
		n: 20,
		slug: 'repurchase-agreement',
		title: 'Repurchase Agreement (Repo)',
		desc: 'Jual efek dengan janji membeli kembali pada harga dan waktu tertentu',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 7,
		source: 'Kelompok 4 — Instrumen Pasar Uang',
		intro:
			'Repo adalah kontrak jual atau beli efek dengan janji pembelian atau penjualan kembali pada waktu dan harga yang telah ditetapkan. Bagi penjual, repo adalah cara memperoleh dana tanpa melepas aset secara permanen. Bagi pembeli, repo adalah penempatan dana jangka pendek dengan jaminan efek.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan pihak yang terlibat',
				blocks: [
					{
						t: 'p',
						text: 'Repo adalah kontrak jual atau beli efek dengan janji pembelian atau penjualan kembali pada waktu dan harga yang telah ditetapkan.',
					},
					{
						t: 'table',
						head: ['Pihak', 'Peran'],
						rows: [
							['Penjual', 'Peminjam dana jangka pendek yang membutuhkan likuiditas; menjual efek dengan janji membeli kembali.'],
							['Pembeli', 'Pemberi pinjaman (investor jangka pendek); menyediakan dana dan memegang efek.'],
							['Pihak lain', 'Bank sentral dalam operasi pasar terbuka; lembaga jasa keuangan sebagai agen transaksi.'],
						],
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Fungsi bagi tiap pihak',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'Penjual',
								title: 'Dana cepat tanpa melepas aset',
								text: 'Memperoleh dana cepat tanpa harus menjual aset secara permanen. Efek hanya menjadi jaminan sementara.',
							},
							{
								label: 'Pembeli',
								title: 'Imbal hasil dengan jaminan',
								text: 'Menempatkan dana dengan return jangka pendek yang relatif aman karena memegang jaminan efek.',
							},
							{
								label: 'Bank sentral',
								title: 'Alat operasi pasar terbuka',
								text: 'Mengendalikan jumlah uang beredar dan suku bunga melalui transaksi repo dengan bank.',
							},
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Ciri-ciri repo',
				blocks: [
					{
						t: 'ul',
						items: [
							'**Jangka waktu.** Pendek, mulai dari overnight hingga beberapa minggu, disepakati kedua belah pihak.',
							'**Jaminan/agunan.** Berupa efek seperti SUN, SBI, obligasi korporasi, atau saham. Jika penjual gagal, pembeli dapat menyimpan efek.',
							'**Risiko.** Gagal bayar dari penjual, penurunan nilai pasar efek, dan efek sulit dicairkan.',
						],
					},
					{
						t: 'callout',
						title: 'Repo bukan jual lepas',
						text: 'Secara hukum efek berpindah tangan, tetapi secara ekonomi repo adalah pinjaman dengan agunan. Penjual tetap menanggung risiko perubahan harga efek dan wajib membelinya kembali.',
						tone: 'note',
					},
				],
			},
			{
				id: 'cara-kerja',
				h: 'Cara kerja repo',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Bank menjual efek kepada investor',
								text: 'Efek yang dijual bisa berupa surat berharga negara atau obligasi.',
							},
							{
								title: 'Investor membayar dana tunai',
								text: 'Investor menyerahkan dana sesuai kesepakatan, sementara efek menjadi jaminan.',
							},
							{
								title: 'Pada jatuh tempo, bank membeli kembali efek',
								text: 'Bank membeli efek tersebut dari investor sesuai harga yang telah disepakati.',
							},
							{
								title: 'Investor menerima pembayaran kembali',
								text: 'Investor menerima dana tunai ditambah imbal hasil (repo rate).',
							},
						],
					},
					{
						t: 'formula',
						expr: 'Pembayaran kembali = Dana awal + (Dana awal × repo rate × tenor/360)',
						note: 'Angka 360 adalah konvensi hari dalam setahun yang umum dipakai pasar uang.',
					},
				],
			},
			{
				id: 'contoh',
				h: 'Contoh sederhana',
				blocks: [
					{
						t: 'p',
						text: 'Bank membutuhkan dana Rp1 miliar untuk tiga hari. Bank menjual SBN senilai Rp1 miliar kepada investor dengan janji membeli kembali pada harga Rp1 miliar ditambah imbal hasil setara 6% per tahun.',
					},
					{
						t: 'table',
						head: ['Komponen', 'Perhitungan', 'Hasil'],
						rows: [
							['Dana diterima bank', '—', 'Rp1.000.000.000'],
							['Imbal hasil 6% × 3/360', 'Rp1.000.000.000 × 6% × 3/360', 'Rp500.000'],
							['Pembayaran kembali', 'Pokok + imbal hasil', 'Rp1.000.500.000'],
						],
					},
					{
						t: 'p',
						text: 'Jika bank gagal membeli kembali, investor dapat menjual efek jaminan untuk menutup kerugian. Inilah yang membuat repo relatif aman bagi pemberi dana.',
					},
				],
			},
		],
		keyPoints: [
			'Repo adalah jual efek dengan janji beli kembali pada waktu dan harga yang disepakati.',
			'Penjual memperoleh dana cepat; pembeli memperoleh imbal hasil dengan jaminan efek.',
			'Bank sentral memakai repo sebagai alat operasi pasar terbuka.',
			'Tenornya pendek, dari overnight hingga beberapa minggu.',
			'Risikonya: gagal bayar penjual, penurunan nilai efek, dan likuiditas efek.',
		],
		terms: [
			{ term: 'Repo', def: 'Repurchase agreement — transaksi jual efek dengan janji membeli kembali pada waktu dan harga tertentu.' },
			{ term: 'Repo rate', def: 'Imbal hasil yang disepakati dalam transaksi repo.' },
			{ term: 'Overnight', def: 'Jangka waktu satu hari, umumnya jatuh tempo pada hari kerja berikutnya.' },
			{ term: 'Haircut', def: 'Potongan nilai agunan terhadap nilai pinjaman untuk mengantisipasi penurunan harga.' },
		],
	},
	{
		n: 21,
		slug: 'treasury-bills-spn',
		title: 'Treasury Bills & SPN',
		desc: 'Surat utang negara jangka pendek yang dijual dengan diskonto',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 6,
		source: 'Kelompok 4 — Instrumen Pasar Uang',
		intro:
			'Treasury Bills adalah surat utang negara jangka pendek yang diterbitkan pemerintah untuk memenuhi kebutuhan pendanaan sementara, dengan jatuh tempo tidak lebih dari satu tahun. Di Indonesia, instrumen ini setara dengan Surat Perbendaharaan Negara (SPN).',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan penerbit',
				blocks: [
					{
						t: 'p',
						text: 'Surat utang negara jangka pendek (treasury bills) adalah surat berharga utang jangka pendek yang diterbitkan pemerintah untuk memenuhi kebutuhan pendanaan sementara, dengan jangka waktu jatuh tempo tidak lebih dari satu tahun.',
					},
					{
						t: 'p',
						text: 'Di Indonesia, Treasury Bills setara dengan Surat Perbendaharaan Negara (SPN). Penerbitnya adalah Pemerintah Republik Indonesia melalui Kementerian Keuangan.',
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Empat fungsi',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'Fiskal',
								title: 'Pendanaan pemerintah',
								text: 'Menutup defisit anggaran jangka pendek negara dengan cepat.',
							},
							{
								label: 'Moneter',
								title: 'Pengendalian likuiditas',
								text: 'Mengatur jumlah uang beredar di dalam pasar keuangan.',
							},
							{
								label: 'Acuan',
								title: 'Benchmark bebas risiko',
								text: 'Menjadi tolok ukur suku bunga bebas risiko (risk-free rate).',
							},
							{
								label: 'Investasi',
								title: 'Tempat parkir dana aman',
								text: 'Menjadi wadah investasi konservatif bagi institusi atau investor.',
							},
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Lima ciri utama',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Jangka waktu pendek.** Tenor kurang dari satu tahun, biasanya 3, 6, atau 12 bulan.',
							'**Dijual dengan harga diskon.** Dibeli di bawah nilai nominal (par value).',
							'**Tanpa kupon.** Tidak membayar bunga periodik kepada investor.',
							'**Risiko sangat rendah.** Dijamin penuh oleh pemerintah penerbit (risk-free asset).',
							'**Likuiditas tinggi.** Mudah diperjualbelikan kembali di pasar sekunder sebelum jatuh tempo.',
						],
					},
				],
			},
			{
				id: 'cara-kerja',
				h: 'Cara kerja dan simulasi',
				blocks: [
					{
						t: 'p',
						text: 'T-Bill tidak membayar bunga berkala. Investor membelinya dengan harga lebih murah dari nilai nominal, lalu menerima nilai penuh saat jatuh tempo. Keuntungan diambil dari selisih keduanya.',
					},
					{
						t: 'formula',
						expr: 'Keuntungan = Nilai nominal − Harga beli',
						note: 'Membeli T-Bill nominal $1.000 seharga $950 memberi keuntungan $50 saat jatuh tempo.',
					},
					{
						t: 'table',
						head: ['Komponen', 'Nilai'],
						rows: [
							['Nilai nominal', '$1.000'],
							['Harga beli', '$950'],
							['Keuntungan saat jatuh tempo', '$50'],
							['Imbal hasil terhadap harga beli', '≈ 5,26%'],
						],
					},
				],
			},
			{
				id: 'risiko',
				h: 'Tiga risiko yang tetap ada',
				blocks: [
					{
						t: 'table',
						head: ['Risiko', 'Penjelasan'],
						rows: [
							[
								'Risiko suku bunga',
								'Harga T-Bill di pasar sekunder turun jika suku bunga acuan naik. Kerugian muncul jika dijual sebelum jatuh tempo.',
							],
							[
								'Risiko likuiditas',
								'T-Bill kurang likuid jika dijual mendadak sebelum jatuh tempo di luar pasar aktif. Ada potensi selisih harga jual (bid-ask spread) yang merugikan.',
							],
							[
								'Risiko nilai tukar',
								'Berlaku bagi investor domestik jika T-Bill dibeli dalam mata uang asing seperti USD. Rupiah yang menguat menurunkan hasil konversi keuntungan.',
							],
						],
					},
					{
						t: 'callout',
						title: 'Risk-free bukan berarti tanpa kerugian',
						text: 'Bebas risiko gagal bayar bukan berarti bebas risiko harga. Menjual sebelum jatuh tempo saat suku bunga naik tetap bisa menghasilkan kerugian.',
						tone: 'warn',
					},
				],
			},
		],
		keyPoints: [
			'T-Bill adalah surat utang negara jangka pendek, maksimal satu tahun.',
			'Di Indonesia setara dengan SPN, diterbitkan Kementerian Keuangan.',
			'Fungsinya: pendanaan pemerintah, pengendalian likuiditas, benchmark bebas risiko, dan investasi aman.',
			'Cirinya: diskonto, tanpa kupon, risiko sangat rendah, dan likuid.',
			'Risiko yang tetap ada: suku bunga, likuiditas, dan nilai tukar.',
		],
		terms: [
			{ term: 'Treasury bill', def: 'Surat utang negara jangka pendek yang dijual dengan diskonto dan tanpa kupon.' },
			{ term: 'Par value', def: 'Nilai nominal surat berharga yang akan dibayarkan saat jatuh tempo.' },
			{ term: 'Risk-free rate', def: 'Tingkat pengembalian aset yang dianggap bebas risiko gagal bayar, biasanya surat utang pemerintah.' },
			{ term: 'Bid-ask spread', def: 'Selisih antara harga beli dan harga jual yang ditawarkan pasar.' },
		],
	},
	{
		n: 22,
		slug: 'pasar-uang-syariah',
		title: 'Pasar Uang Syariah',
		desc: 'Instrumen jangka pendek dengan akad yang bebas riba, gharar, dan maysir',
		chapter: 4,
		kicker: 'Instrumen',
		minutes: 7,
		source: 'Kelompok 4 — Instrumen Pasar Uang',
		intro:
			'Instrumen pasar uang syariah adalah instrumen keuangan jangka pendek yang digunakan untuk memenuhi kebutuhan likuiditas dan investasi dengan prinsip syariah Islam. Transaksinya harus bebas riba, gharar yang dilarang, dan maysir, serta memakai akad yang jelas.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan batasannya',
				blocks: [
					{
						t: 'p',
						text: 'Instrumen pasar uang syariah adalah instrumen keuangan jangka pendek yang digunakan untuk memenuhi kebutuhan likuiditas dan investasi dengan menggunakan prinsip-prinsip syariah Islam.',
					},
					{
						t: 'p',
						text: 'Transaksinya harus sesuai ketentuan syariah dan tidak boleh mengandung riba, gharar yang dilarang, dan maysir. Karena itu, imbal hasil tidak berbentuk bunga, melainkan bagi hasil, margin, atau sewa sesuai akad.',
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Lima fungsi',
				blocks: [
					{
						t: 'ol',
						items: [
							'Mengelola likuiditas — membantu bank atau lembaga keuangan memenuhi kebutuhan dana jangka pendek.',
							'Menjadi investasi jangka pendek bagi pihak yang memiliki dana.',
							'Mendukung kebijakan moneter — membantu Bank Indonesia mengelola likuiditas melalui instrumen syariah.',
							'Menghubungkan pihak yang membutuhkan dana dengan pihak yang memiliki dana.',
							'Mendukung perkembangan industri keuangan syariah.',
						],
					},
				],
			},
			{
				id: 'prinsip',
				h: 'Empat prinsip syariah',
				blocks: [
					{
						t: 'cards',
						items: [
							{ label: '01', title: 'Tidak mengandung riba', text: 'Keuntungan tidak berasal dari bunga yang ditetapkan atas pinjaman.' },
							{ label: '02', title: 'Tidak mengandung maysir', text: 'Tidak boleh mengandung unsur perjudian atau spekulasi yang dilarang.' },
							{ label: '03', title: 'Menggunakan akad syariah', text: 'Hubungan antar pihak dalam transaksi berdasarkan akad yang sesuai syariah.' },
							{ label: '04', title: 'Bebas gharar yang dilarang', text: 'Transaksi harus memiliki objek, mekanisme, dan ketentuan yang jelas.' },
						],
					},
				],
			},
			{
				id: 'ciri',
				h: 'Ciri-ciri instrumen syariah',
				blocks: [
					{
						t: 'ul',
						items: [
							'Berjangka pendek.',
							'Menggunakan prinsip syariah.',
							'Tidak menggunakan bunga/riba sebagai dasar keuntungan.',
							'Menggunakan akad syariah.',
							'Transaksi memiliki objek dan mekanisme yang jelas.',
							'Dana digunakan untuk kegiatan yang halal.',
							'Imbal hasil diperoleh sesuai struktur dan akad.',
							'Dapat digunakan untuk investasi dan pengelolaan likuiditas.',
						],
					},
				],
			},
			{
				id: 'akad',
				h: 'Lima akad yang digunakan',
				blocks: [
					{
						t: 'table',
						head: ['Akad', 'Makna', 'Contoh penerapan'],
						rows: [
							['Mudharabah', 'Kerja sama antara pemilik modal (shahibul maal) dan pengelola dana (mudharib); keuntungan dibagi sesuai nisbah.', 'Deposito syariah, pembiayaan usaha'],
							['Musyarakah', 'Kerja sama ketika dua pihak atau lebih sama-sama memberikan modal; keuntungan dibagi sesuai kesepakatan, kerugian sesuai porsi modal.', 'Pembiayaan proyek bersama'],
							['Wadiah', 'Akad titipan; pihak pertama menitipkan dana kepada pihak kedua untuk dijaga sesuai ketentuan.', 'Giro syariah'],
							['Ijarah', 'Akad sewa-menyewa atau pemanfaatan aset/jasa dengan imbalan tertentu.', 'Sukuk ijarah, sewa aset'],
							['Murabahah', 'Jual beli dengan harga pokok dan margin yang diketahui serta disepakati para pihak.', 'Pembiayaan barang, sukuk murabahah'],
						],
					},
					{
						t: 'callout',
						title: 'Perbedaan mendasar dengan instrumen konvensional',
						text: 'Instrumen konvensional memberi bunga atas uang yang dipinjamkan. Instrumen syariah mengaitkan imbal hasil dengan aset, usaha, atau jasa nyata yang diperjanjikan dalam akad.',
						tone: 'note',
					},
				],
			},
			{
				id: 'instrumen',
				h: 'Instrumen yang lazim',
				blocks: [
					{
						t: 'ul',
						items: [
							'**SukBI (Sukuk Bank Indonesia).** Instrumen moneter syariah yang diterbitkan BI untuk mengelola likuiditas.',
							'**FASBIS (Fasilitas Simpanan Bank Indonesia Syariah).** Fasilitas penempatan dana syariah di BI.',
							'**SBSN/sukuk negara.** Surat berharga syariah negara untuk pembiayaan anggaran.',
							'**Repo syariah.** Repo dengan akad yang sesuai prinsip syariah.',
							'**Reksa dana pasar uang syariah.** Produk investasi jangka pendek berbasis instrumen syariah.',
						],
					},
					{
						t: 'p',
						text: 'Daftar instrumen dapat berkembang mengikuti kebijakan Bank Indonesia. Yang tetap adalah prinsipnya: transaksi harus jelas objeknya, bebas riba, dan memakai akad yang disepakati.',
					},
				],
			},
		],
		keyPoints: [
			'Pasar uang syariah memakai prinsip Islam: bebas riba, gharar yang dilarang, dan maysir.',
			'Fungsinya: likuiditas, investasi jangka pendek, kebijakan moneter, intermediasi, dan pengembangan keuangan syariah.',
			'Lima akad: mudharabah, musyarakah, wadiah, ijarah, dan murabahah.',
			'Imbal hasil berbentuk bagi hasil, margin, atau sewa — bukan bunga.',
			'Instrumen yang lazim: SukBI, FASBIS, SBSN/sukuk, repo syariah, dan reksa dana pasar uang syariah.',
		],
		terms: [
			{ term: 'Riba', def: 'Tambahan yang dipungut tanpa dasar pertukaran yang sah, dilarang dalam syariah.' },
			{ term: 'Gharar', def: 'Ketidakjelasan dalam transaksi yang dapat menimbulkan sengketa; gharar yang dilarang harus dihindari.' },
			{ term: 'Maysir', def: 'Unsur perjudian atau spekulasi yang dilarang dalam transaksi syariah.' },
			{ term: 'Akad', def: 'Perjanjian atau kesepakatan yang menjadi dasar hubungan para pihak dalam transaksi syariah.' },
			{ term: 'Nisbah', def: 'Perbandingan pembagian keuntungan yang disepakati dalam akad bagi hasil.' },
		],
	},
];
