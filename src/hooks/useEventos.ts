"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Evento = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
  link: string;
  activo: boolean;
  capitulos: string[];
};

export function useEventos(capitulo?: string, soloActivos?: boolean) {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        let q;
        if (capitulo) {
          q = query(
            collection(db, "eventos"),
            where("capitulos", "array-contains", capitulo)
          );
        } else if (soloActivos) {
          q = query(
            collection(db, "eventos"),
            where("activo", "==", true)
          );
        } else {
          q = query(collection(db, "eventos"));
        }
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Evento[];
        setEventos(data);
      } catch (error) {
        console.error("Error fetching eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, [capitulo, soloActivos]);

  return { eventos, loading };
}