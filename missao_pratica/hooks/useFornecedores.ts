import axios from "axios";
import { useState } from "react";
const api = "http://192.168.1.11:3000/fornecedores";
import { Produto } from "./useProdutos";

export interface Fornecedor {
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
  imagem?: string;
}

const cadastro = async (fornecedor: Fornecedor) => {
  try {
    const res = await axios.post(api, fornecedor);
    if (res) console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const list = async () => {
  try {
    const res = await axios.get(api);
    return res.data;
  } catch (err) {
    throw new Error("Erro ao buscar os fornecedores");
  }
};

export const useFornecedores = () => {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const findFornecedores = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const data = await list();
      setFornecedores(data);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  const postFornecedoresOnJSON = async (fornecedor: Fornecedor) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const novoFornecedor = await cadastro(fornecedor);
      if (novoFornecedor) {
        console.log(
          "🚀 ~ postFornecedoresOnJSON ~ novoFornecedor:",
          novoFornecedor
        );

        setFornecedores((prev) => [...prev, novoFornecedor]);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    fornecedores,
    isLoading,
    errorMessage,
    findFornecedores,
    postFornecedoresOnJSON,
  };
};
