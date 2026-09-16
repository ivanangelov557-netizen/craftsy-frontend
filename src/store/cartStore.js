import { create } from 'zustand';

export const useCartStore = create((set) => ({
  // State
  cart: [],

  // Add to cart
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // Ако продукт е вече в кошницата, увеличи количеството
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        // Добави нов продукт
        return {
          cart: [...state.cart, { ...product, quantity }],
        };
      }
    });
  },

  // Remove from cart
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  // Update quantity
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      }));
    }
  },

  // Clear cart
  clearCart: () => {
    set({ cart: [] });
  },

  // Get total price
  getTotalPrice: () => {
    let total = 0;
    set((state) => {
      total = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return state;
    });
    return total;
  },

  // Get item count
  getItemCount: () => {
    let count = 0;
    set((state) => {
      count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
      return state;
    });
    return count;
  },
}));