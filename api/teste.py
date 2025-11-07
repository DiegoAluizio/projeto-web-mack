from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

# Criando a instância do FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # permite qualquer origem
    allow_credentials=True,
    allow_methods=["*"],      # permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],      # permite todos os headers
)


# Função para carregar o JSON do arquivo
def carregar_json():
    with open("produto.json", "r") as file:
        return json.load(file)
    
def carregar_destaque():
    with open("destaque.json", "r") as file:
        return json.load(file)

# Rota para retornar o conteúdo do arquivo JSON
@app.get("/produto/")
async def obter_json():
    dados = carregar_json()
    return dados

@app.get("/destaque/")
async def obter_destaque():
    dados = carregar_destaque()
    return dados