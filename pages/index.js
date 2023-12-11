export default function Home() {
  return (
    <div className="container">
      <h1>Deliciosas Receitas</h1>
      <table>
        <thead>
          <tr>
            <th>Receita</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/receita-12" target="_blank">
                Receita 12
              </a>
            </td>
            <td>Receita 12 é só pra exportar um componente.</td>
          </tr>
          <tr>
            <td>
              <a href="/receita-13/newpage" target="_blank">
                Receita 13
              </a>
            </td>
            <td>Nessa receita 13 basicamente vamos criar funções que vão poder "virar" marcas em código HTML.</td>
          </tr>
          <tr>
            <td>
              <a href="/receita-14/movies" target="_blank">
                Receita 14
              </a>
            </td>
            <td>A Receita 14 é apenas pra acessar a API e retornar um JSON.</td>
          </tr>
          <tr>
            <td>
              <a href="/receita-15/movies2" target="_blank">
                Receita 15--Movies2
              </a>
            </td>
            <td>A Receita 15--Movies2 é para exibir o conteúdo único da API com IP dinâmico.</td>
          </tr>
          <tr>
            <td>
              <a href="/receita-15/ipExtreme" target="_blank">
                Receita 15--IpExtreme
              </a>
            </td>
            <td>Descrição da Receita 15--IpExtreme</td>
          </tr>
          <tr>
            <td>
              <a href="/receita-16/movies3" target="_blank">
                Receita 16
              </a>
            </td>
            <td>Descrição da Receita 16</td>
          </tr>
          <tr>
            <td>
              <a href="/receita-16/searchmovies/[key].js" target="_blank">
                Receita 16--Busca por Key
              </a>
            </td>
            <td>Descrição da Receita 16--Busca por Key</td>
          </tr>
        </tbody>
      </table>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: 'Arial', sans-serif;
        }

        .container {
          text-align: center;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          background: #FF6F61;
          color: #ffffff;
          border-radius: 4px;
          padding: 12px;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          border: 1px solid #FF6F61;
          padding: 10px;
          text-align: left;
        }

        th {
          background-color: #FF6F61;
          color: #ffffff;
        }

        a {
          text-decoration: none;
          color: #282726;
          font-weight: bold;
          transition: color 0.3s ease-in-out;
        }

        a:hover {
          color: #FF6F61;
        }
      `}</style>
    </div>
  );
}
