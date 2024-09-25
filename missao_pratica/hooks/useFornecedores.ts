import axios from "axios";
import { useState } from "react";
import useMedia from "./useMedia";
const api = "http://192.168.1.11:3000/fornecedores";

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
  const { handleTakeGalleryImage } = useMedia();

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
      const base64Image = await handleTakeGalleryImage();
      const fornecedorcomImagem = {
        ...fornecedor,
        imagem: base64Image !== null ? base64Image : "",
      };
      const novoFornecedor = await cadastro(fornecedorcomImagem);
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
