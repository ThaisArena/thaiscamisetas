export interface OfficialLink {
  id: string;
  name: string;
  label: string;
  shortDescription: string;
  url: string;
  iconType: 'facebook' | 'instagram' | 'whatsapp' | 'mercadolivre' | 'shopee' | 'magalu' | 'googlemaps';
  badgeColor: string;
  badgeBg: string;
  buttonBg: string;
  buttonHover: string;
  textColor: string;
  isMarketplace?: boolean;
  isSocial?: boolean;
}

export const OFFICIAL_LINKS = {
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    label: 'Curta no Facebook',
    shortDescription: 'Camisetas Rápido página oficial',
    url: 'https://www.facebook.com/CamisetasRapido/?locale=pt_BR',
    iconType: 'facebook',
    badgeColor: '#1877F2',
    badgeBg: '#EBF3FF',
    buttonBg: 'bg-[#1877F2]',
    buttonHover: 'hover:bg-[#166fe5]',
    textColor: 'text-white',
    isSocial: true,
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    label: '@thaistshirteria',
    shortDescription: 'Looks diários, bastidores e novidades',
    url: 'https://www.instagram.com/thaistshirteria/',
    iconType: 'instagram',
    badgeColor: '#E1306C',
    badgeBg: '#FDF0F5',
    buttonBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]',
    buttonHover: 'hover:opacity-95',
    textColor: 'text-white',
    isSocial: true,
  },
  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp Oficial',
    label: '(11) 9898-9864',
    shortDescription: 'Atendimento direto para pedidos e atacado',
    url: 'https://wa.me/551198989864?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Thais%20Tshirteria%20e%20gostaria%20de%20comprar%20camisetas.',
    rawPhone: '11 9898-9864',
    iconType: 'whatsapp',
    badgeColor: '#25D366',
    badgeBg: '#EBF9F1',
    buttonBg: 'bg-[#25D366]',
    buttonHover: 'hover:bg-[#20bd5a]',
    textColor: 'text-white',
    isSocial: true,
  },
  mercadolivre: {
    id: 'mercadolivre',
    name: 'Mercado Livre',
    label: 'Comprar no Mercado Livre',
    shortDescription: 'Envio Full e garantia de compra protegida',
    url: 'https://www.mercadolivre.com.br/camiseta-thais/up/MLBU4099890704',
    iconType: 'mercadolivre',
    badgeColor: '#2D3277',
    badgeBg: '#FFFDE7',
    buttonBg: 'bg-[#FFE600]',
    buttonHover: 'hover:bg-[#f0d800]',
    textColor: 'text-[#2D3277]',
    isMarketplace: true,
  },
  shopee: {
    id: 'shopee',
    name: 'Shopee',
    label: 'Loja Oficial Shopee',
    shortDescription: 'Cupons de frete grátis e promoções @thais7447',
    url: 'https://shopee.com.br/thais7447',
    iconType: 'shopee',
    badgeColor: '#EE4D2D',
    badgeBg: '#FFF2EE',
    buttonBg: 'bg-[#EE4D2D]',
    buttonHover: 'hover:bg-[#dc4122]',
    textColor: 'text-white',
    isMarketplace: true,
  },
  magalu: {
    id: 'magalu',
    name: 'Magazine Luiza',
    label: 'Comprar no Magalu',
    shortDescription: 'Vitrine oficial Thais Vestem Feminina',
    url: 'https://www.magazineluiza.com.br/blusa-vestem-thais-feminina/p/akj08ha8dj/es/eimt/?srsltid=AU7gw4XrkCbFkVFF6oCD84ldXXAfrXGAUw9IwaCmVzTTMCb91YYv996D',
    iconType: 'magalu',
    badgeColor: '#0086FF',
    badgeBg: '#EFF7FF',
    buttonBg: 'bg-[#0086FF]',
    buttonHover: 'hover:bg-[#0076e0]',
    textColor: 'text-white',
    isMarketplace: true,
  },
  googlemaps: {
    id: 'googlemaps',
    name: 'Google Maps',
    label: 'AL Camisaria no Maps',
    shortDescription: 'Venha nos visitar e provar presencialmente em SP',
    url: 'https://www.google.com/maps/place/AL+Camisaria+-+Camisa+sob+medida+-+Camisa+social+sob+medida+-+Camisa+sob+encomenda/@-23.5584328,-46.6079859,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5988fe86553f:0x72bb94e80013dfa4!8m2!3d-23.5584377!4d-46.605411!16s%2Fg%2F11px9psn8n?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',
    iconType: 'googlemaps',
    badgeColor: '#EA4335',
    badgeBg: '#FDF2F1',
    buttonBg: 'bg-zinc-900',
    buttonHover: 'hover:bg-zinc-800',
    textColor: 'text-white',
    isSocial: false,
  },
} as const;

export const ALL_BUTTONS = Object.values(OFFICIAL_LINKS);
