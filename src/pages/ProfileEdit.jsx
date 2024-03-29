import { useProfileEdit } from "../hooks/pages/useProfileEdit";
import { ProfileEditContainer } from "../css/stylesProfile";
import iconPerfil from "../assets/images/perfil.png";

const ProfileEdit = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    saldo,
    setSaldo,
    cpf,
    setCpf,
    fileInputRef,
    previewImage,
    mudaImagem,
    user,
    salvarEdicao,
  } = useProfileEdit();

  return (
    <ProfileEditContainer>
      <form>
        <h2>Selecione uma foto de Perfil</h2>
        {user.previewImage ? (
          <img
            src={previewImage ?? user.previewImage}
            alt="Imagem de Perfil"
            onClick={() => {
              fileInputRef.current.click();
            }}
          />
        ) : (
          <img
            src={previewImage ?? iconPerfil}
            alt="Imagem de Perfil"
            onClick={() => {
              fileInputRef.current.click();
            }}
          />
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(e) => mudaImagem(e)}
        />

        <div className="inputs">
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite um novo Email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="text"
              name="password"
              placeholder="Digite uma nova senha"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>

          <div>
            <label htmlFor="saldo">Saldo:</label>
            <input
              type="number"
              name="saldo"
              placeholder="Digite seu saldo atual"
              value={saldo}
              onChange={({ target: { value } }) => setSaldo(value)}
            />
          </div>

          <div>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="number"
              name="cpf"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={({ target: { value } }) => setCpf(value)}
            />
          </div>
        </div>
        <button onClick={(e) => salvarEdicao(e)}>Salvar</button>
      </form>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
