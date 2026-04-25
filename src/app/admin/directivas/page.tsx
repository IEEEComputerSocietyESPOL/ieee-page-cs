"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus, LogOut, X, Check, Upload } from "lucide-react";

type Directivo = {
  id: string;
  capitulo: string;
  nombre: string;
  rol: string;
  imagen: string;
  correo: string;
  orden: number;
};

const directivoVacio = {
  capitulo: "cs",
  nombre: "",
  rol: "",
  imagen: "",
  correo: "",
  orden: "" as unknown as number,
};

const capitulos = [
  { value: "general", label: "Directiva General" },
  { value: "cs", label: "Computer Society" },
  { value: "ras", label: "Robotics & Automation Society" },
  { value: "wie", label: "Women in Engineering" },
  { value: "pes", label: "Power & Energy Society" },
  { value: "cis", label: "Computational Intelligence Society" },
  { value: "ias", label: "Industry Applications Society" },
  { value: "embs", label: "Medicine & Biology Society" },
  { value: "comsoc", label: "Communications Society" },
  { value: "css", label: "Control Systems Society" },
  { value: "phs", label: "Photonics Society" },
  { value: "oes", label: "Oceanic Engineering Society" },
  { value: "sight", label: "SIGHT" },
  { value: "grss", label: "Geoscience and Remote Sensing Society" },
];

