<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>React Native Barber App</h1>
  
  <h2>Descrição</h2>
  <p>
    O React Native Barber App é um aplicativo para marcação de horários e localização de barbeiros. Ele permite aos usuários visualizar barbeiros disponíveis próximos a eles, ler comentários e avaliações sobre os barbeiros, bem como agendar horários para serviços de barbearia.
  </p>
   <h2>Desenvolvimento</h2>
  <p>
    Aqui utilizei react-native para criação do aplicativo, para autenticação de login/logon utilizei o firebase e firestore para acelaerar no desenvolvimento e funcionalidades, podendo ser alterado para utilização de API's e bancos de dados locais.
  </p>
  <h2>Instalação</h2>
  <p>
    Para instalar as dependências necessárias, siga as etapas abaixo:
  </p>
  
  <ol>
    <li>Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalá-lo a partir do site oficial: https://nodejs.org </li>
    <li>Navegue até a pasta do projeto em seu terminal.</li>
    <li>Execute o seguinte comando para instalar as dependências do Node.js:
      <pre><code>npm install</code></pre>
    </li>
    <li>Instale as dependências específicas do React Native executando o seguinte comando:
      <pre><code>npx react-native init</code></pre>
      Certifique-se de estar no diretório raiz do seu projeto React Native no seu terminal.

<li>Instalando react-native-gesture-handler:

Execute o seguinte comando:
<pre><code>
npm install react-native-gesture-handler
  </code></pre></li>
<li>Vinculando react-native-gesture-handler:

Se você estiver usando o React Native versão 0.59 ou anterior, o pacote será vinculado automaticamente.
Se você estiver usando o React Native versão 0.60 ou superior, execute o seguinte comando para vincular o pacote:
<pre><code>
npx react-native link react-native-gesture-handler
  </code></pre></li>
<li>Instalando react-navigation e dependências relacionadas:

Execute o seguinte comando para instalar react-navigation e suas dependências:
<pre><code>
npm install @react-navigation/native @react-navigation/stack
  </code></pre></li>
<li>Instalando react-native-reanimated:

Execute o seguinte comando para instalar a dependência react-native-reanimated necessária para o React Navigation:
<pre><code>
npm install react-native-reanimated
  </code></pre></li>
<li>Vinculando react-native-reanimated:

Se você estiver usando o React Native versão 0.59 ou anterior, o pacote será vinculado automaticamente.
Se você estiver usando o React Native versão 0.60 ou superior, execute o seguinte comando para vincular o pacote:
<pre><code>
npx react-native link react-native-reanimated
  </code></pre></li>
<li>Instalando react-native-maps:

Execute o seguinte comando para instalar a dependência react-native-maps necessária para lidar com mapas:
<pre><code>
npm install react-native-maps
  </code></pre></li>
<li>Configurando a localização:

Para lidar com a localização no seu aplicativo, você precisará instalar a dependência react-native-geolocation-service. Execute o seguinte comando:
<pre><code>
npm install @react-native-community/geolocation
  </code></pre></li>
<li>Vinculando react-native-maps e react-native-geolocation-service:

Execute o seguinte comando para vincular as dependências ao seu projeto:
<pre><code>
npx react-native link react-native-maps
</code></pre></li>
<pre><code>
npx react-native link @react-native-community/geolocation
  </code></pre></li>
  </li>
  </ol>
  
  <h2>Páginas</h2>
  <p>
    O aplicativo possui as seguintes páginas:
  </p>
  
  <ul>
    <li>Página de Login</li>
     <img src="https://firebasestorage.googleapis.com/v0/b/barbeiro-abb68.appspot.com/o/1.png?alt=media&token=f97c4ef3-5ec5-4e6a-a2b0-036e520cb997" alt="Imagem 1" style="border-radius: 50%; max-width: 20px;">
    <li>Página de Logon</li>
    <img src="https://firebasestorage.googleapis.com/v0/b/barbeiro-abb68.appspot.com/o/2.png?alt=media&token=a8440cd2-6845-4229-97f0-27ee58ae04a1" alt="Imagem 1" style="border-radius: 50%; max-width: 20px;">
    <li>Página de Dashboard</li>
    <img src="https://firebasestorage.googleapis.com/v0/b/barbeiro-abb68.appspot.com/o/3.png?alt=media&token=bde45f00-bb3c-404a-bf72-e223af150fb1" alt="Imagem 1" style="border-radius: 50%; max-width: 20px;">
    <img src="https://firebasestorage.googleapis.com/v0/b/barbeiro-abb68.appspot.com/o/5.png?alt=media&token=6510477e-7700-4b6c-bcad-aab46a3a4915" alt="Imagem 1" style="border-radius: 50%; max-width: 20px;">
    <li>Página de Perfil</li>
    <img src="https://firebasestorage.googleapis.com/v0/b/barbeiro-abb68.appspot.com/o/6.png?alt=media&token=b0a80d7a-6351-42c2-abf5-16419a924dbe" alt="Imagem 1" style="border-radius: 50%; max-width: 20px;">
  </ul>

 
  
  <h2>Utilização</h2>
  <p>
    Para executar o aplicativo, utilize o seguinte comando:
  </p>
  
  <pre><code>npx react-native run-android</code></pre>
  
  <p>
    Certifique-se de ter um emulador Android em execução ou um dispositivo Android conectado ao seu computador.
  </p>
  
  <h2>Recursos Adicionais</h2>
  <p>
    O aplicativo utiliza as seguintes dependências de tela e manipulação do React Native:
  </p>
  
  <ul>
    <li>React Navigation</li>
    <li>Axios</li>
    <li>React Native Maps</li>
    <li>React Native Elements</li>
    <li>Outras dependências...</li>
  </ul>
  
  <h2>Autor</h2>
  <p>
    Lucas Nascimento
  </p>
  
  <h2>Contribuição</h2>
  <p>
    Contribuições são bem-vindas! Se você deseja contribuir para este projeto, sinta-se à vontade para enviar um pull request.
  </p>
</body>
</html>
