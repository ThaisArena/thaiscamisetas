import React, { useState } from 'react';
import { ShoppingBag, Star, ExternalLink, MessageCircle, ChevronDown } from 'lucide-react';
import { Product } from '../data/products';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onSelectProduct,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [showChannelsMenu, setShowChannelsMenu] = useState(false);

  const handleQuickAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
  };

  const whatsappDirectUrl = `https://wa.me/551198989864?text=${encodeURIComponent(
    `Olá! Gostaria de comprar a ${product.name} no tamanho ${selectedSize} e cor ${selectedColor}. Como podemos prosseguir?`
  )}`;

  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-stone-400/80 transition-all duration-300 shadow-xs hover:shadow-md">
      {/* Product Image Area */}
      <div
        onClick={() => onSelectProduct(product)}
        className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
        />

        {/* Gender Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-zinc-900 text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-stone-200/80 uppercase tracking-wider shadow-xs">
          {product.genderLabel}
        </div>

        {/* Rating preview */}
        <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-sm flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="tabular-nums">{product.rating.toFixed(1)}</span>
          <span className="text-zinc-400">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Unboxed Metadata */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5 font-medium">
          <span>{product.fabric}</span>
          <span aria-hidden="true">·</span>
          <span>{product.composition}</span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelectProduct(product)}
          className="text-base font-semibold text-zinc-900 hover:text-zinc-600 transition-colors cursor-pointer line-clamp-1"
        >
          {product.name}
        </h3>

        <p className="text-xs text-zinc-500 line-clamp-2 mt-1 mb-3">
          {product.subtitle}
        </p>

        {/* Color Palette Selector */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-[11px] text-stone-500 mr-1">Cores:</span>
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              title={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-4 h-4 rounded-full border transition-transform cursor-pointer ${
                selectedColor === color.name
                  ? 'ring-2 ring-zinc-900 ring-offset-1 scale-110'
                  : 'border-stone-300 hover:scale-105'
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
          <span className="text-[11px] text-stone-600 truncate ml-1 max-w-[110px]">
            {selectedColor}
          </span>
        </div>

        {/* Size Selection */}
        <div className="flex items-center gap-1 mb-4 flex-wrap">
          <span className="text-[11px] text-stone-500 mr-1">Tamanho:</span>
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedSize === size
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-stone-100 text-zinc-700 hover:bg-stone-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price Row */}
        <div className="mt-auto pt-3 border-t border-stone-100 flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-zinc-950 tabular-nums">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through tabular-nums">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          <span className="text-[11px] font-medium text-emerald-700">
            Em até 3x sem juros
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-2">
          {/* Add to Bag or Buy on Marketplace */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleQuickAdd}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Sacola</span>
            </button>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-md transition-colors shadow-xs"
            >
              {renderPlatformIcon('whatsapp', 'w-3.5 h-3.5')}
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Direct Link Dropdown / Toggle for Marketplaces */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowChannelsMenu(!showChannelsMenu)}
              className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-50 hover:bg-stone-100 rounded-md border border-stone-200 cursor-pointer"
            >
              <span>Comprar no Mercado Livre / Shopee / Magalu</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showChannelsMenu ? 'rotate-180' : ''}`} />
            </button>

            {showChannelsMenu && (
              <div className="mt-1 p-2 bg-white rounded-lg border border-stone-200 shadow-lg space-y-1.5 z-20">
                <a
                  href={product.links.mercadolivre || OFFICIAL_LINKS.mercadolivre.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 text-xs font-medium text-zinc-900 hover:bg-[#FFFDE7] rounded transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-5 px-1 bg-[#FFE600] rounded flex items-center justify-center text-[#2D3277]">
                      {renderPlatformIcon('mercadolivre', 'w-3.5 h-3.5 text-[#2D3277]')}
                    </div>
                    <span>Mercado Livre (Envio Rápido)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={product.links.shopee || OFFICIAL_LINKS.shopee.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 text-xs font-medium text-zinc-900 hover:bg-[#FFF2EE] rounded transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#EE4D2D] rounded flex items-center justify-center text-white">
                      {renderPlatformIcon('shopee', 'w-3.5 h-3.5')}
                    </div>
                    <span>Shopee (@thais7447)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={product.links.magalu || OFFICIAL_LINKS.magalu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 text-xs font-medium text-zinc-900 hover:bg-[#EFF7FF] rounded transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-5 px-1 bg-[#0086FF] rounded flex items-center justify-center text-white">
                      {renderPlatformIcon('magalu', 'w-10 h-2.5 text-white')}
                    </div>
                    <span>Magazine Luiza</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
