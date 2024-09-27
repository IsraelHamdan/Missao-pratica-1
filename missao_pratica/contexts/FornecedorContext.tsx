import React, { createContext, useContext, useState, ReactNode } from "react";
import { Fornecedor } from "../hooks/useFornecedores";
interface FornecedorContextData {
  fornecedorData: Partial<Fornecedor>;
  setFornecedorData: React.Dispatch<React.SetStateAction<Partial<Fornecedor>>>;
  updateFornecedorData: (newData: Partial<Fornecedor>) => void;
}

export const FornecedorContext = createContext<
  FornecedorContextData | undefined
>(undefined);

export default function FornecedorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const fornecedorObject: Fornecedor = {
    nome: "",
    cnpj: "",
    email: "",
    telefone: "",
    imagem: "",
    categorias: [],
    endereco: "",
  };
  const [fornecedorData, setFornecedorData] =
    useState<Partial<Fornecedor>>(fornecedorObject);
  const updateFornecedorData = (newData: Partial<Fornecedor>) => {
    setFornecedorData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FornecedorContext.Provider
      value={{ fornecedorData, setFornecedorData, updateFornecedorData }}>
      {children}
    </FornecedorContext.Provider>
  );
}

export const useFornecedorContext = () => {
  const context = useContext(FornecedorContext);
  if (!context) {
    throw new Error(
      "useFornecedor deve ser usado dentro de um FornecedorProvider"
    );
  } else {
    return context;
  }
};
