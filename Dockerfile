# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante do código-fonte da aplicação
COPY . .

# Exponha a porta na qual o aplicativo Node.js será executado (caso necessário)
# EXPOSE 3000

# Configure o comando de inicialização do aplicativo
CMD ["npm", "run", "dev"]
