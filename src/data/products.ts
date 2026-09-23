export interface Product {
  id: string;
  name: string;
  subtitle: string;
  gender: 'feminino' | 'masculino' | 'unissex';
  genderLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  fabric: string;
  composition: string;
  image: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  highlights: string[];
  links: {
    mercadolivre?: string;
    shopee?: string;
    magalu?: string;
    whatsappText: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'fem-classic-offwhite',
    name: 'Camiseta Feminina Classic Soft Cotton',
    subtitle: 'Gola redonda canelada, caimento suave e toque aveludado',
    gender: 'feminino',
    genderLabel: 'Feminina',
    price: 59.90,
    originalPrice: 79.90,
    rating: 4.9,
    reviewsCount: 142,
    fabric: 'Algodão Penteado 30.1',
    composition: '100% Algodão Premium',
    image: '/src/assets/images/tshirt_women_cotton_1790116972251.jpg',
    colors: [
      { name: 'Off-White Natural', hex: '#F5F5F0' },
      { name: 'Preto Noite', hex: '#1C1C1E' },
      { name: 'Terracota Suave', hex: '#C67D63' },
      { name: 'Rosa Quartzo', hex: '#E8C5C8' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Confeccionada com fio penteado 30.1 de primeira linha, a modelagem feminina foi desenvolvida para valorizar a silhueta sem apertar. Toque suave na pele, costuras duplas e gola anti-deformação.',
    highlights: ['Gola com elastano 2x1 anti-esgarçamento', 'Não encolhe nem desbota após lavagem', 'Toque super macio peletizado'],
    links: {
      mercadolivre: 'https://www.mercadolivre.com.br/camiseta-thais/up/MLBU4099890704',
      shopee: 'https://shopee.com.br/thais7447',
      magalu: 'https://www.magazineluiza.com.br/blusa-vestem-thais-feminina/p/akj08ha8dj/es/eimt/?srsltid=AU7gw4XrkCbFkVFF6oCD84ldXXAfrXGAUw9IwaCmVzTTMCb91YYv996D',
      whatsappText: 'Olá! Tenho interesse na Camiseta Feminina Classic Soft Cotton Off-White.',
    },
  },
  {
    id: 'masc-heavy-black',
    name: 'Camiseta Masculina Heavy Crew Fio 30.1',
    subtitle: 'Corte regular alinhado, reforço ombro a ombro e acabamento alfaiataria',
    gender: 'masculino',
    genderLabel: 'Masculino',
    price: 64.90,
    originalPrice: 84.90,
    rating: 5.0,
    reviewsCount: 188,
    fabric: 'Algodão Penteado Pente Fino 180g',
    composition: '100% Algodão Penteado 30.1',
    image: '/src/assets/images/tshirt_men_classic_1790116962909.jpg',
    colors: [
      { name: 'Preto Absoluto', hex: '#111111' },
      { name: 'Branco Neve', hex: '#FFFFFF' },
      { name: 'Azul Marinho Nobre', hex: '#1E293B' },
      { name: 'Cinza Mescla Escuro', hex: '#4B5563' },
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    description: 'A camiseta masculina definitiva para o dia a dia e ocasiões casuais refinadas. Herança da tradição de alfaiataria da AL Camisaria, com caimento estruturado e costura reforçada.',
    highlights: ['Reforço interno de ombro a ombro', 'Gramatura encorpada que não fica transparente', 'Zero encolhimento certificado'],
    links: {
      mercadolivre: 'https://www.mercadolivre.com.br/camiseta-thais/up/MLBU4099890704',
      shopee: 'https://shopee.com.br/thais7447',
      magalu: 'https://www.magazineluiza.com.br/blusa-vestem-thais-feminina/p/akj08ha8dj/es/eimt/?srsltid=AU7gw4XrkCbFkVFF6oCD84ldXXAfrXGAUw9IwaCmVzTTMCb91YYv996D',
      whatsappText: 'Olá! Gostaria de comprar a Camiseta Masculina Heavy Crew Fio 30.1.',
    },
  },
  {
    id: 'unissex-street-olive',
    name: 'Camiseta Oversized Streetwear Fóssil',
    subtitle: 'Modelagem ampla unissex, manga solta e tingimento estonado',
    gender: 'unissex',
    genderLabel: 'Unissex',
    price: 79.90,
    originalPrice: 99.90,
    rating: 4.9,
    reviewsCount: 97,
    fabric: 'Heavy Cotton Penteado 200g',
    composition: '100% Algodão Sustentável BCI',
    image: '/src/assets/images/tshirt_unisex_oversized_1790116981393.jpg',
    colors: [
      { name: 'Verde Oliva Fóssil', hex: '#556557' },
      { name: 'Areia Desértica', hex: '#D7C4A9' },
      { name: 'Chumbo Estonado', hex: '#374151' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Silhueta contemporânea oversized com ombro caído, gola alta canelada de 3cm e caimento despojado. Perfeita tanto para homens quanto para mulheres.',
    highlights: ['Modelagem solta com gola grossa estruturada', 'Tecido encorpado resistente com toque aveludado', 'Lavagem reativa que preserva o tom'],
    links: {
      mercadolivre: 'https://www.mercadolivre.com.br/camiseta-thais/up/MLBU4099890704',
      shopee: 'https://shopee.com.br/thais7447',
      magalu: 'https://www.magazineluiza.com.br/blusa-vestem-thais-feminina/p/akj08ha8dj/es/eimt/?srsltid=AU7gw4XrkCbFkVFF6oCD84ldXXAfrXGAUw9IwaCmVzTTMCb91YYv996D',
      whatsappText: 'Olá! Tenho interesse na Camiseta Oversized Streetwear Verde Oliva.',
    },
  },
  {
    id: 'kit-3-essenciais',
    name: 'Kit 3 Camisetas Essenciais Adulto (Leve Mais, Pague Menos)',
    subtitle: 'Combo com 3 peças (Preto + Branco + Mescla) masculino ou feminino',
    gender: 'unissex',
    genderLabel: 'Kit Promocional',
    price: 149.90,
    originalPrice: 189.90,
    rating: 5.0,
    reviewsCount: 310,
    fabric: 'Fio 30.1 Penteado 100% Algodão',
    composition: '100% Algodão Penteado Puro',
    image: '/src/assets/images/hero_tshirt_editorial_1790116950238.jpg',
    colors: [
      { name: 'Trio Clássico (Preto / Branco / Cinza)', hex: '#262626' },
      { name: 'Trio Tons Terra (Areia / Oliva / Terracota)', hex: '#785942' },
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    description: 'O melhor custo-benefício para renovar o guarda-roupa. Três camisetas premium com modelagem à sua escolha (masculina ou feminina). Compre com frete grátis ou retire no ateliê em SP.',
    highlights: ['Economia de mais de 25% no combo', 'Garantia total de troca ou devolução em até 30 dias', 'Disponível para pronta entrega'],
    links: {
      mercadolivre: 'https://www.mercadolivre.com.br/camiseta-thais/up/MLBU4099890704',
      shopee: 'https://shopee.com.br/thais7447',
      magalu: 'https://www.magazineluiza.com.br/blusa-vestem-thais-feminina/p/akj08ha8dj/es/eimt/?srsltid=AU7gw4XrkCbFkVFF6oCD84ldXXAfrXGAUw9IwaCmVzTTMCb91YYv996D',
      whatsappText: 'Olá! Quero pedir o Kit Promocional com 3 Camisetas Essenciais.',
    },
  },
];
