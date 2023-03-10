import validator from "validator";
import { useState, useEffect, useRef } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs";
import { hash } from "../../services/PasswordEncrypting";
import { useNavigate } from "react-router-dom";

export function useProfileEdit() {
  const user = getItem("user");

  const [fileImage, setFileImage] = useState("");
  const [previewImage, setPreviewImage] = useState(user.previewImage ?? null);
  const [name, setName] = useState(user.name ?? "");
  const [email, setEmail] = useState(user.email ?? "");
  const [password, setPassword] = useState(user.password.nohash ?? "");
  const [cpf, setCpf] = useState(user.cpf ?? "");
  const [saldo, setSaldo] = useState(user.saldo ?? 0);

  const fileInputRef = useRef();
  const navigate = useNavigate();

  const mudaImagem = (e) => {
    const imagem = e.target.files[0];

    if (imagem) setFileImage(imagem);
  };

  useEffect(() => {
    if (fileImage) {
      const leitorDoArquivo = new FileReader();
      leitorDoArquivo.onloadend = () => {
        setPreviewImage(leitorDoArquivo.result);
      };
      leitorDoArquivo.readAsDataURL(fileImage);
    }
  }, [fileImage]);

  const salvarEdicao = (e) => {
    e.preventDefault();
    if (
      validator.isEmail(email) &&
      name.length >= 4 &&
      password.length >= 5 &&
      cpf.length === 11 &&
      saldo.length > 2
    ) {
      setItem("user", {
        previewImage,
        name,
        email,
        password: {
          hash: hash(password),
          nohash: password,
        },
        cpf,
        saldo,
      });
      navigate("/app/profile");
    }
  };

  return {
    previewImage,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    cpf,
    setCpf,
    saldo,
    setSaldo,
    fileInputRef,
    mudaImagem,
    salvarEdicao,
    user,
  };
}
