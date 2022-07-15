select funcionarios.Nome, funcionarios.Cargo, funcionarios.CPF, funcionarios.DataContrato, departamentos.Nome as Departamento
from funcionarios
left join departamentos
on funcionarios.DepartamentoID = departamentos.DepartamentoID
order by departamentos.Nome asc, funcionarios.Nome asc