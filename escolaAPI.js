// Desafio 01
// Resultado escolar

// Uma escola precisa automatizar a análise do desempenho de seus alunos. Atualmente,
// os professores calculam as médias manualmente, o que ocasiona erros.

// O sistema deverá receber as notas de um aluno,
// calcular seu desempenho e informar sua situação acadêmica.

// A escola utiliza os seguintes critérios:
// média igual ou superior a 7 significa aprovação;
// entre 5 e menos de 7, recuperação;
// abaixo de 5, reprovação.

// O sistema também deverá impedir o processamento de notas impossíveis.

const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});

app.post("/resultado", (req, res) => {
  const { nota1, nota2, nota3 } = req.body;

  const media = (nota1 + nota2 + nota3) / 3;
  let status = null;

  if (media >= 7) {
    status = "Aprovado";
  } else if (media >= 5) {
    status = "Em recuperação";
  } else {
    status = "Reprovado";
  }

  res.json({
    media: Number(media),
    status: status,
  });
});

// function calcularMedia (notas) {

//     let media = 0;

//     for (let i = 0; i < notas.Length(); i++) {
//         media += notas[i];
//     }

//     return media / notas.Length();
// }