import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';
import { OFFICIAL_LINKS } from '../data/links';
import { renderPlatformIcon } from './BrandIcons';

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formatWhatsAppOrder = () => {
    let text = `*NOVO PEDIDO - THAIS TSHIRTERIA & AL CAMISARIA*\n\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n`;
      text += `   - Tamanho: ${item.size}\n`;
      text += `   - Cor: ${item.color}\n`;
      text += `   - Qtd: ${item.quantity}x | R$ ${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });
    text += `*Subtotal:* R$ ${subtotal.toFixed(2)}\n\n`;
    text += `Por favor, me informe o frete para o meu CEP e os dados para pagamento via Pix/Cartão!`;
    return `https://wa.me/551198989864?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-zinc-950">
                Sua Sacola de Compras
              </h3>
              <span className="text-xs text-stone-500 font-medium tabular-nums">
                ({items.reduce((s, i) => s + i.quantity, 0)} {items.length === 1 ? 'item' : 'itens'})
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar sacola"
              className="p-1.5 rounded-lg text-stone-400 hover:text-zinc-900 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  Sua sacola está vazia
                </p>
                <p className="text-xs text-stone-500 mb-6">
                  Navegue pela nossa coleção masculina e feminina e escolha suas camisetas favoritas.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-3.5">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-20 rounded-md object-cover bg-stone-100 shrink-0 border border-stone-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-zinc-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Tam: <span className="font-semibold text-zinc-700">{item.size}</span> · Cor: <span className="font-semibold text-zinc-700">{item.color}</span>
                    </p>
                    <p className="text-xs font-bold text-zinc-950 tabular-nums mt-1">
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </p>

                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-stone-200 rounded-md">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          aria-label="Diminuir quantidade"
                          className="p-1 text-stone-500 hover:text-zinc-900 hover:bg-stone-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-zinc-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          aria-label="Aumentar quantidade"
                          className="p-1 text-stone-500 hover:text-zinc-900 hover:bg-stone-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remover produto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Checkout Actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-stone-600">Subtotal</span>
                <span className="text-lg font-bold text-zinc-950 tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <p className="text-[11px] text-stone-500">
                Finalize com nosso atendimento via WhatsApp para calcular frete especial ou retirar presencialmente no ateliê em SP.
              </p>

              <a
                href={formatWhatsAppOrder()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-colors shadow-xs"
              >
                {renderPlatformIcon('whatsapp', 'w-4 h-4')}
                <span>Enviar Pedido pelo WhatsApp (11 9898-9864)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="pt-2 border-t border-stone-200/70">
                <p className="text-[10px] text-center font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Ou compre diretamente em nossas lojas oficiais:
                </p>
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <a
                    href={OFFICIAL_LINKS.mercadolivre.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-[#FFFEEA] border border-[#FFE600] rounded text-[10px] font-bold text-[#2D3277] flex items-center justify-center gap-1 truncate"
                  >
                    {renderPlatformIcon('mercadolivre', 'w-4 h-4 text-[#2D3277]')}
                    <span className="truncate">Mercado Livre</span>
                  </a>
                  <a
                    href={OFFICIAL_LINKS.shopee.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-[#FFF2EE] border border-[#EE4D2D]/30 rounded text-[10px] font-bold text-[#EE4D2D] flex items-center justify-center gap-1 truncate"
                  >
                    {renderPlatformIcon('shopee', 'w-3 h-3')}
                    <span className="truncate">Shopee</span>
                  </a>
                  <a
                    href={OFFICIAL_LINKS.magalu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-[#EFF7FF] border border-[#0086FF]/30 rounded text-[10px] font-bold text-[#0086FF] flex items-center justify-center gap-1 truncate"
                  >
                    {renderPlatformIcon('magalu', 'w-9 h-2.5 text-[#0086FF]')}
                    <span className="truncate">Magalu</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="hover:text-red-600 transition-colors underline cursor-pointer"
                >
                  Esvaziar sacola
                </button>
                <span>Pagamento via Pix ou Cartão</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
