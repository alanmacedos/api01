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
const app = express();
const PORT = 3000;

app.use(express.json());

function calcularMedia (notas) {

    let media = 0;

    for (let i = 0; i < notas.Length(); i++) {
        media += notas[i];
    }

    return media / notas.Length();
}

app.get('/', (req, res) => {
  res.json({ mensagem: 'Minha API está funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});