"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Noticia = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  categoria: string;
  link: string;
  activo: boolean;
};

export function useNoticias(soloActivas?: boolean) {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        let q;
        if (soloActivas) {
          q = query(
            collection(db, "noticias"),
            where("activo", "==", true)
          );
        } else {
          q = query(collection(db, "noticias"));
        }
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Noticia[];
        setNoticias(data);
      } catch (error) {
        console.error("Error fetching noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [soloActivas]);

  return { noticias, loading };
}