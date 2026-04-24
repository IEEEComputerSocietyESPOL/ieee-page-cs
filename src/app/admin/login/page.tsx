"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/eventos");
    } catch {
      setError("Correo o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <img src="/ieeeespol-logo.png" alt="IEEE ESPOL" className="h-16 w-auto object-contain mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#0b1f33]">Panel de Administración</h1>
          <p className="text-[#6b7a90] text-sm mt-2">Ingresa tus credenciales para continuar</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#0b1f33]">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ieeeespol.com"
              className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#0b1f33]">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-semibold px-6 py-3 rounded-full transition-colors disabled:opacity-50"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}