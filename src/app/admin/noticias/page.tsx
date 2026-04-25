"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus, LogOut, X, Check, Upload } from "lucide-react";

type Noticia = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  categoria: string;
  link: string;
  activo: boolean;
};

const noticiaVacia = {
  titulo: "",
  descripcion: "",
  fecha: "",
  imagen: "",
  categoria: "",
  link: "",
  activo: true,
};

const categorias = ["Anuncio", "Logro", "Convocatoria", "Tecnología"];

export default function AdminNoticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editando, setEditando] = useState<Noticia | null>(null);
  const [form, setForm] = useState(noticiaVacia);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
      else fetchNoticias();
    });
    return () => unsub();
  }, []);

  const fetchNoticias = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "noticias"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Noticia[];
    setNoticias(data);
    setLoading(false);
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
        await updateDoc(doc(db, "noticias", editando.id), form);
      } else {
        await addDoc(collection(db, "noticias"), form);
      }
      await fetchNoticias();
      setShowForm(false);
      setEditando(null);
      setForm(noticiaVacia);
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleEditar = (noticia: Noticia) => {
    setEditando(noticia);
    setForm({
      titulo: noticia.titulo,
      descripcion: noticia.descripcion,
      fecha: noticia.fecha,
      imagen: noticia.imagen,
      categoria: noticia.categoria,
      link: noticia.link,
      activo: noticia.activo,
    });
    setShowForm(true);
  };

  const handleEliminar = async (id: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar esta noticia?")) return;
    await deleteDoc(doc(db, "noticias", id));
    await fetchNoticias();
  };

  const handleToggleActivo = async (noticia: Noticia) => {
    await updateDoc(doc(db, "noticias", noticia.id), { activo: !noticia.activo });
    await fetchNoticias();
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
            <p className="text-xs text-[#6b7a90]">Gestión de Noticias</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/admin/eventos" className="text-sm font-medium text-[#0b5ea8] hover:underline">
            Ver Eventos
          </a>
          <a href="/admin/directivas" className="text-sm font-medium text-[#0b5ea8] hover:underline">Directivas</a>
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

        {/* Botón agregar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#0b1f33]">Noticias ({noticias.length})</h2>
          <button
            onClick={() => { setShowForm(true); setEditando(null); setForm(noticiaVacia); }}
            className="inline-flex items-center gap-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            <Plus className="size-4" />
            Nueva Noticia
          </button>
        </div>

        {/* Formulario */}
        {showForm && (
          <div className="bg-white border border-[#e5eaf3] rounded-3xl p-8 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#0b1f33]">
                {editando ? "Editar Noticia" : "Nueva Noticia"}
              </h3>
              <button onClick={() => { setShowForm(false); setEditando(null); setForm(noticiaVacia); }}>
                <X className="size-5 text-[#6b7a90] hover:text-[#0b1f33]" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Título *</label>
                <input
                  type="text"
                  value={form.titulo}
                  onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                  placeholder="Título de la noticia"
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Fecha *</label>
                <input
                  type="date"
                  value={form.fecha}
                  onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Categoría *</label>
                <select
                  value={form.categoria}
                  onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Link de la noticia</label>
                <input
                  type="text"
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  placeholder="https://..."
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Descripción *</label>
                <textarea
                  value={form.descripcion}
                  onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                  placeholder="Descripción de la noticia"
                  rows={3}
                  className="rounded-xl border border-[#e5eaf3] px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors resize-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-[#0b1f33]">Imagen de la noticia</label>
                <p className="text-xs text-[#6b7a90]">Se recomienda usar imágenes horizontales en formato 16:9 (ej. 1280x720px).</p>
                <div className="flex flex-col gap-3">
                  {form.imagen && (
                    <div className="w-full aspect-video overflow-hidden rounded-xl border border-[#e5eaf3] bg-[#f7f8fb]">
                      <img src={form.imagen} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <label className={`cursor-pointer flex items-center gap-3 border-2 border-dashed rounded-xl px-4 py-4 transition-colors ${uploadingImage ? "border-[#0b5ea8] bg-[#f0f7ff]" : "border-[#e5eaf3] hover:border-[#0b5ea8]"}`}>
                    <Upload className="size-5 text-[#0b5ea8] shrink-0" />
                    <span className="text-sm text-[#6b7a90]">
                      {uploadingImage ? "Subiendo imagen..." : form.imagen ? "Cambiar imagen" : "Haz clic para subir una imagen"}
                    </span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploadingImage} />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-3 md:col-span-2">
                <input
                  type="checkbox"
                  id="activo"
                  checked={form.activo}
                  onChange={(e) => setForm({ ...form, activo: e.target.checked })}
                  className="w-4 h-4 accent-[#0b5ea8]"
                />
                <label htmlFor="activo" className="text-sm font-semibold text-[#0b1f33]">
                  Mostrar en la página principal
                </label>
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-semibold px-6 py-3 rounded-full transition-colors disabled:opacity-50"
                >
                  <Check className="size-4" />
                  {saving ? "Guardando..." : editando ? "Guardar cambios" : "Crear noticia"}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setEditando(null); setForm(noticiaVacia); }}
                  className="inline-flex items-center gap-2 border border-[#e5eaf3] text-[#6b7a90] hover:text-[#0b1f33] font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de noticias */}
        {loading ? (
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 rounded-2xl bg-white border border-[#e5eaf3] animate-pulse" />
            ))}
          </div>
        ) : noticias.length === 0 ? (
          <div className="text-center py-20 text-[#6b7a90]">
            <p className="text-lg">No hay noticias todavía.</p>
            <p className="text-sm mt-2">Crea tu primera noticia con el botón de arriba.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="bg-white border border-[#e5eaf3] rounded-2xl p-6 flex items-center gap-6 shadow-sm">
                {noticia.imagen && (
                  <img src={noticia.imagen} alt={noticia.titulo} className="w-20 h-20 object-cover rounded-xl shrink-0 bg-[#f7f8fb]" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-[#0b1f33] truncate">{noticia.titulo}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${noticia.activo ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {noticia.activo ? "Destacado" : "Normal"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#0b5ea8]">{noticia.fecha}</span>
                    <span className="text-xs text-[#6b7a90]">•</span>
                    <span className="text-xs text-[#6b7a90]">{noticia.categoria}</span>
                  </div>
                  <p className="text-sm text-[#6b7a90] line-clamp-1">{noticia.descripcion}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleToggleActivo(noticia)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${noticia.activo ? "border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-500" : "border-green-200 text-green-600 hover:bg-green-50"}`}
                  >
                    {noticia.activo ? "Quitar Destacado" : "Destacar"}
                  </button>
                  <button
                    onClick={() => handleEditar(noticia)}
                    className="w-9 h-9 rounded-full border border-[#e5eaf3] flex items-center justify-center text-[#6b7a90] hover:text-[#0b5ea8] hover:border-[#0b5ea8] transition-colors"
                  >
                    <Pencil className="size-4" />
                  </button>
                  <button
                    onClick={() => handleEliminar(noticia.id)}
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