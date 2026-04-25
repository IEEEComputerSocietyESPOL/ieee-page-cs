"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Directivo = {
  id: string;
  capitulo: string;
  nombre: string;
  rol: string;
  imagen: string;
  correo: string;
  orden: number;
};

export function useDirectiva(capitulo: string) {
  const [directiva, setDirectiva] = useState<Directivo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDirectiva = async () => {
      try {
        const q = query(
          collection(db, "directivas"),
          where("capitulo", "==", capitulo),
          orderBy("orden", "asc")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Directivo[];
        setDirectiva(data);
      } catch (error) {
        console.error("Error fetching directiva:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDirectiva();
  }, [capitulo]);

  return { directiva, loading };
}