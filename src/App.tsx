import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChannelsBar } from './components/ChannelsBar';
import { ProductGrid } from './components/ProductGrid';
import { FabricQuality } from './components/FabricQuality';
import { StoreLocation } from './components/StoreLocation';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { Product } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, size: string, color: string) => {
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.size === size &&
        item.color === color
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${size}-${color}-${Date.now()}`,
        product,
        size,
        color,
        quantity: 1,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-zinc-900 selection:bg-zinc-950 selection:text-white">
      {/* 3-Zone Header */}
      <Header
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner with Editorial Photography */}
        <Hero />

        {/* 7 Official Buttons Hub (Facebook, Instagram, WhatsApp, Mercado Livre, Shopee, Magalu, Google Maps) */}
        <ChannelsBar />

        {/* Catalog: Masculine, Feminine, Unisex */}
        <ProductGrid
          onAddToCart={handleAddToCart}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        {/* 100% Cotton & Craftsmanship */}
        <FabricQuality />

        {/* Google Maps & Physical Atelier in SP */}
        <StoreLocation />

        {/* Testimonials & Social Proof */}
        <ReviewsSection />
      </main>

      {/* Footer with All 7 Channels */}
      <Footer />

      {/* Floating 1-Click WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals & Slide-overs */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={() => {
          setSelectedProduct(null);
          setIsSizeGuideOpen(true);
        }}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
