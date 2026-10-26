import type { Topic } from '../types';

export const ch5: Topic[] = [
	{
		n: 23,
		slug: 'pengertian-valuta-asing',
		title: 'Pengertian, Fungsi & Jenis Valuta Asing',
		desc: 'Mata uang asing, pasar valas, dan empat pengelompokannya',
		chapter: 5,
		kicker: 'Valuta asing',
		minutes: 6,
		source: 'Kelompok 6 — Valuta Asing',
		intro:
			'Valuta asing atau valas adalah mata uang asing yang diakui secara internasional dan digunakan sebagai alat pembayaran sah dalam perdagangan atau transaksi lintas negara. Valas berkaitan erat dengan pasar valuta asing, tempat mata uang dipertukarkan berdasarkan nilai tukar tertentu.',
		sections: [
			{
				id: 'definisi',
				h: 'Definisi dan pasar valas',
				blocks: [
					{
						t: 'p',
						text: 'Valuta asing atau valas adalah mata uang asing yang diakui secara internasional dan digunakan sebagai alat pembayaran sah dalam perdagangan atau transaksi lintas negara.',
					},
					{
						t: 'p',
						text: 'Valas berkaitan erat dengan pasar valuta asing (foreign exchange market), yaitu pasar tempat mata uang dari berbagai negara dipertukarkan berdasarkan nilai tukar tertentu. Pasar ini berjalan hampir 24 jam dan sebagian besar transaksinya bersifat over-the-counter.',
					},
					{
						t: 'callout',
						title: 'Valas ≠ kurs',
						text: 'Valas adalah mata uangnya. Kurs adalah harga valas terhadap mata uang lain. Satu dolar tetap satu dolar, tetapi nilainya dalam rupiah bisa berubah setiap hari.',
						tone: 'note',
					},
				],
			},
			{
				id: 'contoh',
				h: 'Contoh mata uang asing',
				blocks: [
					{
						t: 'table',
						head: ['Kode', 'Mata uang', 'Negara/region'],
						rows: [
							['USD', 'Dolar Amerika Serikat', 'Amerika Serikat'],
							['EUR', 'Euro', 'Zona euro'],
							['JPY', 'Yen Jepang', 'Jepang'],
							['GBP', 'Pound sterling Inggris', 'Inggris'],
							['SGD', 'Dolar Singapura', 'Singapura'],
							['MYR', 'Ringgit Malaysia', 'Malaysia'],
						],
					},
				],
			},
			{
				id: 'fungsi',
				h: 'Fungsi dan manfaat',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Alat pembayaran internasional.** Dipakai untuk membayar transaksi perdagangan barang dan jasa antarnegara.',
							'**Mendukung ekspor dan impor.** Membantu perusahaan bertransaksi dengan mitra bisnis dari negara lain.',
							'**Mempermudah investasi internasional.** Investor dapat membeli aset atau menanamkan modal di negara lain.',
							'**Mendukung pariwisata internasional.** Wisatawan dapat membayar hotel, makanan, transportasi, dan tiket wisata.',
						],
					},
				],
			},
			{
				id: 'jenis',
				h: 'Empat pengelompokan valas',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: 'Fisik',
								title: 'Valuta asing fisik',
								text: 'Mata uang asing dalam bentuk uang kertas atau uang logam yang dapat dipegang langsung.',
							},
							{
								label: 'Nonfisik',
								title: 'Valuta asing nonfisik',
								text: 'Valuta asing yang dimiliki atau digunakan melalui rekening, simpanan bank, atau instrumen keuangan tanpa bentuk uang tunai.',
							},
							{
								label: 'Hard',
								title: 'Hard currency',
								text: 'Mata uang yang relatif stabil, banyak dipakai dalam transaksi internasional, dan umumnya likuiditasnya tinggi.',
							},
							{
								label: 'Soft',
								title: 'Soft currency',
								text: 'Mata uang yang relatif kurang stabil atau penerimaan internasionalnya lebih terbatas dibanding mata uang utama.',
							},
						],
					},
					{
						t: 'p',
						text: 'Hard currency biasanya menjadi pilihan untuk cadangan devisa dan penyelesaian transaksi internasional. Soft currency lebih berisiko karena nilainya mudah berubah dan pasar valasnya lebih tipis.',
					},
				],
			},
		],
		keyPoints: [
			'Valas adalah mata uang asing yang diakui internasional sebagai alat pembayaran lintas negara.',
			'Pasar valas mempertukarkan mata uang berdasarkan kurs dan berjalan sebagian besar secara OTC.',
			'Fungsi valas: pembayaran internasional, ekspor-impor, investasi, dan pariwisata.',
			'Jenisnya: fisik/nonfisik dan hard/soft currency.',
			'Contoh mata uang utama: USD, EUR, JPY, GBP, SGD, MYR.',
		],
		terms: [
			{ term: 'Valuta asing', def: 'Mata uang asing yang diakui secara internasional sebagai alat pembayaran lintas negara.' },
			{ term: 'Foreign exchange market', def: 'Pasar tempat mata uang berbagai negara dipertukarkan berdasarkan kurs.' },
			{ term: 'Hard currency', def: 'Mata uang yang relatif stabil dan banyak dipakai dalam transaksi internasional.' },
			{ term: 'Soft currency', def: 'Mata uang yang relatif kurang stabil atau penerimaan internasionalnya terbatas.' },
		],
	},
	{
		n: 24,
		slug: 'kurs-dan-transaksi-valas',
		title: 'Kurs & Jenis Transaksi Valas',
		desc: 'Kurs jual, kurs beli, spot, forward, futures, swap, dan options',
		chapter: 5,
		kicker: 'Valuta asing',
		minutes: 7,
		source: 'Kelompok 6 — Valuta Asing',
		intro:
			'Kurs adalah nilai tukar suatu mata uang terhadap mata uang lain. Dari kurs lahir dua harga yang perlu dibedakan: kurs jual dan kurs beli. Sementara itu, transaksi valas punya lima bentuk utama — spot, forward, futures, swap, dan options.',
		sections: [
			{
				id: 'kurs',
				h: 'Kurs dan cara membacanya',
				blocks: [
					{
						t: 'p',
						text: 'Kurs valuta asing adalah nilai tukar suatu mata uang terhadap mata uang negara lain. Contoh: USD 1 = Rp16.000, artinya satu dolar AS setara dengan Rp16.000.',
					},
					{
						t: 'table',
						head: ['Istilah', 'Artinya', 'Contoh'],
						rows: [
							['Kurs jual', 'Kurs yang dipakai bank saat menjual valas kepada nasabah', 'Kita membeli dolar dengan rupiah'],
							['Kurs beli', 'Kurs yang dipakai bank saat membeli valas dari nasabah', 'Kita menukar dolar menjadi rupiah'],
						],
					},
					{
						t: 'callout',
						title: 'Selalu dari sudut pandang bank',
						text: 'Kurs jual lebih tinggi daripada kurs beli. Selisihnya disebut spread, dan itulah salah satu sumber pendapatan bank. Karena itu, menukar uang lalu menukarnya kembali dalam waktu singkat hampir selalu menghasilkan kerugian kecil.',
						tone: 'note',
					},
				],
			},
			{
				id: 'jenis-transaksi',
				h: 'Lima jenis transaksi',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Transaksi spot',
								text: 'Pertukaran mata uang dengan penyerahan segera atau dalam waktu dekat. Contoh: menukar rupiah menjadi dolar untuk perjalanan ke luar negeri.',
							},
							{
								title: 'Transaksi forward',
								text: 'Kurs disepakati sekarang, tetapi penyerahan mata uang dilakukan pada masa mendatang. Contoh: perusahaan menyepakati kurs dolar untuk membayar impor tiga bulan kemudian.',
							},
							{
								title: 'Transaksi futures',
								text: 'Kontrak berjangka yang terstandarisasi dan diperdagangkan di bursa. Contoh: perusahaan mengelola risiko perubahan kurs dengan kontrak berjangka.',
							},
							{
								title: 'Transaksi swap',
								text: 'Pertukaran mata uang yang disertai kesepakatan transaksi kebalikan pada waktu berbeda. Contoh: bank menukar mata uang sekarang dan menyepakati pertukaran kembali di tanggal mendatang.',
							},
							{
								title: 'Transaksi options',
								text: 'Kontrak yang memberikan hak, tetapi bukan kewajiban, untuk membeli atau menjual mata uang pada kurs tertentu. Contoh: perusahaan memiliki hak membeli dolar pada kurs yang disepakati.',
							},
						],
					},
				],
			},
			{
				id: 'banding',
				h: 'Perbandingan singkat',
				blocks: [
					{
						t: 'table',
						head: ['Jenis', 'Kapan diselesaikan', 'Kewajiban', 'Tempat'],
						rows: [
							['Spot', 'Segera/1–2 hari', 'Wajib', 'OTC'],
							['Forward', 'Masa depan', 'Wajib', 'OTC'],
							['Futures', 'Masa depan', 'Wajib', 'Bursa'],
							['Swap', 'Dua arah, dua waktu', 'Wajib', 'OTC'],
							['Options', 'Saat atau sebelum jatuh tempo', 'Hak, bukan kewajiban', 'OTC atau bursa'],
						],
					},
					{
						t: 'p',
						text: 'Perbedaan forward dan futures terletak pada standarisasi dan tempat. Forward disepakati langsung antar pihak, sedangkan futures terstandarisasi dan diperdagangkan di bursa. Options memberi hak, sehingga pembeli harus membayar premi.',
					},
				],
			},
			{
				id: 'contoh',
				h: 'Contoh perhitungan kurs',
				blocks: [
					{
						t: 'p',
						text: 'Seseorang membeli USD 100 dengan kurs jual Rp16.500 per dolar, lalu beberapa waktu kemudian menjualnya dengan kurs beli Rp16.700 setelah kurs bergerak naik.',
					},
					{
						t: 'table',
						head: ['Langkah', 'Perhitungan', 'Hasil'],
						rows: [
							['Membeli USD 100', '100 × Rp16.500', 'Rp1.650.000'],
							['Menjual USD 100', '100 × Rp16.700', 'Rp1.670.000'],
							['Keuntungan kotor', 'Rp1.670.000 − Rp1.650.000', 'Rp20.000'],
						],
					},
					{
						t: 'callout',
						title: 'Hati-hati membaca contoh',
						text: 'Keuntungan di atas terjadi karena kurs bergerak naik. Kalau kurs tidak berubah, menjual kembali pada kurs beli yang lebih rendah dari kurs jual akan menghasilkan kerugian sebesar spread.',
						tone: 'warn',
					},
				],
			},
		],
		keyPoints: [
			'Kurs adalah nilai tukar suatu mata uang terhadap mata uang lain.',
			'Kurs jual dipakai bank saat menjual valas; kurs beli saat membeli valas dari nasabah.',
			'Lima transaksi: spot, forward, futures, swap, dan options.',
			'Forward disepakati antar pihak; futures terstandarisasi dan diperdagangkan di bursa.',
			'Options memberi hak, bukan kewajiban, dan memerlukan premi.',
		],
		terms: [
			{ term: 'Kurs jual', def: 'Harga valas saat bank menjualnya kepada nasabah.' },
			{ term: 'Kurs beli', def: 'Harga valas saat bank membelinya dari nasabah.' },
			{ term: 'Spread', def: 'Selisih antara kurs jual dan kurs beli.' },
			{ term: 'Forward', def: 'Kontrak valas dengan kurs yang disepakati sekarang untuk penyerahan di masa depan.' },
			{ term: 'Premi opsi', def: 'Biaya yang dibayar pembeli opsi untuk memperoleh hak atas kontrak.' },
		],
	},
	{
		n: 25,
		slug: 'mekanisme-motif-pelaku-valas',
		title: 'Mekanisme, Motif & Pelaku Pasar Valas',
		desc: 'Lima tahap transaksi, empat motif, dan lima pelaku utama',
		chapter: 5,
		kicker: 'Valuta asing',
		minutes: 6,
		source: 'Kelompok 6 — Valuta Asing',
		intro:
			'Transaksi valas punya mekanisme yang sederhana tetapi perlu urutan: tentukan kebutuhan, periksa kurs, hitung nilai, lakukan transaksi, lalu selesaikan. Di baliknya ada empat motif dan lima pelaku yang menggerakkan pasar.',
		sections: [
			{
				id: 'mekanisme',
				h: 'Lima tahap transaksi',
				blocks: [
					{
						t: 'steps',
						items: [
							{
								title: 'Menentukan kebutuhan',
								text: 'Tentukan mata uang dan jumlah yang akan ditukar, serta kapan dana dibutuhkan.',
							},
							{
								title: 'Memeriksa kurs',
								text: 'Ketahui kurs jual atau kurs beli yang berlaku. Bandingkan antar penyedia jasa jika perlu.',
							},
							{
								title: 'Menghitung nilai transaksi',
								text: 'Hitung jumlah uang berdasarkan kurs. Jangan lupa memperhitungkan biaya transaksi.',
							},
							{
								title: 'Melakukan transaksi',
								text: 'Tukarkan mata uang melalui bank atau penyedia jasa penukaran resmi.',
							},
							{
								title: 'Penyelesaian transaksi',
								text: 'Terima mata uang atau dana sesuai transaksi yang dilakukan, lalu simpan buktinya.',
							},
						],
					},
				],
			},
			{
				id: 'motif',
				h: 'Empat motif',
				blocks: [
					{
						t: 'table',
						head: ['Motif', 'Penjelasan', 'Contoh'],
						rows: [
							[
								'Perdagangan internasional',
								'Importir butuh valas untuk membayar barang dari luar negeri; eksportir menjual valas hasil pembayaran ekspor.',
								'Importir elektronik membayar supplier di Tiongkok dalam USD',
							],
							[
								'Lindung nilai (hedging)',
								'Perusahaan multinasional melindungi diri dari perubahan kurs lewat forward atau options.',
								'Eksportir mengunci kurs untuk penerimaan tiga bulan ke depan',
							],
							[
								'Investasi',
								'Investor membeli dan menjual valas untuk memperoleh capital gain dari selisih kurs.',
								'Investor menukar rupiah ke dolar saat rupiah diprediksi melemah',
							],
							[
								'Spekulasi',
								'Pelaku mencari keuntungan jangka pendek dari naik turunnya nilai tukar.',
								'Trader membuka posisi berdasarkan prediksi pergerakan kurs',
							],
						],
					},
					{
						t: 'callout',
						title: 'Hedging vs spekulasi',
						text: 'Hedging dilakukan karena ada eksposur nyata yang ingin dilindungi. Spekulasi dilakukan untuk mencari keuntungan dari pergerakan harga tanpa eksposur yang perlu dilindungi.',
						tone: 'note',
					},
				],
			},
			{
				id: 'pelaku',
				h: 'Lima pelaku pasar valas',
				blocks: [
					{
						t: 'cards',
						items: [
							{
								label: '01',
								title: 'Bank internasional',
								text: 'Pelaku terbesar. Bank berperan sebagai perantara sekaligus penyedia layanan valuta asing bagi nasabahnya.',
							},
							{
								label: '02',
								title: 'Perusahaan domestik dan asing',
								text: 'Membeli mata uang negara tujuan untuk membayar transaksi perdagangan internasional, misalnya saat mengimpor barang.',
							},
							{
								label: '03',
								title: 'Pemerintah',
								text: 'Bertransaksi valas untuk membayar utang luar negeri, menerima pendapatan dari luar negeri, dan menjaga stabilitas nilai tukar.',
							},
							{
								label: '04',
								title: 'Investor',
								text: 'Individu maupun institusi mencari keuntungan dari fluktuasi nilai tukar, langsung atau lewat derivatif.',
							},
							{
								label: '05',
								title: 'Broker',
								text: 'Perusahaan perantara yang mempertemukan pembeli dan penjual valas, sekaligus menawarkan produk derivatif.',
							},
						],
					},
				],
			},
			{
				id: 'rantai',
				h: 'Rantai transaksi dari nasabah ke pasar',
				blocks: [
					{
						t: 'p',
						text: 'Nasabah tidak langsung bertransaksi di pasar antarbank. Ia masuk lewat bank, lalu bank mengelola posisinya di pasar antarbank. Broker membantu bank menemukan lawan transaksi, dan bank sentral bisa masuk untuk menjaga stabilitas.',
					},
					{
						t: 'ol',
						items: [
							'Nasabah memesan valas ke bank.',
							'Bank menetapkan kurs dan mencatat posisi.',
							'Bank menutup posisi di pasar antarbank atau dengan bank lain.',
							'Broker mempertemukan bank dengan lawan transaksi.',
							'Bank sentral mengintervensi bila diperlukan untuk menjaga stabilitas.',
						],
					},
				],
			},
		],
		keyPoints: [
			'Mekanisme transaksi: tentukan kebutuhan, periksa kurs, hitung nilai, lakukan transaksi, selesaikan.',
			'Motif transaksi: perdagangan internasional, hedging, investasi, dan spekulasi.',
			'Pelaku utama: bank internasional, perusahaan, pemerintah, investor, dan broker.',
			'Bank adalah pelaku terbesar dan perantara bagi nasabah.',
			'Broker mempertemukan pembeli dan penjual; bank sentral menjaga stabilitas.',
		],
		terms: [
			{ term: 'Hedging', def: 'Perlindungan nilai posisi dari pergerakan kurs yang merugikan.' },
			{ term: 'Spekulasi', def: 'Pengambilan posisi untuk mencari keuntungan dari pergerakan harga, tanpa eksposur yang perlu dilindungi.' },
			{ term: 'Broker valas', def: 'Perantara yang mempertemukan pembeli dan penjual valuta asing.' },
			{ term: 'Pasar antarbank', def: 'Pasar tempat bank bertransaksi valas satu sama lain.' },
		],
	},
	{
		n: 26,
		slug: 'faktor-nilai-tukar',
		title: 'Faktor Nilai Tukar & Hubungan dengan PU/PM',
		desc: 'Delapan faktor yang menggerakkan kurs dan dampaknya ke pasar keuangan',
		chapter: 5,
		kicker: 'Valuta asing',
		minutes: 6,
		source: 'Kelompok 6 — Valuta Asing',
		intro:
			'Nilai tukar tidak bergerak sendiri. Ada delapan faktor yang memengaruhinya, dari permintaan-penawaran sampai ekspektasi pasar. Perubahan kurs kemudian merambat ke pasar uang dan pasar modal.',
		sections: [
			{
				id: 'delapan-faktor',
				h: 'Delapan faktor',
				blocks: [
					{
						t: 'table',
						head: ['Faktor', 'Cara memengaruhi kurs'],
						rows: [
							['Permintaan dan penawaran', 'Menentukan kuat atau lemahnya nilai mata uang di pasar.'],
							['Tingkat inflasi', 'Inflasi tinggi cenderung melemahkan nilai mata uang.'],
							['Tingkat suku bunga', 'Memengaruhi minat investor terhadap suatu mata uang.'],
							['Kondisi ekonomi', 'Ekonomi yang stabil dapat memperkuat nilai mata uang.'],
							['Stabilitas politik', 'Kondisi politik yang stabil meningkatkan kepercayaan investor.'],
							['Neraca perdagangan', 'Perbandingan ekspor dan impor memengaruhi permintaan mata uang.'],
							['Kebijakan pemerintah dan bank sentral', 'Kebijakan ekonomi dan moneter dapat memengaruhi nilai tukar.'],
							['Ekspektasi pasar', 'Perkiraan investor terhadap kondisi ekonomi memengaruhi permintaan dan penawaran.'],
						],
					},
				],
			},
			{
				id: 'mekanisme',
				h: 'Bagaimana faktor-faktor itu bekerja',
				blocks: [
					{
						t: 'p',
						text: 'Suku bunga dan inflasi adalah dua faktor yang paling sering dibahas. Ketika suku bunga domestik naik, imbal hasil aset rupiah menjadi lebih menarik, sehingga permintaan rupiah meningkat dan kurs cenderung menguat. Sebaliknya, inflasi tinggi menggerus daya beli, sehingga kurs cenderung melemah.',
					},
					{
						t: 'ul',
						items: [
							'**Neraca perdagangan surplus.** Ekspor lebih besar dari impor, permintaan valas untuk impor relatif kecil, rupiah cenderung menguat.',
							'**Neraca perdagangan defisit.** Impor lebih besar dari ekspor, permintaan valas naik, rupiah cenderung melemah.',
							'**Ekspektasi.** Kalau pasar percaya rupiah akan melemah, orang berbondong membeli dolar, dan ekspektasi itu bisa terwujud sendiri.',
						],
					},
					{
						t: 'callout',
						title: 'Faktor tidak bekerja sendiri',
						text: 'Kurs adalah hasil interaksi semua faktor. Suku bunga naik belum tentu menguatkan rupiah kalau stabilitas politik sedang terganggu atau ekspektasi pasar memburuk.',
						tone: 'note',
					},
				],
			},
			{
				id: 'hubungan',
				h: 'Hubungan dengan pasar uang dan pasar modal',
				blocks: [
					{
						t: 'p',
						text: 'Valuta asing berhubungan dengan pasar uang dan pasar modal karena perubahan kurs dan suku bunga dapat memengaruhi investasi.',
					},
					{
						t: 'table',
						head: ['Pasar', 'Hubungan', 'Dampak perubahan kurs'],
						rows: [
							[
								'Pasar uang',
								'Perbedaan suku bunga memengaruhi arus modal dan nilai tukar.',
								'Modal asing masuk saat imbal hasil domestik menarik; likuiditas valas berubah.',
							],
							[
								'Pasar modal',
								'Perubahan kurs memengaruhi keuntungan investor dan biaya perusahaan.',
								'Emiten dengan utang valas tertekan saat rupiah melemah; investor asing menghitung untung dalam valas.',
							],
						],
					},
				],
			},
			{
				id: 'dampak',
				h: 'Siapa yang terdampak',
				blocks: [
					{
						t: 'table',
						head: ['Pihak', 'Saat rupiah melemah', 'Saat rupiah menguat'],
						rows: [
							['Importir', 'Biaya impor naik', 'Biaya impor turun'],
							['Eksportir', 'Pendapatan rupiah naik', 'Pendapatan rupiah turun'],
							['Perusahaan berutang valas', 'Beban utang naik', 'Beban utang turun'],
							['Investor asing', 'Nilai aset dalam valas turun', 'Nilai aset dalam valas naik'],
							['Wisatawan domestik ke luar negeri', 'Biaya perjalanan naik', 'Biaya perjalanan turun'],
						],
					},
					{
						t: 'p',
						text: 'Karena dampaknya berbeda-beda, perusahaan biasanya melakukan lindung nilai sesuai eksposurnya. Importir melindungi kewajiban valas; eksportir melindungi penerimaan valas. Investor asing mempertimbangkan return dalam mata uang asalnya, bukan hanya return rupiah.',
					},
				],
			},
		],
		keyPoints: [
			'Delapan faktor: permintaan-penawaran, inflasi, suku bunga, kondisi ekonomi, stabilitas politik, neraca perdagangan, kebijakan pemerintah/BI, dan ekspektasi pasar.',
			'Inflasi tinggi cenderung melemahkan mata uang; suku bunga tinggi cenderung menarik modal.',
			'Kurs memengaruhi arus modal di pasar uang dan keuntungan investor di pasar modal.',
			'Importir dan perusahaan berutang valas dirugikan saat rupiah melemah; eksportir diuntungkan.',
			'Faktor-faktor tersebut bekerja bersamaan, bukan satu per satu.',
		],
		terms: [
			{ term: 'Neraca perdagangan', def: 'Perbandingan nilai ekspor dan impor suatu negara dalam periode tertentu.' },
			{ term: 'Arus modal', def: 'Perpindahan dana investasi antarnegara, dipengaruhi suku bunga dan ekspektasi.' },
			{ term: 'Ekspektasi pasar', def: 'Perkiraan pelaku pasar terhadap arah pergerakan harga atau kurs di masa depan.' },
			{ term: 'Intervensi', def: 'Tindakan bank sentral membeli atau menjual valas untuk memengaruhi kurs.' },
		],
	},
	{
		n: 27,
		slug: 'risiko-valas-peran-bi',
		title: 'Risiko Valas, Contoh & Peran Bank Indonesia',
		desc: 'Keuntungan, risiko, perhitungan kurs, dan lima cara BI menjaga rupiah',
		chapter: 5,
		kicker: 'Valuta asing',
		minutes: 6,
		source: 'Kelompok 6 — Valuta Asing',
		intro:
			'Transaksi valas punya dua sisi: mempermudah transaksi internasional dan membuka peluang keuntungan, tetapi juga membawa risiko perubahan kurs. Di tingkat negara, Bank Indonesia menjaga stabilitas rupiah lewat lima instrumen utama.',
		sections: [
			{
				id: 'untung-risiko',
				h: 'Keuntungan dan risiko',
				blocks: [
					{
						t: 'table',
						head: ['Keuntungan', 'Risiko'],
						rows: [
							['Mempermudah transaksi internasional', 'Perubahan kurs yang tidak menentu'],
							['Memberikan peluang keuntungan', 'Kerugian akibat kesalahan prediksi'],
							['Membantu diversifikasi investasi', 'Risiko penipuan investasi ilegal'],
						],
					},
					{
						t: 'p',
						text: 'Risiko terbesar bagi individu bukan hanya pergerakan kurs, tetapi juga penipuan berkedok investasi valas. Imbal hasil tetap yang dijanjikan besar sering kali merupakan tanda skema ponzi, bukan investasi yang sah.',
					},
				],
			},
			{
				id: 'contoh',
				h: 'Contoh perhitungan',
				blocks: [
					{
						t: 'p',
						text: 'Seseorang membeli USD 100 dengan kurs jual Rp16.500 per dolar. Beberapa waktu kemudian ia menjualnya dengan kurs beli Rp16.700 setelah kurs bergerak naik.',
					},
					{
						t: 'table',
						head: ['Langkah', 'Perhitungan', 'Hasil'],
						rows: [
							['Membeli USD 100', '100 × Rp16.500', 'Rp1.650.000'],
							['Menjual USD 100', '100 × Rp16.700', 'Rp1.670.000'],
							['Keuntungan kotor', 'Rp1.670.000 − Rp1.650.000', 'Rp20.000'],
							['Setelah biaya transaksi', 'Tergantung penyedia', 'Lebih kecil dari Rp20.000'],
						],
					},
					{
						t: 'callout',
						title: 'Perhatikan arah kurs',
						text: 'Kalau kurs tidak bergerak, membeli di kurs jual lalu menjual di kurs beli akan menghasilkan kerugian sebesar spread. Keuntungan hanya muncul jika kenaikan kurs melebihi spread dan biaya.',
						tone: 'warn',
					},
				],
			},
			{
				id: 'peran-bi',
				h: 'Lima peran Bank Indonesia',
				blocks: [
					{
						t: 'ol',
						items: [
							'**Melakukan intervensi di pasar valuta asing.** Membeli atau menjual valas untuk meredam gejolak kurs.',
							'**Menetapkan kebijakan suku bunga.** Suku bunga memengaruhi arus modal dan permintaan valas.',
							'**Mengelola cadangan devisa.** Cadangan devisa menjadi bantalan untuk menjaga stabilitas rupiah.',
							'**Menjaga inflasi tetap terkendali.** Inflasi yang stabil mendukung kepercayaan terhadap rupiah.',
							'**Mengawasi dan mengembangkan pasar keuangan.** Termasuk pasar valas dan instrumen lindung nilai.',
						],
					},
				],
			},
			{
				id: 'praktik',
				h: 'Praktik aman bertransaksi valas',
				blocks: [
					{
						t: 'ul',
						items: [
							'Gunakan bank atau penyedia jasa penukaran yang berizin resmi.',
							'Bandingkan kurs jual dan kurs beli, bukan hanya kurs tengah yang dipromosikan.',
							'Hitung total biaya: spread, komisi, dan biaya transfer.',
							'Untuk kebutuhan usaha, pertimbangkan lindung nilai sesuai eksposur nyata.',
							'Waspadai janji imbal hasil tetap yang jauh di atas pasar.',
						],
					},
					{
						t: 'callout',
						title: 'Stabilitas adalah barang publik',
						text: 'Kurs yang stabil memudahkan perencanaan usaha dan menjaga daya beli masyarakat. Karena itu stabilitas rupiah bukan hanya urusan bank sentral, tetapi juga memerlukan kebijakan fiskal, regulasi, dan kepercayaan pasar.',
						tone: 'tip',
					},
				],
			},
		],
		keyPoints: [
			'Keuntungan valas: mempermudah transaksi internasional, peluang keuntungan, dan diversifikasi.',
			'Risiko valas: perubahan kurs, kesalahan prediksi, dan penipuan investasi ilegal.',
			'Perhitungan keuntungan memakai selisih kurs jual dan kurs beli, dikurangi biaya.',
			'Lima peran BI: intervensi, suku bunga, cadangan devisa, inflasi, dan pengawasan pasar.',
			'Gunakan penyedia resmi dan waspadai janji imbal hasil tidak wajar.',
		],
		terms: [
			{ term: 'Cadangan devisa', def: 'Aset valas yang dipegang bank sentral untuk menjaga stabilitas dan membiayai kebutuhan internasional.' },
			{ term: 'Intervensi valas', def: 'Kegiatan bank sentral membeli atau menjual valas untuk memengaruhi kurs.' },
			{ term: 'Skema ponzi', def: 'Penipuan investasi yang membayar imbal hasil dari dana investor baru, bukan dari keuntungan usaha.' },
			{ term: 'Daya beli', def: 'Kemampuan uang untuk membeli barang dan jasa.' },
		],
	},
];
