import React from 'react';
import { Layers, Sparkles, Feather, RefreshCw } from 'lucide-react';

export const FabricQuality: React.FC = () => {
  return (
    <section id="qualidade" className="py-16 bg-[#f7f6f3] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
            Diferenciais de Fabricação
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 mt-1 mb-3 [text-wrap:balance]">
            Por que nossas camisetas vestem melhor e duram muito mais?
          </h2>
          <p className="text-sm text-zinc-600">
            Trabalhamos exclusivamente com fiação penteada selecionada e acabamentos de alfaiataria que não deformam na máquina de lavar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 mb-4">
              <Feather className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">
              Algodão Penteado 30.1
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              O processo de penteamento elimina impurezas e fibras curtas, resultando em uma malha macia, resistente e com toque peletizado aveludado.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 mb-4">
              <Layers className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">
              Gola Canelada 2x1 com Reforço
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Gola estruturada com fios de elastano e pesponto reforçado ombro a ombro. Nada de gola frouxa ou "canoa" depois da primeira lavagem.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 mb-4">
              <RefreshCw className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">
              Malha Pré-Encolhida
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Lavagem industrial antes do corte garante taxa residual de encolhimento de menos de 1%. O tamanho que você compra é o tamanho que você veste.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-zinc-900 mb-4">
              <Sparkles className="w-5 h-5 text-purple-700" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">
              Tingimento Reativo Firme
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Cores sólidas que não desbotam e não soltam tinta na água. O preto continua preto e o branco continua brilhante e uniforme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
