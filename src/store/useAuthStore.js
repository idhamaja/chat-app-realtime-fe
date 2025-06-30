import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  error: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, error: null });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({
        authUser: null,
        error: error.response?.data?.message || error.message || "Network error occurred",
      });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
