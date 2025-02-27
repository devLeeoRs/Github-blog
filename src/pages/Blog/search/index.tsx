import { SearchContainer } from "./styled";

export function Search() {
  return (
    <SearchContainer>
      <div className="header">
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  );
}
