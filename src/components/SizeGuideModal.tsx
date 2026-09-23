import React, { useState } from 'react';
import { X, Ruler, MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'masculino' | 'feminino'>('masculino');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900">
                Guia Oficial de Medidas
              </h3>
              <p className="text-xs text-stone-500">
                Medidas em centímetros para camisetas adulto
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar guia de medidas"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTab('masculino')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              tab === 'masculino'
                ? 'bg-zinc-900 text-white shadow-xs'
                : 'text-zinc-600 hover:bg-stone-200/70'
            }`}
          >
            Modelagem Masculina Adulto
          </button>
          <button
            type="button"
            onClick={() => setTab('feminino')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              tab === 'feminino'
                ? 'bg-zinc-900 text-white shadow-xs'
                : 'text-zinc-600 hover:bg-stone-200/70'
            }`}
          >
            Modelagem Feminina Adulto (Baby Look & Regular)
          </button>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-y-auto flex-1">
          {tab === 'masculino' ? (
            <div className="space-y-4">
              <p className="text-xs text-zinc-600 leading-relaxed">
                Nossas camisetas masculinas seguem o padrão tradicional regular com caimento estruturado e confortável nos ombros e tórax.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider font-semibold">
                      <th className="py-2.5 px-3">Tamanho</th>
                      <th className="py-2.5 px-3">Comprimento</th>
                      <th className="py-2.5 px-3">Tórax / Largura</th>
                      <th className="py-2.5 px-3">Manga</th>
                      <th className="py-2.5 px-3">Indicação (Altura / Peso)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono tabular-nums">
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">P</td>
                      <td className="py-2.5 px-3">68 cm</td>
                      <td className="py-2.5 px-3">50 cm</td>
                      <td className="py-2.5 px-3">21 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">Até 1,72m / 60-70kg</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">M</td>
                      <td className="py-2.5 px-3">71 cm</td>
                      <td className="py-2.5 px-3">53 cm</td>
                      <td className="py-2.5 px-3">22 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">1,70m a 1,80m / 70-80kg</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">G</td>
                      <td className="py-2.5 px-3">74 cm</td>
                      <td className="py-2.5 px-3">56 cm</td>
                      <td className="py-2.5 px-3">23 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">1,75m a 1,85m / 80-92kg</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">GG</td>
                      <td className="py-2.5 px-3">77 cm</td>
                      <td className="py-2.5 px-3">60 cm</td>
                      <td className="py-2.5 px-3">24 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">1,80m a 1,92m / 92-105kg</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">XGG</td>
                      <td className="py-2.5 px-3">80 cm</td>
                      <td className="py-2.5 px-3">64 cm</td>
                      <td className="py-2.5 px-3">25 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">Acima de 1,85m / +105kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-zinc-600 leading-relaxed">
                A modelagem feminina da Thais Tshirteria foi desenhada com leve acinturamento para valorizar o busto e a cintura sem apertar.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider font-semibold">
                      <th className="py-2.5 px-3">Tamanho</th>
                      <th className="py-2.5 px-3">Comprimento</th>
                      <th className="py-2.5 px-3">Busto</th>
                      <th className="py-2.5 px-3">Cintura</th>
                      <th className="py-2.5 px-3">Manequim Recomendado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono tabular-nums">
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">P</td>
                      <td className="py-2.5 px-3">58 cm</td>
                      <td className="py-2.5 px-3">42 cm</td>
                      <td className="py-2.5 px-3">40 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">Manequim 36 - 38</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">M</td>
                      <td className="py-2.5 px-3">61 cm</td>
                      <td className="py-2.5 px-3">45 cm</td>
                      <td className="py-2.5 px-3">43 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">Manequim 40 - 42</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">G</td>
                      <td className="py-2.5 px-3">64 cm</td>
                      <td className="py-2.5 px-3">49 cm</td>
                      <td className="py-2.5 px-3">47 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">Manequim 44</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 font-sans font-bold text-zinc-900">GG</td>
                      <td className="py-2.5 px-3">67 cm</td>
                      <td className="py-2.5 px-3">53 cm</td>
                      <td className="py-2.5 px-3">51 cm</td>
                      <td className="py-2.5 px-3 font-sans text-stone-600">Manequim 46 - 48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Measuring tips */}
          <div className="mt-6 p-4 rounded-xl bg-stone-100/70 border border-stone-200 text-xs text-zinc-600">
            <p className="font-semibold text-zinc-900 mb-1">
              Dica para não errar no tamanho:
            </p>
            <p>
              Pegue uma camiseta sua que vista perfeitamente, estenda-a sobre uma superfície plana e meça a largura (de uma axila à outra) e a altura (do ombro até a barra). Compare com nossa tabela.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href="https://wa.me/551198989864?text=Ol%C3%A1!%20Estou%20em%20d%C3%BAvida%20sobre%20qual%20tamanho%20de%20camiseta%20escolher%20para%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Ainda com dúvida? Fale com a Thais no WhatsApp: (11) 9898-9864</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            Entendi, voltar às compras
          </button>
        </div>
      </div>
    </div>
  );
};
