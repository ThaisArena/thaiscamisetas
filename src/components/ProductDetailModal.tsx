import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, Shield, Truck, ExternalLink } from 'lucide-react';
import { Product } from '../data/products';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const whatsappUrl = `https://wa.me/551198989864?text=${encodeURIComponent(
    `Olá! Gostaria de comprar pelo WhatsApp: ${product.name} (Tamanho: ${selectedSize}, Cor: ${selectedColor}). Podem me passar a chave Pix ou link de pagamento?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-stone-100 text-zinc-700 transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image */}
        <div className="md:w-1/2 bg-stone-100 relative aspect-[4/3] md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-zinc-900 border border-stone-200">
            {product.genderLabel}
          </div>
        </div>

        {/* Right Side: Details & Buy Options */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1">
            <span>{product.fabric}</span>
            <span aria-hidden="true">·</span>
            <span>{product.composition}</span>
          </div>

          <h2 className="text-xl font-bold text-zinc-950 leading-snug mb-1">
            {product.name}
          </h2>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold text-zinc-800 ml-1 tabular-nums">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-xs text-stone-400">·</span>
            <span className="text-xs text-stone-500">
              {product.reviewsCount} avaliações de clientes
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-bold text-zinc-950 tabular-nums">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-stone-400 line-through tabular-nums">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-zinc-900">
                Cor selecionada: <span className="font-normal text-stone-600">{selectedColor}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-7 h-7 rounded-full border transition-all cursor-pointer ${
                    selectedColor === c.name
                      ? 'ring-2 ring-zinc-900 ring-offset-2 scale-105'
                      : 'border-stone-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-zinc-900">
                Tamanho: <span className="font-normal text-stone-600">{selectedSize}</span>
              </span>
              <button
                type="button"
                onClick={onOpenSizeGuide}
                className="text-xs text-zinc-700 hover:text-zinc-950 underline cursor-pointer"
              >
                Guia de medidas
              </button>
            </div>
            <div className="flex items-center gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`w-10 h-10 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                    selectedSize === s
                      ? 'bg-zinc-950 text-white border-zinc-950'
                      : 'bg-stone-50 text-zinc-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 mt-auto">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleAdd}
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-zinc-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Adicionado!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Colocar na Sacola</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-colors shadow-xs"
              >
                {renderPlatformIcon('whatsapp', 'w-4 h-4')}
                <span>Comprar no WhatsApp</span>
              </a>
            </div>

            {/* Direct Marketplace Buttons */}
            <div className="pt-3 border-t border-stone-200">
              <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                Ou compre com entrega direta nos canais:
              </p>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={product.links.mercadolivre || OFFICIAL_LINKS.mercadolivre.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 bg-[#FFFEEA] border border-[#FFE600] hover:bg-[#ffe600]/30 rounded-md text-[11px] font-bold text-[#2D3277] transition-colors"
                >
                  {renderPlatformIcon('mercadolivre', 'w-4.5 h-4.5 text-[#2D3277]')}
                  <span>Mercado Livre</span>
                </a>

                <a
                  href={product.links.shopee || OFFICIAL_LINKS.shopee.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 bg-[#FFF2EE] border border-[#EE4D2D]/30 hover:bg-[#EE4D2D]/10 rounded-md text-[11px] font-bold text-[#EE4D2D] transition-colors"
                >
                  {renderPlatformIcon('shopee', 'w-3.5 h-3.5')}
                  <span>Shopee</span>
                </a>

                <a
                  href={product.links.magalu || OFFICIAL_LINKS.magalu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 bg-[#EFF7FF] border border-[#0086FF]/30 hover:bg-[#0086FF]/10 rounded-md text-[11px] font-bold text-[#0086FF] transition-colors"
                >
                  {renderPlatformIcon('magalu', 'w-11 h-3 text-[#0086FF]')}
                  <span>Magalu</span>
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-stone-400" />
                Despacho em até 24h úteis
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-stone-400" />
                Garantia de 30 dias
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
