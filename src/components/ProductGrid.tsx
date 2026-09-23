import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  onAddToCart: (product: Product, size: string, color: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

type FilterCategory = 'todos' | 'feminino' | 'masculino' | 'unissex';

export const ProductGrid: React.FC<ProductGridProps> = ({
  onAddToCart,
  onSelectProduct,
  onOpenSizeGuide,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('todos');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('todos');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory =
        activeCategory === 'todos' || item.gender === activeCategory;
      const matchSize =
        selectedSizeFilter === 'todos' ||
        item.sizes.includes(selectedSizeFilter);
      return matchCategory && matchSize;
    });
  }, [activeCategory, selectedSizeFilter]);

  return (
    <section id="catalogo" className="py-16 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              <span>Catálogo Adulto</span>
              <span aria-hidden="true">·</span>
              <span>Pronta Entrega</span>
              <span aria-hidden="true">·</span>
              <span>Corte Sob Medida</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 [text-wrap:balance]">
              Camisetas Masculinas e Femininas
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenSizeGuide}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-zinc-950 underline underline-offset-4 cursor-pointer self-start md:self-auto"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Consultar Tabela de Medidas (P ao XGG)</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 p-1.5 bg-stone-200/60 rounded-xl">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto p-1">
            <button
              type="button"
              onClick={() => setActiveCategory('todos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'todos'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Todas as Peças ({PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('feminino')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'feminino'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Femininas Adulto
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('masculino')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'masculino'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Masculinas Adulto
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('unissex')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'unissex'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Unissex / Kits
            </button>
          </div>

          {/* Size Quick Filter */}
          <div className="flex items-center gap-1.5 px-2 py-1">
            <span className="text-xs text-stone-500 font-medium">Tamanho:</span>
            {['todos', 'P', 'M', 'G', 'GG', 'XGG'].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSizeFilter(size)}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  selectedSizeFilter === size
                    ? 'bg-zinc-900 text-white'
                    : 'bg-stone-100 text-zinc-700 hover:bg-stone-200'
                }`}
              >
                {size === 'todos' ? 'Todos' : size}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Wholesale / Custom Orders Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Precisa de Camisetas Personalizadas ou Atacado?
              </h3>
              <p className="text-xs text-zinc-300 mt-0.5 max-w-xl">
                Fornecemos camisetas lisas no atacado e sob encomenda para eventos, uniformes corporativos e marcas próprias, com a garantia AL Camisaria & Camisetas Rápido.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/551198989864?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20camisetas%20no%20atacado%20ou%20sob%20encomenda."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-zinc-950 bg-white hover:bg-stone-100 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
