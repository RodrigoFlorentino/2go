select departamentos.Nome, COUNT(funcionarios.DepartamentoID) as Qtde from departamentos
left join funcionarios on departamentos.DepartamentoID = funcionarios.DepartamentoID
group BY Nome