export default function AdminDirectivas() {
  const [directivos, setDirectivos] = useState<Directivo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editando, setEditando] = useState<Directivo | null>(null);
  const [form, setForm] = useState(directivoVacio);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [capituloActivo, setCapituloActivo] = useState("general");
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
      else fetchDirectivos(capituloActivo);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    fetchDirectivos(capituloActivo);
  }, [capituloActivo]);

  const fetchDirectivos = async (cap: string) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "directivas"),
        where("capitulo", "==", cap),
        orderBy("orden", "asc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Directivo[];
      setDirectivos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();
      setForm((prev) => ({ ...prev, imagen: data.secure_url }));
    } catch (error) {
      console.error("Error subiendo imagen:", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editando) {
        await updateDoc(doc(db, "directivas", editando.id), form);
      } else {
        await addDoc(collection(db, "directivas"), { ...form, capitulo: capituloActivo });
      }
      await fetchDirectivos(capituloActivo);
      setShowForm(false);
      setEditando(null);
      setForm({ ...directivoVacio, capitulo: capituloActivo });
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleEditar = (directivo: Directivo) => {
    setEditando(directivo);
    setForm({
      capitulo: directivo.capitulo,
      nombre: directivo.nombre,
      rol: directivo.rol,
      imagen: directivo.imagen,
      correo: directivo.correo,
      orden: directivo.orden,
    });
    setShowForm(true);
  };

  const handleEliminar = async (id: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este directivo?")) return;
    await deleteDoc(doc(db, "directivas", id));
    await fetchDirectivos(capituloActivo);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb]">

      {/* Header */}
      <div className="bg-white border-b border-[#e5eaf3] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/ieeeespol-logo.png" alt="IEEE ESPOL" className="h-10 w-auto object-contain" />
          <div>
            <h1 className="text-lg font-bold text-[#0b1f33]">Panel de Administración</h1>
            <p className="text-xs text-[#6b7a90]">Gestión de Directivas</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/admin/eventos" className="text-sm font-medium text-[#0b5ea8] hover:underline">Eventos</a>
          <a href="/admin/noticias" className="text-sm font-medium text-[#0b5ea8] hover:underline">Noticias</a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-[#6b7a90] hover:text-red-500 transition-colors text-sm font-medium"
          >
            <LogOut className="size-4" />
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Selector de capítulo */}
        <div className="mb-8">
          <label className="text-sm font-semibold text-[#0b1f33] mb-2 block">Selecciona un capítulo</label>
          <select
            value={capituloActivo}
            onChange={(e) => { setCapituloActivo(e.target.value); setShowForm(false); }}
            className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] focus:outline-none focus:border-[#0b5ea8] transition-colors w-full md:w-auto min-w-[300px]"
          >
            {capitulos.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Botón agregar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#0b1f33]">
            {capitulos.find(c => c.value === capituloActivo)?.label} ({directivos.length})
          </h2>
          <button
            onClick={() => { setShowForm(true); setEditando(null); setForm({ ...directivoVacio, capitulo: capituloActivo }); }}
            className="inline-flex items-center gap-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            <Plus className="size-4" />
            Nuevo Directivo
          </button>
        </div>

        {/* Formulario */}
        {showForm && (
          <div className="bg-white border border-[#e5eaf3] rounded-3xl p-8 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#0b1f33]">
                {editando ? "Editar Directivo" : "Nuevo Directivo"}
              </h3>
              <button onClick={() => { setShowForm(false); setEditando(null); }}>
                <X className="size-5 text-[#6b7a90] hover:text-[#0b1f33]" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Nombre completo *</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Nombre Apellido"
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Rol *</label>
                <input
                  type="text"
                  value={form.rol}
                  onChange={(e) => setForm({ ...form, rol: e.target.value })}
                  placeholder="Presidente, Vicepresidente..."
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Correo</label>
                <input
                  type="email"
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  placeholder="correo@espol.edu.ec"
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Orden</label>
                <input
                  type="number"
                  value={form.orden}
                  onChange={(e) => setForm({ ...form, orden: e.target.value === "" ? 0 : parseInt(e.target.value) })}
                  placeholder="1"
                  min={1}
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Foto</label>
                <p className="text-xs text-[#6b7a90]">Se recomienda una foto de perfil en formato cuadrado (1:1).</p>
                <div className="flex flex-col gap-3">
                  {form.imagen && (
                    <div className="w-32 h-32 overflow-hidden rounded-xl border border-[#e5eaf3] bg-[#f7f8fb]">
                      <img src={form.imagen} alt="Preview" className="w-full h-full object-cover object-top" />
                    </div>
                  )}
                  <label className={`cursor-pointer flex items-center gap-3 border-2 border-dashed rounded-xl px-4 py-4 transition-colors ${uploadingImage ? "border-[#0b5ea8] bg-[#f0f7ff]" : "border-[#e5eaf3] hover:border-[#0b5ea8]"}`}>
                    <Upload className="size-5 text-[#0b5ea8] shrink-0" />
                    <span className="text-sm text-[#6b7a90]">
                      {uploadingImage ? "Subiendo foto..." : form.imagen ? "Cambiar foto" : "Haz clic para subir una foto"}
                    </span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploadingImage} />
                  </label>
                </div>
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-semibold px-6 py-3 rounded-full transition-colors disabled:opacity-50"
                >
                  <Check className="size-4" />
                  {saving ? "Guardando..." : editando ? "Guardar cambios" : "Crear directivo"}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditando(null); }}
                  className="inline-flex items-center gap-2 border border-[#e5eaf3] text-[#6b7a90] hover:text-[#0b1f33] font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de directivos */}
        {loading ? (
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 rounded-2xl bg-white border border-[#e5eaf3] animate-pulse" />
            ))}
          </div>
        ) : directivos.length === 0 ? (
          <div className="text-center py-20 text-[#6b7a90]">
            <p className="text-lg">No hay directivos en este capítulo.</p>
            <p className="text-sm mt-2">Agrega el primero con el botón de arriba.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {directivos.map((directivo) => (
              <div key={directivo.id} className="bg-white border border-[#e5eaf3] rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8)]">
                  {directivo.imagen ? (
                    <img src={directivo.imagen} alt={directivo.nombre} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-[#0b1f33] truncate">{directivo.nombre}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f0f7ff] text-[#0b5ea8] shrink-0">
                      {directivo.rol}
                    </span>
                  </div>
                  {directivo.correo && (
                    <p className="text-xs text-[#6b7a90]">{directivo.correo}</p>
                  )}
                  <p className="text-xs text-[#6b7a90] mt-0.5">Orden: {directivo.orden}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleEditar(directivo)}
                    className="w-9 h-9 rounded-full border border-[#e5eaf3] flex items-center justify-center text-[#6b7a90] hover:text-[#0b5ea8] hover:border-[#0b5ea8] transition-colors"
                  >
                    <Pencil className="size-4" />
                  </button>
                  <button
                    onClick={() => handleEliminar(directivo.id)}
                    className="w-9 h-9 rounded-full border border-[#e5eaf3] flex items-center justify-center text-[#6b7a90] hover:text-red-500 hover:border-red-300 transition-colors"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}