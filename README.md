# ISO AG
Projeto da ISO da Auto Geral simples, isto é que não envolve maven ou Spring MVC, atualizado mensalmente com os gráficos e índices.

## Atualizar o ISO AG
### Configurações para gerar versão

1º Precisa baixar do GIT HUB todas as atualizações feitas pela equipe de Qualidade, para isso na PASTA DA ISO, devemos dar um PULL na pasta ISO

EXEMPLO: No meu equipamento o projeto da ISO esta na pasta C:\ISO\ISO-AG, então efetuei o procedimento abaixo;

- Prompt de comando(CMD): c:\iso\iso-ag>git pull origin master

Baixei para minha pasta, todas as alterações feitas, agora sigo para o proxímo passo para gerar versão, caso a pasta seja diferente você deverá alterar o local trasejado;

2º Editar o arquivo 'copy.bat', mudar o caminho alterando o nome do seu computador e o caminho do projeto na sua maquina. Exemplo:  
  Original = robocopy \\\localhost\c$\users\jesiel\Desktop\iso-ag \\ad01\iso$ /e /purge.  
  Modificado = robocopy \\localhost\c$\users\larissa.camargo\Documents\Projetos\iso-ag \\ad01\iso$ /e /purge.  
  
3º Salve a alteração no arquivo COPY caso seja necessário e rode (execute) o 'copy.bat'.  

Se tudo estiver certo os arquivos serão atualizados e o cmd irá fechar automaticamente. 
- Depois é só conferir no site da ISO se os indicadores foram atualizados.
http://www.isoag.com/home.html

