import type { Topic } from '../types';

export const ch3: Topic[] = [
	{
		n: 11,
		slug: 'perbedaan-pasar-uang-pasar-modal',
		title: 'Tujuh Sumbu Perbedaan PU vs PM',
		desc: 'Instrumen, tenor, tujuan, mekanisme, likuiditas, otoritas, dan risiko',
		chapter: 3,
		kicker: 'Perbandingan',
		minutes: 7,
		source: 'Kelompok 5 — Pasar Uang vs Pasar Modal',
		intro:
			'Pasar uang dan pasar modal sama-sama mempertemukan pemilik dana dengan pencari dana. Bedanya terletak pada tujuh sumbu: instrumen, jangka waktu, tujuan investor, mekanisme, likuiditas, otoritas, dan risiko. Tujuh sumbu inilah yang paling sering keluar di ujian.',
		sections: [
			{
				id: 'tujuh-sumbu',
				h: 'Tabel tujuh sumbu',
				blocks: [
					{
						t: 'table',
						head: ['Sumbu', 'Pasar uang', 'Pasar modal'],
						rows: [
							[
								'Instrumen',
								'Surat utang jangka pendek, commercial paper, deposito berjangka',
								'Saham, obligasi, reksa dana, derivatif',
							],
							[
								'Jangka waktu',
								'Kurang dari 1 tahun',
								'1 tahun atau lebih',
							],
							[
								'Tujuan investor',
								'Menjaga kekayaan (maintaining wealth)',
								'Menambah kekayaan (generating wealth)',
							],
							[
								'Mekanisme',
								'Lebih sederhana; transaksi setelah menyetujui penawaran',
								'Lebih kompleks; lewat underwriter dan uji kelayakan saat IPO',
							],
							[
								'Likuiditas',
								'Sekitar 1–2 hari kerja, nilai aset cenderung stabil',
								'Cepat lewat penjualan saham di bursa, tetapi harga berfluktuasi',
							],
							[
								'Otoritas',
								'Bank Indonesia (BI)',
								'Kemenkeu RI, dialihkan ke OJK sejak 2012',
							],
							[
								'Risiko',
								'Rendah, cocok untuk profil risk averse',
								'Tinggi, karena profitabilitas berubah mengikuti gejolak pasar',
							],
						],
					},
				],
			},
			{
				id: 'instrumen',
				h: 'Instrumen dan tenor',
				blocks: [
					{
						t: 'p',
						text: 'Perbedaan paling kasat mata ada pada instrumen. Pasar uang berisi surat-surat utang berjangka pendek, commercial paper, dan deposito berjangka. Pasar modal jauh lebih luas: saham, obligasi, reksa dana, sampai derivatif.',
					},
					{
						t: 'p',
						text: 'Tenor menjadi pembeda pertama. Pasar uang maksimal satu tahun; pasar modal satu tahun atau lebih. Karena itu, pasar uang cocok untuk dana yang akan dipakai dalam waktu dekat, sedangkan pasar modal cocok untuk dana yang bisa diendapkan lama.',
					},
				],
			},
			{
				id: 'tujuan',
				h: 'Tujuan investor: menjaga vs menumbuhkan',
				blocks: [
					{
						t: 'p',
						text: 'Investor pasar modal bertujuan menambah kekayaan lewat kepemilikan saham, dividen, atau keuntungan jual beli saham. Investor pasar uang lebih memilih menjaga kekayaan dengan investasi yang relatif aman dan imbal hasil yang telah disepakati.',
					},
					{
						t: 'cards',
						items: [
							{
								label: 'Maintaining',
								title: 'Pasar uang',
								text: 'Prioritas: dana tetap tersedia dan nilainya stabil. Cocok untuk dana darurat, kas perusahaan, dan kebutuhan dalam waktu dekat.',
							},
							{
								label: 'Generating',
								title: 'Pasar modal',
								text: 'Prioritas: pertumbuhan nilai. Cocok untuk tujuan jangka panjang seperti dana pensiun atau pendidikan anak.',
							},
						],
					},
				],
			},
			{
				id: 'mekanisme',
				h: 'Mekanisme dan likuiditas',
				blocks: [
					{
						t: 'p',
						text: 'Pasar modal punya mekanisme lebih kompleks. Perusahaan harus melalui underwriter dan uji kelayakan sebelum saham ditawarkan ke publik — proses ini hanya terjadi saat penawaran umum perdana (IPO). Pasar uang lebih sederhana karena transaksi dapat dilakukan langsung setelah investor menyetujui penawaran.',
					},
					{
						t: 'p',
						text: 'Dari sisi likuiditas, saham bisa dicairkan cepat lewat bursa, tetapi nilainya berisiko turun. Pasar uang membutuhkan sekitar 1–2 hari kerja untuk dicairkan melalui manajer investasi, tetapi nilainya cenderung stabil.',
					},
					{
						t: 'callout',
						title: 'Likuiditas bukan jaminan nilai',
						text: 'Saham sangat likuid, tetapi likuiditas tidak melindungi dari kerugian harga. Deposito kurang likuid sebelum jatuh tempo, tetapi nilainya lebih pasti.',
						tone: 'note',
					},
				],
			},
			{
				id: 'otoritas-risiko',
				h: 'Otoritas dan risiko',
				blocks: [
					{
						t: 'p',
						text: 'Otoritas tertinggi pasar uang adalah Bank Indonesia. Otoritas tertinggi pasar modal adalah Kementerian Keuangan RI, lalu dialihkan ke OJK sejak 2012.',
					},
					{
						t: 'p',
						text: 'Risiko pasar uang lebih rendah karena profitabilitasnya lebih pasti. Karena itu pasar uang paling sesuai bagi investor dengan profil risk averse. Sebaliknya, pasar modal berisiko tinggi karena profitabilitasnya mudah berubah mengikuti gejolak ekonomi pasar.',
					},
					{
						t: 'table',
						head: ['Profil investor', 'Kecenderungan pilihan', 'Alasan'],
						rows: [
							['Risk averse', 'Pasar uang, obligasi pemerintah', 'Nilai stabil, imbal hasil relatif pasti'],
							['Moderat', 'Campuran pasar uang dan obligasi', 'Menyeimbangkan stabilitas dan pertumbuhan'],
							['Agresif', 'Saham dan derivatif', 'Menerima fluktuasi demi potensi imbal hasil lebih tinggi'],
						],
					},
				],
			},
			{
				id: 'cara-mengingat',
				h: 'Cara mengingat cepat',
				blocks: [
					{
						t: 'ul',
						items: [
							'**PU = Pendek, Uang tunai, Aman.** Tenor pendek, likuid, risiko rendah.',
							'**PM = Panjang, Milik, Modal.** Tenor panjang, kepemilikan saham, untuk modal usaha.',
							'**Otoritas:** BI untuk uang, OJK untuk modal.',
							'**Tujuan:** pasar uang menjaga, pasar modal menumbuhkan.',
						],
					},
				],
			},
		],
		keyPoints: [
			'Tujuh pembeda: instrumen, tenor, tujuan, mekanisme, likuiditas, otoritas, dan risiko.',
			'Pasar uang ≤ 1 tahun; pasar modal > 1 tahun.',
			'Pasar uang untuk menjaga kekayaan; pasar modal untuk menumbuhkannya.',
			'Otoritas: BI untuk pasar uang, OJK untuk pasar modal (sejak 2012).',
			'Risiko pasar uang lebih rendah; pasar modal lebih tinggi tetapi potensi imbal hasilnya lebih besar.',
		],
		terms: [
			{ term: 'Risk averse', def: 'Sikap investor yang cenderung menghindari risiko dan memilih instrumen aman.' },
			{ term: 'Underwriter', def: 'Penjamin emisi efek yang membantu perusahaan menawarkan saham atau obligasi ke publik.' },
			{ term: 'IPO', def: 'Initial Public Offering — penawaran umum perdana saham perusahaan kepada publik.' },
		],
	},
	{
		n: 12,
		slug: 'fungsi-pasar-uang-dan-pasar-modal',
		title: 'Fungsi Kedua Pasar',
		desc: 'Tiga fungsi pasar uang dan tiga fungsi pasar modal',
		chapter: 3,
		kicker: 'Perbandingan',
		minutes: 4,
		source: 'Kelompok 5 — Pasar Uang vs Pasar Modal',
		intro:
			'Kedua pasar punya fungsi yang berbeda tetapi saling melengkapi. Pasar uang menjaga kelancaran jangka pendek; pasar modal membiayai pertumbuhan jangka panjang. Bersama-sama keduanya menyalurkan dana dari yang berlebih ke yang membutuhkan.',
		sections: [
			{
				id: 'fungsi-pu',
				h: 'Tiga fungsi pasar uang',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Menjaga likuiditas jangka pendek.** Bank dan perusahaan bisa memenuhi kewajiban harian tanpa menjual aset jangka panjang.',
							'**Menjadi sarana kebijakan moneter Bank Indonesia.** Operasi moneter di pasar uang memengaruhi jumlah uang beredar dan suku bunga.',
							'**Menjadi tempat menyimpan dana sementara agar tetap produktif.** Dana yang belum dipakai tidak menganggur.',
						],
					},
				],
			},
			{
				id: 'fungsi-pm',
				h: 'Tiga fungsi pasar modal',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Sarana perusahaan mencari modal jangka panjang.** Perusahaan menerbitkan saham atau obligasi untuk ekspansi.',
							'**Wadah masyarakat untuk berinvestasi.** Masyarakat bisa memiliki bagian dari perusahaan atau meminjamkan dana lewat obligasi.',
							'**Mendorong pertumbuhan ekonomi.** Dana mengalir ke sektor produktif dan menciptakan lapangan kerja.',
						],
					},
				],
			},
			{
				id: 'sinergi',
				h: 'Bagaimana keduanya bekerja bersama',
				blocks: [
					{
						t: 'p',
						text: 'Bayangkan sebuah perusahaan yang baru mendapat kontrak besar. Untuk memenuhi pesanan, ia butuh modal kerja jangka pendek — di sinilah pasar uang berperan. Untuk membangun pabrik baru, ia butuh modal jangka panjang — di sinilah pasar modal berperan.',
					},
					{
						t: 'table',
						head: ['Kebutuhan', 'Pasar yang dipakai', 'Instrumen'],
						rows: [
							['Membayar bahan baku sebelum pembeli membayar', 'Pasar uang', 'Commercial paper, kredit jangka pendek'],
							['Membangun pabrik baru', 'Pasar modal', 'Saham, obligasi'],
							['Menjaga likuiditas harian bank', 'Pasar uang', 'Call money, repo'],
							['Memperluas kepemilikan publik', 'Pasar modal', 'IPO saham'],
						],
					},
				],
			},
			{
				id: 'kesimpulan',
				h: 'Kesimpulan',
				blocks: [
					{
						t: 'p',
						text: 'Pasar uang dan pasar modal bukan pesaing, melainkan dua ruas dari jalan yang sama. Pasar uang mengatur aliran dana jangka pendek; pasar modal mengatur aliran dana jangka panjang. Keduanya diperlukan agar sistem keuangan berjalan seimbang.',
					},
				],
			},
		],
		keyPoints: [
			'Fungsi pasar uang: menjaga likuiditas, sarana kebijakan moneter, dan tempat parkir dana sementara.',
			'Fungsi pasar modal: mencari modal jangka panjang, wadah investasi, dan mendorong pertumbuhan ekonomi.',
			'Keduanya saling melengkapi, bukan bersaing.',
			'Kebutuhan jangka pendek diselesaikan di pasar uang; kebutuhan jangka panjang di pasar modal.',
		],
		terms: [
			{ term: 'Modal kerja', def: 'Dana yang dibutuhkan perusahaan untuk membiayai operasional sehari-hari.' },
			{ term: 'Ekspansi', def: 'Perluasan usaha, baik kapasitas produksi, pasar, maupun wilayah operasi.' },
		],
	},
	{
		n: 13,
		slug: 'institusi-pasar-modal',
		title: 'Institusi Utama Pasar Modal',
		desc: 'Otoritas, penyelenggara, perusahaan efek, lembaga penunjang, dan profesi',
		chapter: 3,
		kicker: 'Pasar modal',
		minutes: 7,
		source: 'Kelompok 5 — Pasar Uang vs Pasar Modal',
		intro:
			'Pasar modal bukan hanya bursa. Ada lima lapis institusi yang membuat transaksi berjalan aman: otoritas pengawas, penyelenggara dan SRO, perusahaan efek, lembaga penunjang, serta profesi penunjang. Masing-masing punya peran yang tidak bisa saling menggantikan.',
		sections: [
			{
				id: 'lima-lapis',
				h: 'Peta lima lapis institusi',
				blocks: [
					{
						t: 'table',
						head: ['Lapis', 'Institusi', 'Peran utama'],
						rows: [
							['Otoritas pengawas', 'OJK', 'Mengatur, mengawasi, dan melindungi investor'],
							['Penyelenggara & SRO', 'BEI, KSEI, KPEI', 'Menyelenggarakan perdagangan, penitipan, dan kliring'],
							['Perusahaan efek', 'Penjamin emisi, perantara pedagang, manajer investasi', 'Menjual efek, memfasilitasi transaksi, mengelola dana'],
							['Lembaga penunjang', 'Bank kustodian, BAE, wali amanat, pemeringkat', 'Mendukung administrasi dan keamanan efek'],
							['Profesi penunjang', 'Akuntan publik, konsultan hukum, penilai, notaris', 'Memberi opini dan verifikasi independen'],
						],
					},
				],
			},
			{
				id: 'sro',
				h: 'Penyelenggara dan SRO',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'BEI',
								title: 'Bursa Efek Indonesia',
								text: 'Menyelenggarakan dan mengatur perdagangan efek di bursa, termasuk menyediakan sistem perdagangan dan informasi harga.',
							},
							{
								label: 'KSEI',
								title: 'Kustodian Sentral Efek Indonesia',
								text: 'Menyimpan efek secara sentral dan mencatat kepemilikan efek dalam bentuk elektronik.',
							},
							{
								label: 'KPEI',
								title: 'Kliring Penjaminan Efek Indonesia',
								text: 'Melakukan kliring dan penjaminan penyelesaian transaksi agar tidak ada pihak yang gagal memenuhi kewajiban.',
							},
						],
					},
					{
						t: 'p',
						text: 'SRO singkatan dari Self-Regulatory Organization. Mereka adalah organisasi yang diberi kewenangan oleh OJK untuk membuat dan menegakkan aturan di lingkup kegiatannya.',
					},
				],
			},
			{
				id: 'perusahaan-efek',
				h: 'Perusahaan efek',
				blocks: [
					{
						t: 'ul',
						items: [
							'**Penjamin emisi efek (underwriter).** Membantu perusahaan menerbitkan dan menjual saham atau obligasi ke publik.',
							'**Perantara pedagang efek (broker-dealer).** Memfasilitasi jual beli efek untuk nasabah dan bisa bertransaksi untuk dirinya sendiri.',
							'**Manajer investasi.** Mengelola portofolio efek untuk reksa dana atau nasabah institusi.',
						],
					},
				],
			},
			{
				id: 'penunjang',
				h: 'Lembaga dan profesi penunjang',
				blocks: [
					{
						t: 'table',
						head: ['Institusi', 'Fungsi'],
						rows: [
							['Bank kustodian', 'Menyimpan efek dan mencatat transaksi nasabah'],
							['Biro administrasi efek (BAE)', 'Mengelola administrasi saham, seperti daftar pemegang saham dan pembagian dividen'],
							['Wali amanat', 'Mewakili kepentingan pemegang obligasi'],
							['Lembaga pemeringkat efek', 'Memberi peringkat risiko efek, terutama obligasi'],
							['Akuntan publik', 'Mengaudit laporan keuangan emiten'],
							['Konsultan hukum', 'Memeriksa aspek hukum penerbitan efek'],
							['Penilai', 'Menilai aset yang menjadi dasar penerbitan efek'],
							['Notaris', 'Membuat akta dan dokumen hukum terkait transaksi'],
						],
					},
				],
			},
			{
				id: 'alur',
				h: 'Alur sederhana saat perusahaan IPO',
				blocks: [
					{
						t: 'steps',
						items: [
							{ title: 'Persiapan', text: 'Perusahaan menunjuk underwriter, akuntan publik, konsultan hukum, dan notaris.' },
							{ title: 'Uji kelayakan', text: 'OJK memeriksa dokumen dan kelayakan perusahaan untuk menjadi emiten.' },
							{ title: 'Penawaran', text: 'Saham ditawarkan ke publik melalui underwriter dengan harga dan jadwal tertentu.' },
							{ title: 'Pencatatan', text: 'Saham dicatat di BEI; kepemilikan tercatat secara elektronik di KSEI.' },
							{ title: 'Perdagangan', text: 'Saham mulai diperdagangkan; penyelesaian transaksi dijamin lewat KPEI.' },
						],
					},
				],
			},
		],
		keyPoints: [
			'Lima lapis institusi: otoritas, penyelenggara & SRO, perusahaan efek, lembaga penunjang, profesi penunjang.',
			'OJK mengatur dan mengawasi pasar modal.',
			'BEI menyelenggarakan perdagangan; KSEI menyimpan efek; KPEI melakukan kliring dan penjaminan.',
			'Underwriter membantu penerbitan efek; manajer investasi mengelola portofolio.',
			'Wali amanat mewakili pemegang obligasi; BAE mengurus administrasi saham.',
		],
		terms: [
			{ term: 'SRO', def: 'Self-Regulatory Organization — organisasi yang diberi kewenangan mengatur kegiatan anggotanya.' },
			{ term: 'Kustodian', def: 'Pihak yang menyimpan dan mengadministrasikan efek milik nasabah.' },
			{ term: 'Wali amanat', def: 'Pihak yang mewakili kepentingan pemegang obligasi.' },
			{ term: 'Pemeringkat efek', def: 'Lembaga yang menilai tingkat risiko suatu efek, terutama obligasi.' },
		],
	},
	{
		n: 14,
		slug: 'produk-pasar-modal',
		title: 'Produk Pasar Modal',
		desc: 'Saham, obligasi & sukuk, reksa dana, dan derivatif',
		chapter: 3,
		kicker: 'Pasar modal',
		minutes: 6,
		source: 'Kelompok 5 — Pasar Uang vs Pasar Modal',
		intro:
			'Empat kelompok produk pasar modal: ekuitas (saham), efek bersifat utang (obligasi dan sukuk), reksa dana, dan instrumen derivatif. Masing-masing punya hak, imbal hasil, dan tingkat risiko yang berbeda.',
		sections: [
			{
				id: 'empat-produk',
				h: 'Empat kelompok produk',
				blocks: [
					{
						t: 'table',
						head: ['Produk', 'Hak pemegang', 'Sumber imbal hasil', 'Risiko'],
						rows: [
							['Saham', 'Kepemilikan perusahaan', 'Dividen dan kenaikan harga', 'Tinggi'],
							['Obligasi', 'Kreditur perusahaan/pemerintah', 'Kupon dan pelunasan pokok', 'Sedang'],
							['Sukuk', 'Pemilik manfaat aset/akad syariah', 'Bagi hasil, margin, atau sewa', 'Sedang'],
							['Reksa dana', 'Kepemilikan unit penyertaan', 'Kenaikan NAB dan pembagian hasil', 'Tergantung jenis'],
							['Derivatif', 'Hak/kewajiban atas aset dasar', 'Selisih harga kontrak', 'Tinggi'],
						],
					},
				],
			},
			{
				id: 'saham',
				h: 'Saham: bukti kepemilikan',
				blocks: [
					{
						t: 'p',
						text: 'Saham merupakan bukti kepemilikan seseorang atau badan usaha atas suatu perusahaan. Pemegang saham berhak atas dividen, hak suara dalam RUPS, dan bagian dari sisa aset jika perusahaan dilikuidasi.',
					},
					{
						t: 'ul',
						items: [
							'**Capital gain.** Keuntungan dari selisih harga beli dan harga jual.',
							'**Dividen.** Bagian laba yang dibagikan perusahaan, tidak selalu ada.',
							'**Risiko.** Harga bisa turun, bahkan saham bisa delisting atau perusahaan pailit.',
						],
					},
				],
			},
			{
				id: 'obligasi-sukuk',
				h: 'Obligasi dan sukuk',
				blocks: [
					{
						t: 'p',
						text: 'Obligasi adalah surat utang jangka menengah hingga panjang yang diterbitkan pemerintah atau perusahaan. Pemegang obligasi menerima kupon secara berkala dan pokok pinjaman saat jatuh tempo.',
					},
					{
						t: 'p',
						text: 'Sukuk adalah alternatif syariah. Alih-alih bunga, sukuk memberi imbal hasil berdasarkan akad seperti ijarah (sewa), murabahah (margin jual beli), atau musyarakah (bagi hasil).',
					},
					{
						t: 'table',
						head: ['Aspek', 'Obligasi', 'Sukuk'],
						rows: [
							['Dasar hubungan', 'Utang-piutang', 'Kepemilikan aset atau akad kerja sama'],
							['Imbal hasil', 'Kupon (bunga)', 'Bagi hasil, margin, atau sewa'],
							['Penerbit', 'Pemerintah atau perusahaan', 'Pemerintah atau perusahaan (akad syariah)'],
						],
					},
				],
			},
			{
				id: 'reksa-dana-derivatif',
				h: 'Reksa dana dan derivatif',
				blocks: [
					{
						t: 'p',
						text: 'Reksa dana adalah wadah yang digunakan untuk menghimpun dana dari masyarakat pemodal, lalu diinvestasikan dalam portofolio efek oleh manajer investasi. Investor memiliki unit penyertaan, bukan saham perusahaan secara langsung.',
					},
					{
						t: 'ul',
						items: [
							'**Reksa dana pasar uang.** Investasi pada instrumen pasar uang dan surat utang jangka pendek.',
							'**Reksa dana pendapatan tetap.** Dominan obligasi.',
							'**Reksa dana saham.** Dominan saham, fluktuasi paling tinggi.',
							'**Reksa dana campuran.** Kombinasi saham dan obligasi.',
						],
					},
					{
						t: 'p',
						text: 'Instrumen derivatif adalah kontrak finansial yang nilainya diturunkan dari nilai aset dasarnya (underlying asset), seperti saham atau indeks harga saham. Derivatif dipakai untuk lindung nilai maupun spekulasi.',
					},
					{
						t: 'callout',
						title: 'Reksa dana bukan bebas risiko',
						text: 'Reksa dana tidak dijamin LPS dan nilainya bisa turun. Jenisnya menentukan risiko: reksa dana pasar uang paling stabil, reksa dana saham paling berfluktuasi.',
						tone: 'warn',
					},
				],
			},
		],
		keyPoints: [
			'Empat produk pasar modal: saham, obligasi & sukuk, reksa dana, dan derivatif.',
			'Saham memberi kepemilikan; obligasi memberi hak sebagai kreditur.',
			'Sukuk memakai akad syariah, bukan bunga.',
			'Reksa dana menghimpun dana masyarakat dan dikelola manajer investasi.',
			'Derivatif nilainya mengacu pada aset dasar dan berisiko tinggi.',
		],
		terms: [
			{ term: 'Dividen', def: 'Bagian laba perusahaan yang dibagikan kepada pemegang saham.' },
			{ term: 'Capital gain', def: 'Keuntungan dari selisih harga jual yang lebih tinggi dibanding harga beli.' },
			{ term: 'NAB', def: 'Nilai Aktiva Bersih — nilai total aset reksa dana dikurangi kewajibannya, per unit penyertaan.' },
			{ term: 'Sukuk', def: 'Surat berharga syariah yang imbal hasilnya berdasarkan akad, bukan bunga.' },
		],
	},
	{
		n: 15,
		slug: 'produk-pasar-uang',
		title: 'Produk Pasar Uang',
		desc: 'SBI, deposito, reksa dana pasar uang, commercial paper, dan SBN jangka pendek',
		chapter: 3,
		kicker: 'Pasar uang',
		minutes: 5,
		source: 'Kelompok 5 — Pasar Uang vs Pasar Modal',
		intro:
			'Produk pasar uang yang paling sering dijumpai berbeda-beda tingkat aksesnya. SBI dan commercial paper lebih banyak untuk lembaga; deposito dan reksa dana pasar uang terbuka untuk individu. SBN jangka pendek berada di antaranya.',
		sections: [
			{
				id: 'lima-produk',
				h: 'Lima produk yang dibahas',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'BI',
								title: 'SBI — Sertifikat Bank Indonesia',
								text: 'Surat berharga yang diterbitkan Bank Indonesia untuk mengatur jumlah uang yang beredar di masyarakat. Tenornya pendek dan risikonya sangat rendah.',
							},
							{
								label: 'Bank',
								title: 'Deposito',
								text: 'Simpanan di bank dalam jangka waktu tertentu yang memberikan bunga kepada nasabah. Dicairkan sebelum jatuh tempo biasanya dikenai penalti.',
							},
							{
								label: 'Reksa dana',
								title: 'Reksa dana pasar uang',
								text: 'Produk investasi yang dana investornya ditempatkan pada instrumen pasar uang dan surat utang jangka pendek. Cocok untuk likuiditas.',
							},
							{
								label: 'Korporasi',
								title: 'Commercial paper',
								text: 'Surat utang jangka pendek yang diterbitkan perusahaan untuk memenuhi kebutuhan dana atau modal kerja.',
							},
							{
								label: 'Pemerintah',
								title: 'SBN jangka pendek',
								text: 'Surat utang yang diterbitkan pemerintah dalam jangka waktu pendek dan memberikan imbal hasil kepada investor.',
							},
						],
					},
				],
			},
			{
				id: 'akses',
				h: 'Siapa bisa mengakses apa',
				blocks: [
					{
						t: 'table',
						head: ['Produk', 'Akses investor individu', 'Imbal hasil', 'Catatan'],
						rows: [
							['SBI', 'Tidak langsung', 'Diskonto/bunga', 'Umumnya lewat reksa dana atau bank'],
							['Deposito', 'Langsung', 'Bunga tetap', 'Dijamin LPS sampai batas tertentu'],
							['Reksa dana pasar uang', 'Langsung', 'NAB naik', 'Tidak dijamin LPS'],
							['Commercial paper', 'Tidak langsung', 'Diskonto', 'Umumnya untuk investor institusi'],
							['SBN jangka pendek', 'Bisa lewat agen distribusi', 'Diskonto', 'Diterbitkan pemerintah'],
						],
					},
				],
			},
			{
				id: 'memilih',
				h: 'Memilih produk pasar uang',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Dana darurat.** Pilih yang paling likuid dan stabil: deposito atau reksa dana pasar uang.',
							'**Dana operasional perusahaan.** Pertimbangkan deposito berjangka sesuai kebutuhan kas, atau commercial paper bila nominal besar.',
							'**Dana yang menunggu proyek.** Instrumen jangka pendek yang bisa dicairkan tanpa penalti besar.',
						],
					},
					{
						t: 'callout',
						title: 'Bandingkan biaya, bukan hanya imbal hasil',
						text: 'Dua produk dengan imbal hasil mirip bisa berbeda setelah biaya pengelolaan, pajak, dan penalti pencairan. Angka yang dipromosikan belum tentu angka yang diterima.',
						tone: 'tip',
					},
				],
			},
		],
		keyPoints: [
			'Lima produk pasar uang: SBI, deposito, reksa dana pasar uang, commercial paper, dan SBN jangka pendek.',
			'SBI diterbitkan BI untuk mengatur jumlah uang beredar.',
			'Deposito memberikan bunga tetap dan dijamin LPS sampai batas tertentu.',
			'Reksa dana pasar uang menempatkan dana pada instrumen jangka pendek.',
			'Akses investor individu terbatas pada produk tertentu; sisanya lewat perantara.',
		],
		terms: [
			{ term: 'SBN', def: 'Surat Berharga Negara — surat utang yang diterbitkan pemerintah Indonesia.' },
			{ term: 'Penalti pencairan', def: 'Denda yang dikenakan bank jika deposito dicairkan sebelum jatuh tempo.' },
			{ term: 'Unit penyertaan', def: 'Satuan kepemilikan investor dalam suatu reksa dana.' },
		],
	},
];
