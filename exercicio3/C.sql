select departamentos.Nome as Departamento, projetos.Nome as Projeto, projetos.PrazoFinal
from departamentos
left join projetos
on departamentos.DepartamentoID = projetos.DepartamentoID
where projetos.Nome is not null
order by projetos.PrazoFinal desc