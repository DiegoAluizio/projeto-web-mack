from fastapi import FastAPI
import json

# Criando a instância do FastAPI
app = FastAPI()

# Função para carregar o JSON do arquivo
def carregar_json():
    with open("enviar.json", "r") as file:
        return json.load(file)

# Rota para retornar o conteúdo do arquivo JSON
@app.get("/obter_json/")
async def obter_json():
    dados = carregar_json()
    return dados
