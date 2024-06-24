import { Book } from '../../@types';

const books: Book[] = [
	{
		id: '1',
		title:
			'Raul Brandão, um intelectual no entre-séculos (Estudos para Luci Ruas',
		description:
			'Após anos de espera silenciosa, o mercado editorial brasileiro conta agora com este Raul Brandão, um intelectual no entre-séculos (Estudos para Luci Ruas), que vem suprir uma severa lacuna nos estudos sobre a obra de Raul Brandão, escritor português dos finais do século XIX e primeiras décadas do século XX. Experimentador do processo de heteronímia (antes, portanto, de Fernando Pessoa criar os seus famosos heterônimos), e arauto do fim-de-século – com a sua estética e filosofia decadentistas –, Raul Brandão está devidamente estudado neste volume, que reúne 18 ensaios (entre os quais a republicação de um texto da professora Luci Ruas) sobre os mais variados aspectos da arte brandoniana, escritor que pode, indubitavelmente, ser considerado o ponto de viragem para a modernidade, não apenas em Portugal, mas no conjunto das literaturas em língua portuguesa. Passando por quase todas as obras de Raul Brandão, incluindo uma seção específica sobre o seu Teatro – nos quais se fazem constar 4 ensaios –, o livro agora em mãos do leitor figura, desde já, como bibliografia essencial para o estudioso iniciante ou experimentado na literatura brandoniana.',
		categories: ['Romance'],
		author: 'Otávio Rios',
		image:
			'https://books.google.com/books/publisher/content?id=vr50BAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72zzUVVKbzalsmC6NyC9tiXBiLMRSu2M6rMwmUzpIsOyIZw5mwTr_hW510yxnmTpQjVVMgWgiunPX9w_x_eIKA57fwPAGi1UmfJ2GD9qdtFL230JpJKCykIvgKwfmpv14Tj3rjN&source=gbs_api',
		color: ['black'],
		variants: ['Capa dura'],
		sale: {
			minQuantity: '5',
			price: '2290',
		},
		type: 'book'
	},
	{
		id: '2',
		title: 'Verity',
		description:
			'Um casal apaixonado. Uma intrusa. Três mentes doentias. Finalista do prêmio Goodreads como melhor romance de 2019, Verity é o primeiro thriller de Colleen Hoover e deixa os leitores envolvidos do começo ao fim.',
		categories: ['Romance',  'Suspense', 'Ficção'],
		author: 'Colleen Hoover',
		image:
			'https://m.media-amazon.com/images/I/91SDZ2eUj+L._SY522_.jpg',
		color: ['Black'],
		variants: ['Capa dura', 'Kindle'],
		sale: {
			minQuantity: '5',
			price: '4190',
		},
		type: 'book'
	},
	{
		id: '3',
		title: 'É Assim que Acaba: 1',
		description:
			'Em É assim que acaba , Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.',
		categories: ['Romance'],
		author: 'José Martiniano de Alencar',
		image:
			'https://m.media-amazon.com/images/I/91r5G8RxqfL._SY522_.jpg',
		color: ['Pink'],
		variants: ['Capa Comum', 'Capa dura', 'Kindle'],
		sale: {
			minQuantity: '10',
			price: '2795',
		},
		type: 'book'
	},
	{
		id: '4',
		title: 'A culpa é das estrelas',
		description:
			'Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante ― o que lhe dá a promessa de viver mais alguns anos ―, o último capítulo de sua história foi escrito no momento do diagnóstico.',
		categories: ['Romance'],
		author: 'John Green',
		image:
			'https://m.media-amazon.com/images/I/51M9IbBqxCL._SY522_.jpg',
		color: ['cornflowerblue'],
		variants: ['Capa Comum'],
		sale: {
			minQuantity: '10',
			price: '4490',
		},
		type: 'book'
	},
	{
		id: '5',
		title: 'A Ascensão do Dragão: Uma história ilustrada da dinastia Targaryen',
		description:
			'Durante os séculos em que os Targaryen ocuparam o Trono de Ferro, seus dragões comandaram os céus. A jornada da única família de senhores de dragões que sobreviveu à Destruição de Valíria é o retrato de uma política tortuosa forjada por atos nobres e covardes, alianças e traições. Como no épico romance Fogo & Sangue , A Ascensão do Dragão retoma o surgimento dos Targaryen e sua chegada ao poder, desde a conquista de Westeros por Aegon Targaryen até a infame Dança dos Dragões ― a sangrenta guerra civil que quase destruiu de uma vez por todas seu reinado.',
		categories: ['Ação', 'Aventura'],
		author: 'Linda Antonsson, George R. R. Martin, Elio M. García Jr.',
		image:
			'https://m.media-amazon.com/images/I/91889MYAFqL._SY522_.jpg',
		color: ['Black'],
		variants: ['Capa Comum', 'Kindle'],
		newness: true,
		sale: {
			minQuantity: '10',
			price: '10000',
		},
		type: 'book'
	},
	{
		id: '6',
		title: 'Confissões de Santo Agostinho - Edição de Luxo Almofadada',
		description:
			'Neste livro autobiográfico, Santo Agostinho registrou suas reflexões, cujo propósito é aproximar as pessoas de Deus, assim como ele próprio foi convertido do maniqueísmo - a doutrina que postula um conflito entre o reino da luz e o das sombras - para o cristianismo.As conclusões às quais Santo Agostinho chegou têm relevância para as aspirações espirituais tanto de homens quanto de mulheres nos dias atuais. Esse pensador da Antiguidade enfatiza, antes de tudo, que a "palavra de Deus é edificante quando usada de maneira legítima, pois seu propósito é promover a caridade, que brota de um coração puro, de uma boa consciência e de uma fé genuína." Agostinho ressalta que, segundo Cristo, todos os mandamentos e profecias se resumem a dois princípios fundamentais.',
		categories: ['Filosofia', 'Religião'],
		author: 'Agostinho',
		image:
			'https://m.media-amazon.com/images/I/81wTnz5u8oL._SY522_.jpg',
		color: ['Brown'],
		variants: ['Capa Comum', 'Kindle'],
		newness: true,
		sale: {
			minQuantity: '10',
			price: '3400',
		},
		type: 'book'
	},
	{
		id: '7',
		title: 'O reservatório',
		description:
			'Ridley é um homem comum vivendo um momento excepcional: a pandemia de covid-19. Acostumado com a agitação de Nova York, o ex-veterano de Wall Street agora se vê aprisionado em seu apartamento por causa da quarentena e submerso em solidão e incertezas.',
		categories: ['Suspense', 'Ficção'],
		author: 'David Duchovny',
		image:
			'https://m.media-amazon.com/images/I/81VPtppOH1L._SY522_.jpg',
		color: ['Blue'],
		variants: ['Capa Comum', 'Kindle'],
		sale: {
			minQuantity: '10',
			price: '3300',
		},
		type: 'book'
	},
	{
		id: '8',
		title: 'Minha culpa: 1',
		description:
			'Noah Morgan leva uma vida tranquila com a mãe em Toronto, no Canadá. Ao passar férias em um cruzeiro, sua mãe conhece com um advogado misterioso e endinheirado da Califórnia, com quem se casa. As duas precisam, então, se mudar para Los Angeles a fim de morar com a nova família, e para isso Noah deixa toda a sua vida antiga para trás.',
		categories: ['Ficção'],
		author: 'Mercedes Ron',
		image:
			'https://m.media-amazon.com/images/I/81bNuuU7qyL._SY522_.jpg',
		color: ['Black'],
		variants: ['Capa Comum', 'Kindle'],
		newness: true,
		sale: {
			minQuantity: '10',
			price: '5200',
		},
		type: 'book'
	},
	{
		id: '9',
		title: 'Imperfeitos',
		description:
			'Olive se sente como a gêmea azarada da casa: dos acidentes estranhamente inexplicáveis ao fracasso na vida profissional e amorosa ― nada dá certo para ela. Porém, parece que o jogo vira quando sua alergia a frutos do mar a protege de um desastre, já que todos os convidados da festa de casamento da irmã sofrem com intoxicação alimentar. Na verdade... nem todos.',
		categories: ['Ficção', 'Romance'],
		author: 'Christina Lauren',
		image:
			'https://m.media-amazon.com/images/I/616U6mSP3lL._SY522_.jpg',
		color: ['Yellow'],
		variants: ['Capa Comum', 'Kindle'],
		sale: {
			minQuantity: '10',
			price: '1800',
		},
		type: 'book'
	},
	{
		id: '10',
		title: 'O véu escarlate',
		description:
			'Seis meses se passaram desde que a jovem Célie Tremblay fez os votos sagrados para se juntar aos Chasseurs como a primeira caçadora da instituição. Ao lado de Jean Luc, seu noivo e capitão dos Chasseurs, ela está determinada a encontrar seu lugar nessa nova função e a proteger Belterra depois de ter falhado em salvar a irmã. Mas o passado ainda assombra a jovem, e um novo mal ameaça o reino, deixando uma trilha de corpos marcados com dois pequenos furos no pescoço.',
		categories: ['Romance'],
		author: 'Shelby Mahurin',
		image:
			'https://m.media-amazon.com/images/I/913JEN+95JL._SL1500_.jpg',
		color: ['Red'],
		variants: ['Capa Comum', 'Kindle'],
		newness: true,
		sale: {
			minQuantity: '10',
			price: '9000',
		},
		type: 'book'
	},
	{
		id: '11',
		title: 'Quarta Asa (The Empyrean Livro 1)',
		description:
			'Violet Sorrengail, uma jovem de vinte anos, estava destinada a entrar na Divisão dos Escribas, levando uma vida relativamente tranquila entre os livros e as aulas de História. No entanto, a general comandante das forças de Navarre – também conhecida como sua mãe –, durona como as garras de um dragão, ordena que Violet se junte às centenas de candidatos que buscam se tornar a elite de seu país: cavaleiros de dragões.',
		categories: ['Fantasia'],
		author: 'Rebecca Yarros',
		image:
			'https://m.media-amazon.com/images/I/91d26e09EeL._SY522_.jpg',
		color: ['Orange'],
		variants: ['Capa Comum', 'Capa dura', 'Kindle'],
		sale: {
			minQuantity: '10',
			price: '7300',
		},
		type: 'book'
	},
	{
		id: '12',
		title: 'A Biblioteca da Meia-Noite',
		description:
			'Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido.',
		categories: ['Ficção'],
		author: 'Matt Haig',
		image:
			'https://m.media-amazon.com/images/I/81rTSs7auzL._SY522_.jpg',
		color: ['Green'],
		variants: ['Capa Comum', 'Kindle'],
		sale: {
			minQuantity: '10',
			price: '4650',
		},
		type: 'book'
	},
];

export default books;
