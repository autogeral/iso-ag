# ISO AG
Projeto da ISO da Auto Geral simples, isto é que não envolve maven ou Spring MVC, atualizado mensalmente com os gráficos e índices.

## Atualizar o ISO AG
### Configurações

1º Precisa baixar do GIT HUB todas as atualizações feitas pela equipe de Qualidade, para isso na PASTA DA ISO, devemos dar um PULL na pasta ISO

EXEMPLO; no meu equipamento o iso esta na pasta C:\ISO\ISO-AG, então efetuei o procedimento abaixo;

c:\iso\iso-ag>git pull origin master

baixei para minha pasta, todas as alterações feitas, agora sigo para o proxímo passo, caso a pasta seja diferente você deverá alterar o local trasejado;

2º Editar o arquivo 'copy.bat', mudar o caminho alterando o nome do seu computador e a localização do projeto na sua maquina. Exemplo:  
  Original = robocopy \\\localhost\c$\users\jesiel\Desktop\iso-ag \\ad01\iso$ /e /purge.  
  Modificado = robocopy \\\localhost\c$\users\vinicius.escano\Documents\Projetos\iso-ag \\ad01\iso$ /e /purge.  
  Modificado = robocopy \\\localhost\c$\_ISO_\iso-ag \\ad01\iso$ /e /purge.  

3º Salve a alteração no arquivo COPY caso seja necessario e rode (execulte) o 'copy.bat'.  

Se tudo estiver certo os arquivos serão atualizados e o cmd irá fechar. Depois é só conferir no isoag.com se os indicadores foram atualizados.
