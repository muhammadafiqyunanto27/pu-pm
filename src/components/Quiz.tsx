import { useEffect, useMemo, useRef, useState } from 'react';
import type { Soal } from '../data/types';

interface ChapterInfo {
	n: number;
	roman: string;
	title: string;
}

interface Props {
	soal: Soal[];
	base: string;
	chapters: ChapterInfo[];
}

type Stage = 'setup' | 'quiz' | 'result';

const shuffle = <T,>(items: T[]): T[] => {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[next[i], next[j]] = [next[j], next[i]];
	}
	return next;
};

const letters = ['A', 'B', 'C', 'D', 'E'];

export default function Quiz({ soal, base, chapters }: Props) {
	const [mode, setMode] = useState('all');
	const [stage, setStage] = useState<Stage>('setup');
	const [deck, setDeck] = useState<Soal[]>([]);
	const [idx, setIdx] = useState(0);
	const [answers, setAnswers] = useState<(number | null)[]>([]);
	const feedbackRef = useRef<HTMLDivElement>(null);

	const counts = useMemo(() => {
		const byChapter = new Map<number, number>();
		for (const item of soal) byChapter.set(item.chapter, (byChapter.get(item.chapter) ?? 0) + 1);
		return byChapter;
	}, [soal]);

	const current = deck[idx];
	const selected = answers[idx] ?? null;
	const answered = selected !== null;
	const isCorrect = answered && current ? selected === current.answer : false;

	useEffect(() => {
		if (stage === 'quiz' && answered) feedbackRef.current?.focus();
	}, [answered, idx, stage]);

	const start = () => {
		let picked: Soal[];
		if (mode === 'all') picked = shuffle(soal);
		else if (mode === 'quick') picked = shuffle(soal).slice(0, Math.min(10, soal.length));
		else picked = shuffle(soal.filter((item) => item.chapter === Number(mode.replace('bab-', ''))));

		setDeck(picked);
		setAnswers(Array(picked.length).fill(null));
		setIdx(0);
		setStage('quiz');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const answer = (choice: number) => {
		if (answered) return;
		const next = [...answers];
		next[idx] = choice;
		setAnswers(next);
	};

	const nextQuestion = () => {
		if (idx + 1 >= deck.length) {
			setStage('result');
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		setIdx(idx + 1);
	};

	const backToSetup = () => {
		setStage('setup');
		setDeck([]);
		setAnswers([]);
		setIdx(0);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const correctCount = deck.reduce(
		(total, item, index) => total + (answers[index] === item.answer ? 1 : 0),
		0
	);
	const pct = deck.length ? Math.round((correctCount / deck.length) * 100) : 0;
	const progressPct = deck.length ? ((idx + (answered ? 1 : 0)) / deck.length) * 100 : 0;

	const modeCards = [
		{ id: 'all', title: 'Semua soal', desc: `${soal.length} soal dari seluruh bab — urutan diacak.`, badge: `${soal.length} soal` },
		{ id: 'quick', title: 'Latihan cepat', desc: 'Sepuluh soal acak untuk pemanasan sebelum ujian.', badge: '10 soal' },
		...chapters.map((chapter) => ({
			id: `bab-${chapter.n}`,
			title: `Bab ${chapter.roman} · ${chapter.title}`,
			desc: 'Fokus pada satu bab, tanpa soal dari bab lain.',
			badge: `${counts.get(chapter.n) ?? 0} soal`,
		})),
	];

	if (stage === 'setup') {
		return (
			<div className="quiz-shell">
				<div className="quiz-top">
					<span className="quiz-progress-text">Latihan pilihan ganda</span>
					<div className="quiz-score">
						<span><b>{soal.length}</b> soal</span>
						<span><b>{chapters.length}</b> bab</span>
					</div>
				</div>
				<div className="quiz-body quiz-setup">
					<p className="eyebrow">Atur sesi</p>
					<h2>Mau diuji dari bagian mana?</h2>
					<p>
						Pilih satu mode, kerjakan soal satu per satu, lalu baca pembahasannya langsung.
						Semua soal sudah disusun dari materi di situs ini — tidak ada jebakan di luar cakupan.
					</p>
					<div className="quiz-mode-grid" role="group" aria-label="Pilih mode latihan">
						{modeCards.map((card) => (
							<button
								key={card.id}
								type="button"
								className="quiz-mode"
								aria-pressed={mode === card.id}
								onClick={() => setMode(card.id)}
							>
								<span className="quiz-progress-text">{card.badge}</span>
								<b>{card.title}</b>
								<small>{card.desc}</small>
							</button>
						))}
					</div>
					<div className="quiz-setup-foot">
						<button type="button" className="btn btn-solid" onClick={start}>
							Mulai latihan <span aria-hidden="true">→</span>
						</button>
						<span>Pilih mode dulu, lalu mulai</span>
					</div>
				</div>
			</div>
		);
	}

	if (stage === 'quiz' && current) {
		return (
			<div className="quiz-shell">
				<div className="quiz-top">
					<span className="quiz-progress-text">Soal {idx + 1} dari {deck.length}</span>
					<div className="quiz-score">
						<span>Benar <b>{correctCount}</b></span>
						<span>Salah <b>{answers.filter((value, i) => value !== null && value !== deck[i].answer).length}</b></span>
						<span>Bab <b>{current.chapter}</b></span>
					</div>
				</div>
				<div className="quiz-progress-bar" aria-hidden="true">
					<i style={{ width: `${progressPct}%` }} />
				</div>
				<div className="quiz-body">
					<div className="quiz-meta">
						<span className="tag">{current.difficulty}</span>
						<span className="badge">Bab {current.chapter}</span>
						<span className="result-count">Soal #{current.n}</span>
					</div>
					<h2 className="quiz-q" id={`q-${idx}`}>{current.q}</h2>
					<ul className="quiz-options" aria-labelledby={`q-${idx}`}>
						{current.options.map((option, choice) => {
							const correct = choice === current.answer;
							const picked = selected === choice;
							const cls = answered
								? correct
									? 'quiz-option is-correct'
									: picked
										? 'quiz-option is-wrong'
										: 'quiz-option is-muted'
								: 'quiz-option';
							return (
								<li key={option}>
									<button
										type="button"
										className={cls}
										disabled={answered}
										onClick={() => answer(choice)}
									>
										<span className="quiz-key">{letters[choice]}</span>
										<span>{option}</span>
										<span className="quiz-mark" aria-hidden="true">
											{answered && correct ? '✓' : answered && picked ? '×' : ''}
										</span>
										{answered && (
											<span className="sr-only">
												{correct ? 'Jawaban benar' : picked ? 'Jawabanmu, salah' : 'Bukan jawaban yang dipilih'}
											</span>
										)}
									</button>
								</li>
							);
						})}
					</ul>

					{answered && (
						<div
							className={`quiz-feedback ${isCorrect ? 'ok' : 'bad'}`}
							ref={feedbackRef}
							tabIndex={-1}
							role="status"
							aria-live="polite"
						>
							<b>{isCorrect ? 'Tepat.' : 'Belum tepat.'}</b>
							<p>{current.why}</p>
							{current.topicSlug && (
								<a href={`${base}/rangkuman/${current.topicSlug}`}>Baca topik terkait →</a>
							)}
						</div>
					)}

					<div className="quiz-actions">
						<button type="button" className="btn btn-ghost btn-sm" onClick={backToSetup}>
							Keluar
						</button>
						{answered && (
							<button type="button" className="btn btn-solid" onClick={nextQuestion}>
								{idx + 1 >= deck.length ? 'Lihat hasil' : 'Soal berikutnya'} <span aria-hidden="true">→</span>
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="quiz-shell">
			<div className="quiz-top">
				<span className="quiz-progress-text">Hasil latihan</span>
				<div className="quiz-score">
					<span><b>{correctCount}</b> benar</span>
					<span><b>{deck.length - correctCount}</b> salah</span>
				</div>
			</div>
			<div className="quiz-body quiz-result">
				<div className="score-ring" aria-hidden="true">
					<b>{pct}%</b>
					<span>Skor</span>
				</div>
				<h2>{pct >= 80 ? 'Sudah kuat.' : pct >= 60 ? 'Hampir sampai.' : 'Perlu satu putaran lagi.'}</h2>
				<p>
					{pct >= 80
						? 'Kamu menguasai pola soal dasar dan terapan. Ulangi bagian yang salah, lalu coba mode semua soal.'
						: pct >= 60
							? 'Dasar sudah terbaca, tetapi masih ada celah. Buka pembahasan di bawah dan baca ulang topik yang salah.'
							: 'Jangan langsung mengulang soal yang sama. Baca ulang rangkuman tiap bab, lalu kembali ke latihan.'}
				</p>
				<div className="quiz-breakdown">
					<div><b>{correctCount}</b>Benar</div>
					<div><b>{deck.length - correctCount}</b>Salah</div>
					<div><b>{deck.length}</b>Total soal</div>
					<div><b>{pct}%</b>Skor</div>
				</div>

				<div className="quiz-review">
					{deck.map((item, index) => {
						const picked = answers[index];
						const ok = picked === item.answer;
						return (
							<details key={`${item.n}-${index}`}>
								<summary>
									<span aria-hidden="true">{ok ? '✓' : '×'}</span> Soal {index + 1} · {item.q}
								</summary>
								<p>
									Jawabanmu: <b>{picked !== null ? `${letters[picked]}. ${item.options[picked]}` : '—'}</b>
									<br />
									Kunci: <b>{letters[item.answer]}. {item.options[item.answer]}</b>
									<br />
									{item.why}
								</p>
								{item.topicSlug && (
									<a href={`${base}/rangkuman/${item.topicSlug}`}>Baca topik →</a>
								)}
							</details>
						);
					})}
				</div>

				<div className="quiz-result-actions">
					<button type="button" className="btn btn-solid" onClick={start}>
						Ulangi mode ini
					</button>
					<button type="button" className="btn btn-ghost" onClick={backToSetup}>
						Pilih mode lain
					</button>
				</div>
			</div>
		</div>
	);
}
